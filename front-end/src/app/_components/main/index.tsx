import { Cookcard } from "../cards/card";
import { Arrowright } from "../svg/arrowright";
import { Staricon } from "../svg/starIcon";
import { Mainsale } from "./mainsales";

export const Main = () => {
  return (
    <div className="w-[80%] h-auto justify-center items-center">
      <div className="w-full flex  justify-between">
        <div className="flex gap-3 font-bold text-xl justify-center items-center">
          <Staricon />
          <h1>Хямдралтай</h1>
        </div>
        <div className="flex justify-center items-center gap-3 text-[#18BA51]">
          <h1>Бүгдийг харах</h1>
          <Arrowright />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        <Cookcard />
        <Cookcard />
        <Cookcard />
        <Cookcard />
      </div>
    </div>
  );
};
