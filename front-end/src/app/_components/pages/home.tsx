"use client";

import { useEffect, useState } from "react";
import { FastDelivery } from "../homepage/fast_delivery";
import { Greentwo } from "../homepage/greenheader";
import { MainCart } from "../homepage/main.cart/main.cart";
import { groupBy } from "lodash";
import { TProduct } from "../homepage/main.cart/main.cart";

export type food = {
  _id?: string;
  name?: string;
  image?: string;
  ingredient?: string;
  categoryId?: {
    _id?: string;
    name?: string;
    __v?: number;
  };
  price?: string;
  __v?: number;
};

export const Homepage = () => {
  const [foods, setFoods] = useState<TProduct[]>([]);
  useEffect(() => {
    async function getFoods() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`);
      const data = await res.json();
      // console.log("data:", data);
      const foods = data.data;
      setFoods(foods);
    }
    getFoods();
  }, []);

  const groupedData = groupBy(foods, (food) => food.categoryId.name);
  // console.log(groupedData);

  return (
    <div className="flex flex-col w-screen h-full gap-[50px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      {Object.keys(groupedData).map((categoryName) => (
        <MainCart
          key="index"
          text={categoryName}
          allin="Бүгдийг харах"
          foodDatas={groupedData[categoryName]}
        />
      ))}
    </div>
  );
};
