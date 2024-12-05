"use client";

import { useEffect, useState } from "react";
import { FastDelivery } from "../homepage/fast_delivery";
import { Greentwo } from "../homepage/greenheader";
import { MainCart } from "../homepage/main.cart/main.cart";
import { groupBy } from "lodash";
import { TProduct } from "../homepage/main.cart/main.cart";

type food = {
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getFoods() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data = await res.json();
        setFoods(data.data || []);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        console.error("Error fetching foods:", err);
      }
    }
    getFoods();
  }, []);

  const groupedData = groupBy(
    foods,
    (food) => food.categoryId?.name || "Unknown"
  );

  return (
    <div className="flex flex-col w-screen h-full gap-[50px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      {error ? (
        <div className="text-red-500">Error loading foods: {error}</div>
      ) : (
        Object.keys(groupedData).map((categoryName, index) => (
          <MainCart
            key={categoryName || index}
            text={categoryName}
            allin="Бүгдийг харах"
            foodDatas={groupedData[categoryName]}
          />
        ))
      )}
    </div>
  );
};
