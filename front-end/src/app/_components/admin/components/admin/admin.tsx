"use client";
import { useEffect, useState } from "react";
import { AdminAddCart } from "../addcart/addcart";
import { ResponsiveDialog } from "../createcart/createcart";
import { SelectAdmin } from "../select/select";
import { categoryDatas } from "../datatype/datatype";

export const Adminpage = () => {
  const [categories, setCategories] = useState<categoryDatas[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`
        );
        const data = await response.json();
        setCategories(data); // Store fetched categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex w-[80%] h-auto py-[100px] gap-7">
      <div className="flex flex-col w-[20%] h-auto gap-[40px]">
        <div className="w-full text-[24px] font-bold">Food menu</div>
        <div className="flex flex-col items-start w-full h-auto gap-4 ">
          <SelectAdmin categories={categories} />
          <div className="flex w-full h-auto">
            <ResponsiveDialog />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-4 pl-[50px]">
        <div className="flex justify-between w-full">
          <div className="text-[24px] font-bold">Breakfast</div>
          <AdminAddCart />
        </div>
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-3">
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};
