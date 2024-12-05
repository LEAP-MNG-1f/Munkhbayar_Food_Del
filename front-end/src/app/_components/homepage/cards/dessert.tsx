import { CustomizedDialogs } from "../../icon/order";

export type CookcartProps = {
  text: string | undefined;
  price: string | undefined;
  img: string | undefined;
};

export const Dessertcart = ({ text, price, img }: CookcartProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex justify-center items-center">
        <img src={img} className="flex rounded-xl w-full h-[300px]" />
      </div>
      <div>
        <h1 className="font-bold text-xl flex justify-between items-center">
          {text}
          <CustomizedDialogs />
        </h1>
        <div className="flex gap-3 font-medium text-[#18BA51]">
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};
