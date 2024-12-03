import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";

export const Littlebox = () => {
  const [number, setNumber] = useState(0);

  const numberconstincrease = () => {
    setNumber(number + 1);
  };
  const constdecrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="flex w-full p-4 gap-3">
      <div className="flex w-full h-full">
        <img src="./cook2.png" alt="" />
      </div>
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-full gap-2">
            <h1 className="font-bold text-[20px]">Main Pizza </h1>
            <h1 className="text-[#18BA51] font-semibold">34,800₮</h1>
          </div>
          <div className="flex justify-center items-center hover:bg-slate-200 rounded-xl p-2">
            <CloseIcon />
          </div>
        </div>
        <div className="flex items-center text-[20px] text-[#767676]">
          Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр{" "}
        </div>
        <div className="flex w-[50%] justify-between items-end">
          <div className="flex rounded-md w-[40px] bg-[#18BA51] text-[white] text-[25px]">
            <button
              className="w-full h-full flex justify-center items-center"
              onClick={numberconstincrease}
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center h-full">
            {number}
          </div>

          <button
            className="flex justify-center items-center w-[40px] rounded-md bg-[#18BA51] text-[white] text-[25px]"
            onClick={constdecrease}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
