export const Cookscard = () => {
  return (
    <div className="flex justify-between items-center w-[80%] gap-[26px] pt-[100px]">
      <button className="flex justify-center items-center w-full border-2 rounded-xl p-3 font-semibold hover:bg-green-500">
        Breakfast{" "}
      </button>
      <button className="flex justify-center items-center w-full border-2 rounded-xl p-3 font-semibold hover:bg-green-500">
        Soup
      </button>
      <button className="flex justify-center items-center w-full border-2 rounded-xl p-3 font-semibold hover:bg-green-500">
        Main Course
      </button>
      <button className="flex justify-center items-center w-full border-2 rounded-xl p-3 font-semibold hover:bg-green-500">
        Dessert
      </button>
    </div>
  );
};
