"use client";

import { useRouter } from "next/navigation";

export const Signup = () => {
  const router = useRouter();
  const signup = () => {
    router.push("/signup");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-[600px] h-auto p-[100px]">
        <div className="flex flex-col justify-center items-center w-full h-full gap-[48px]">
          <h1 className="flex justify-center items-center text-[24px] font-semibold">
            Бүртгүүлэх
          </h1>
          <div className="flex flex-col w-full h-auto justify-start items-start gap-[16px]">
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex flex-col w-full gap-1">
                <div>Нэр</div>
                <input
                  type="text"
                  placeholder="Нэрээ оруулна уу"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div>И-мэйл</div>
                <input
                  type="password"
                  placeholder="И-мэйл хаягаа оруулна уу"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div>Хаяг</div>
                <input
                  type="password"
                  placeholder="Та хаягаа оруулна уу"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div>Нууц үг </div>
                <input
                  type="password"
                  placeholder="Нууц үгээ оруулна уу"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <div>Нууц үг давтах</div>
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="p-2 text-[#8B8E95] text-[12px] bg-[#F7F7F8]"
                />
              </div>
            </div>
            <div className="flex w-full h-auto gap-2">
              <input
                className="flex justify-start items-center text-[#3F4145]"
                type="checkbox"
              />
              <h1>Үйлчилгээний нөхцөл зөвшөөрөх</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-[32px]">
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
