type CookcartProps = {
  text: string;
  price: number;
  img: string;
};

export const Admincart = (props: CookcartProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex justify-center items-center">
        <img src={props.img} className="flex rounded-xl w-full h-[300px]" />
      </div>
      <div>
        <h1 className="font-bold text-xl flex justify-between items-center">
          {props.text}
        </h1>
        <div className="flex gap-3 font-medium text-[#18BA51]">
          <h1>{props.price}</h1>
        </div>
      </div>
    </div>
  );
};
