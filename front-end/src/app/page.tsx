import { Main } from "./_components/main";
import { FastDelivery } from "./_components/fast_delivery";
import { Greentwo } from "./_components/greenheader";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full gap-[100px] justify-center items-center pb-[100px]">
      <Greentwo />
      <FastDelivery />
      <Main />
    </div>
  );
}
