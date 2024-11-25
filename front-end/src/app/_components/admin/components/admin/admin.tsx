"use client";
import { AdminAddCart } from "../addcart/addcart";
import { Admincart } from "../cart/cart";
import { SelectAdmin } from "../select/select";

export const Adminpage = () => {
  const arr = Array(12).fill(null);
  return (
    <div className="flex w-[80%] h-auto py-4 gap-7">
      <div className="flex flex-col w-[10%] h-full gap-[40px]">
        <div className="w-full text-[24px] font-bold">Food menu</div>
        <div className="flex flex-col items-start w-full h-auto gap-4 ">
          <SelectAdmin text="Breakfast" />
          <SelectAdmin text="Soup" />
          <SelectAdmin text="Main course" />
          <SelectAdmin text="Desserts" />
          <div className="flex w-full border-2 rounded-md justify-center items-center">
            <div className="flex justify-center items-center p-1 text-[#5E6166] ">
              +
            </div>
            <input
              type="text"
              placeholder="Create new category"
              className="flex justify-center items-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-4 p-4">
        <div className="flex justify-between w-full">
          <div className="text-[24px] font-bold">Breakfast</div>

          <AdminAddCart />
        </div>
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-3">
          {arr.map((item, index) => {
            return (
              <Admincart
                key={index}
                text="Oreo shake"
                img="./dessert.png"
                price={14800}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
