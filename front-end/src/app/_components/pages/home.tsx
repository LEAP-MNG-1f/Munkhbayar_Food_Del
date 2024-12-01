"use client";

import { useEffect, useState } from "react";
import { FastDelivery } from "../homepage/fast_delivery";
import { Greentwo } from "../homepage/greenheader";
import { MainCart } from "../homepage/main.cart/main.cart";
import { groupBy } from "lodash";

// const foodDatas = [
//   {
//     _id: "6747c2fd74b6d0e7da5bb123",
//     name: "Cake",
//     image:
//       "https://www.ucsf.edu/sites/default/files/2019-09/vegetables-cooking-food.jpg",
//     price: "5000",
//     categoryId: null,
//     __v: 0,
//   },
//   {
//     _id: "67488dabfd49119cb3c634c9",
//     name: "Lasagna",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L_h3waPOw1ELBb8fbAD0hBT-umrayla5JA&s",
//     price: "9000",
//     categoryId: {
//       _id: "67488b92410535e0f3169441",
//       name: "Хямдралтай хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488df3e14563fdbbb7c2ad",
//     name: "Tiramisu",
//     image:
//       "https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg",
//     price: "10000",
//     categoryId: {
//       _id: "67488b92410535e0f3169441",
//       name: "Хямдралтай хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488eabd954ca69aa31fedb",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bca2be77968473a9eb7",
//       name: "Монгол хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488ebcd954ca69aa31fedd",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bca2be77968473a9eb7",
//       name: "Монгол хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488ee3d10e25cfe7ee4287",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bbb860b3dcbc3f35f22",
//       name: "Солонгос хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488ee7d10e25cfe7ee428a",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bbb860b3dcbc3f35f22",
//       name: "Солонгос хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488ef6ad57490c85e75642",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bdcfbf8dda01af866ce",
//       name: "Хятад хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "67488ef7ad57490c85e75644",
//     name: "Хуушуур",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
//     price: "10000",
//     categoryId: {
//       _id: "67488bdcfbf8dda01af866ce",
//       name: "Хятад хоол",
//       __v: 0,
//     },
//     __v: 0,
//   },
// ];
export const Homepage = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function getFoods() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`);
      const data = await res.json();
      console.log("data:", data);
      const foods = data.data;
      setFoods(foods);
    }
    getFoods();
  }, []);

  const groupedData = groupBy(foods, (food) => food.categoryId?.name);
  console.log(groupedData);

  return (
    <div className="flex flex-col w-screen h-full gap-[50px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      {Object.keys(groupedData).map((categoryName) => (
        <MainCart
          text="Хямдралтай"
          allin="Бүгдийг харах"
          foodDatas={groupedData[categoryName]}
        />
      ))}
    </div>
  );
};
