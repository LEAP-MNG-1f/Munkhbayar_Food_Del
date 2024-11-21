import { Salad } from "../../cards/salad";
import { Arrowright } from "../../svg/arrowright";
import { Staricon } from "../../svg/starIcon";

export const Mainsalad = () => {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-center items-center gap-6">
      <div className="w-full flex justify-between py-6">
        <div className="flex gap-3 font-bold text-xl justify-center items-center">
          <Staricon />
          <h1>Салад ба зууш</h1>
        </div>
        <div className="flex justify-center items-center gap-3 text-[#18BA51]">
          <h1>Бүгдийг харах</h1>
          <Arrowright />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-6">
        <Salad />
        <Salad />
        <Salad />
        <Salad />
      </div>
    </div>
  );
};
