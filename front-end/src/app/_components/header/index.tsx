"use client";
import { useRouter } from "next/navigation";
import { CustomizedDialogs } from "../icon/order";

export const Header = () => {
  const router = useRouter();
  const Cookmenu = () => {
    router.push("/menu");
  };
  const Homepage = () => {
    router.push("/");
  };
  return (
    <div className="w-screen h-full">
      <div className="m-auto">
        <div className="w-full">
          <div className="flex justify-center items-center px-6 py-4 w-full hover:bg-slate-200">
            <div className="flex justify-between items-center w-[80%]">
              <div className="flex justify-center items-center gap-8 font-medium hover:bg-slate-100 py-2 px-4 rounded-xl">
                <img src="./frame.svg" alt="" />
                <button
                  className="hover:bg-slate-200 py-2 px-4 rounded-xl"
                  onClick={Homepage}
                >
                  НҮҮР
                </button>
                <button
                  className="hover:bg-slate-200 py-2 px-4 rounded-xl"
                  onClick={Cookmenu}
                >
                  ХООЛНЫ ЦЭС
                </button>
                <div className="hover:bg-slate-200 py-2 px-4 rounded-xl">
                  ХҮРГЭЛТИЙН БҮС
                </div>
              </div>
              <div className="flex justify-center items-center gap-3 font-medium ">
                <div className="flex justify-center items-center gap-3 hover:bg-slate-100 py-2 px-4 rounded-xl">
                  <CustomizedDialogs />
                </div>
                <div className="flex justify-center items-center gap-3 hover:bg-slate-100 py-2 px-4 rounded-xl">
                  <img src="./vector1.svg" alt="" />
                  <h1 className="flex justify-center items-center">Нэвтрэх</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
