"use client";
import { useEffect, useState } from "react";
import { AdminAddCart } from "../addcart/addcart";
import { ResponsiveDialog } from "../createcart/createcart";
import { SelectAdmin } from "../select/select";
import { categoryDatas, foodDatas } from "../datatype/datatype";
import { Dessertcart } from "@/app/_components/homepage/cards/dessert";

export const Adminpage = () => {
  const [categories, setCategories] = useState<categoryDatas[]>([]);
  const [foods, setFood] = useState<foodDatas[]>([]);

  const fetchFood = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`
      );
      const data = await response.json();
      if (!response.ok) {
        setFood(data.data);
      } else {
        console.error(data);
      }
      console.log("data irelee", data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`
      );
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        setCategories(data.data);
      } else {
        console.error(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchFood();
  }, []);

  const deleteCategory = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category._id !== id)
        );
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  const editCategory = async (
    id: string,
    updatedData: Partial<categoryDatas>
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const updatedCategory = await response.json();
        console.log(updatedCategory);
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category._id === id ? updatedCategory.data : category
          )
        );
      } else {
        const errorData = await response.json();
        console.error(response.status, errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-[80%] h-auto py-[100px] gap-7">
      <div className="flex flex-col w-[20%] h-auto gap-[40px]">
        <div className="w-full text-[24px] font-bold">Food menu</div>
        <div className="flex flex-col items-start w-full h-auto gap-4 ">
          <SelectAdmin
            categories={categories}
            deleteCategory={deleteCategory}
            editCategory={editCategory}
          />

          <div className="flex w-full h-auto">
            <ResponsiveDialog />
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-4 pl-[50px]">
        <div className="flex justify-between w-full">
          <div className="text-[24px] font-bold">Breakfast</div>
          <AdminAddCart foodData={foods} />
        </div>
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-3">
          {foods?.map((food) => {
            return (
              <Dessertcart
                key="index"
                text={food.name}
                price={food.price}
                img={food.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
