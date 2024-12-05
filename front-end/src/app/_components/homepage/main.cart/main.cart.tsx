import { Dessertcart } from "../cards/dessert";
import { Arrowright } from "../svg/arrowright";
import { Staricon } from "../svg/starIcon";

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  price: number;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  // ingredient: string;
  // __v: number;
};
type TMainCartProps = {
  foodDatas?: TProduct[];
  text?: string;
  allin?: string;
};

export const MainCart = ({ foodDatas, text, allin }: TMainCartProps) => {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-center items-center gap-6">
      <div className="w-full flex justify-between py-6">
        <div className="flex gap-3 font-bold text-xl justify-center items-center">
          <Staricon />
          <h1>{text}</h1>
        </div>
        <div className="flex justify-center items-center gap-3 text-[#18BA51]">
          <h1>{allin}</h1>
          <Arrowright />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-6">
        {foodDatas?.map((foodData) => {
          return (
            <Dessertcart
              key="index"
              text={foodData?.name}
              price={foodData.price}
              img={foodData?.image}
            />
          );
        })}
      </div>
    </div>
  );
};
