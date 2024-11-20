import { FastDelivery } from "./_components/fast_delivery";
import { Greentwo } from "./_components/greenheader";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full gap-[100px] justify-center items-center ">
      <Greentwo />
      <FastDelivery />
      <div></div>
    </div>
  );
}
