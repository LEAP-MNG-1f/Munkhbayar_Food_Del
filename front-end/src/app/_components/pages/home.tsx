import { FastDelivery } from "../homepage/fast_delivery";
import { Greentwo } from "../homepage/greenheader";
import { Dessert } from "../homepage/main/dessert";
import { Mainsales } from "../homepage/main/maincook";
import { Mainsale } from "../homepage/main/mainsales";
import { Mainsalad } from "../homepage/main/salad";

export const Homepage = () => {
  return (
    <main className="flex flex-col w-screen h-full gap-[50px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      <Mainsales />
      <Mainsale />
      <Mainsalad />
      <Dessert />
    </main>
  );
};
