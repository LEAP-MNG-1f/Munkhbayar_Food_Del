"use client";
import { useEffect, useState } from "react";
import { FastDelivery } from "../homepage/fast_delivery";
import { Greentwo } from "../homepage/greenheader";
import { Dessert } from "../homepage/main/dessert";
import { Mainsales } from "../homepage/main/maincook";
import { Mainsale } from "../homepage/main/mainsales";
import { Mainsalad } from "../homepage/main/salad";

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
  return (
    <main className="flex flex-col w-screen h-full gap-[50px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      
      {/* <Mainsales />
      <Mainsale />
      <Mainsalad />
      <Dessert />  */}
    </main>
  );
};
