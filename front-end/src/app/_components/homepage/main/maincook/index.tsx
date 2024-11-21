import { Cookcard } from "../../cards/salesmenu";
import { Arrowright } from "../../svg/arrowright";
import { Staricon } from "../../svg/starIcon";

export const Mainsales = () => {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-center items-center gap-6">
      <div className="w-full flex justify-between py-6">
        <div className="flex gap-3 font-bold text-xl justify-center items-center">
          <Staricon />
          <h1>Хямдралтай</h1>
        </div>
        <div className="flex justify-center items-center gap-3 text-[#18BA51]">
          <h1>Бүгдийг харах</h1>
          <Arrowright />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-6">
        <Cookcard />
        <Cookcard />
        <Cookcard />
        <Cookcard />
      </div>
    </div>
  );
};
