"use client";

import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const signup = () => {
    router.push("/signup");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-[600px] h-auto p-[100px]">
        <div className="flex flex-col justify-center items-center w-full h-full gap-[48px]">
          <h1 className="flex justify-center items-center text-[24px] font-semibold">
            Нэвтрэх
          </h1>
          <div className="flex flex-col w-full h-auto justify-start items-start gap-[8px]">
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex flex-col w-full gap-1">
                <div>Имэйл </div>
                <input
                  type="text"
                  placeholder="Имэйл хаягаа оруулна уу"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div>Нууц үг </div>
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
            </div>
            <button className="flex justify-end items-center w-full text-[16px] text-[#3F4145]">
              Нууц үг сэргээх
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-[32px]">
            <button className=" flex justify-center items-center rounded-md  p-[8px] w-full hover:bg-[#EEEFF2]">
              Нэвтрэх
            </button>
            <h1 className="flex text-[10px] text-[#1C20243D]">Эсвэл</h1>
            <button
              onClick={signup}
              className="flex justify-center items-center rounded-md border-[#18BA51] border-2 p-[8px] w-full hover:bg-[#18BA51]"
            >
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
