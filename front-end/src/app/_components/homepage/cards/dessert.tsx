export const Dessertcart = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex justify-center items-center">
        <img src="./dessert.png" className="flex rounded-xl w-full h-[300px]" />
      </div>
      <div>
        <h1 className="font-bold text-xl">Өглөөний хоол</h1>
        <div className="flex gap-3 font-medium text-[#18BA51]">
          <h1>14,800₮</h1>
        </div>
      </div>
    </div>
  );
};