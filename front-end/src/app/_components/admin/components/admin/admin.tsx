"use client";
import { useEffect, useState } from "react";
import { AdminAddCart } from "../addcart/addcart";
import { ResponsiveDialog } from "../createcart/createcart";
import { SelectAdmin } from "../select/select";
import { categoryDatas } from "../datatype/datatype";

type AdminSideBarProps = {
  categoryDatas?: categoryDatas[];
};

export const Adminpage = ({ categoryDatas }: AdminSideBarProps) => {
  const [focus, setFocus] = useState("6746aa0bc4b0fe49cd307e72");
  console.log("");

  const handelClikFocus = (button: string | undefined) => {
    if (button !== undefined) {
      setFocus(button);
    } else {
      // console.log("Утга байхгүй байна.");
    }
  };
  // const [adminfoods, setAdminFoods] = useState<TProduct[]>([]);
  // useEffect(() => {
  //   async function getFoods() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`);
  //     const data = await res.json();
  //     const foods = data.data;
  //     setAdminFoods(adminfoods);
  //   }
  //   getFoods();
  // }, []);

  // const groupedData = groupBy(
  //   adminfoods,
  //   (TProduct) => TProduct.categoryId?.name
  // );

  return (
    <div className="flex w-[80%] h-auto py-[100px] gap-7">
      <div className="flex flex-col w-[20%] h-auto gap-[40px]">
        <div className="w-full text-[24px] font-bold">Food menu</div>
        <div className="flex flex-col items-start w-full h-auto gap-4 ">
          {categoryDatas?.map((categoryData) => {
            return (
              <button
                key={categoryData._id}
                onClick={() => handelClikFocus(categoryData?._id)}
              >
                <SelectAdmin
                  text={categoryData?.name}
                  focus={focus}
                  buttonName={categoryData?._id}
                />
              </button>
            );
          })}
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
          {/* {Object.keys(groupedData).map((categoryName) => (
            <Admincart key="index" text={categoryName} />
          ))} */}
        </div>
      </div>
    </div>
  );
};
