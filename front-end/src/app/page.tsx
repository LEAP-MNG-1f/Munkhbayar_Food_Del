import { FastDelivery } from "./_components/fast_delivery";
import { Greentwo } from "./_components/greenheader";
import { Dessert } from "./_components/main/dessert";
import { Main } from "./_components/main/maincook";
import { Mainsale } from "./_components/main/mainsales";
import { Mainsalad } from "./_components/main/salad";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full gap-[100px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      <Main />
      <Mainsale />
      <Mainsalad />
      <Dessert />
    </div>
  );
}
