import { Littlebox } from "../menu/littlebox/littlebox";
import { Addcard } from "./addcard/Addcard";

export const OrderPage = () => {
  return (
    <div className="flex justify-center items-center w-[80%] h-auto">
      <div className="w-full grid grid-cols-2 gap-2 p-4">
        <div className="flex flex-col w-full gap-10 p-4">
          <Addcard
            text="Алхам 1"
            status="Хүлээгдэж байна"
            address="Хаягийн мэдээлэл оруулах"
          />
          <div className="flex w-full h-full justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center w-full rounded-xl border p-4 shadow-lg gap-[32px]">
                <div className="flex flex-col w-full gap-3">
                  <div className="w-full flex items-center text-[20px]">
                    Хаяг аа оруулна уу
                  </div>
                  <div className="flex flex-col gap-4">
                    <select className="border-[#ECEDF0] bg-[#F7F7F8] rounded-lg p-4 text-[14px] text-[#8B8E95]">
                      <option value="">Дүүрэг сонгоно уу</option>
                    </select>
                    <select className="border-[#ECEDF0] bg-[#F7F7F8] rounded-lg p-4 text-[14px] text-[#8B8E95]">
                      <option value="">Хороо сонгоно уу</option>
                    </select>
                    <select className="border-[#ECEDF0] bg-[#F7F7F8] rounded-lg p-4 text-[14px] text-[#8B8E95]">
                      <option value="">Байр, гудамж сонгоно уу</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                  <div className="w-full flex items-center text-[20px]">
                    Нэмэлт мэдээлэл
                  </div>
                  <textarea
                    name=""
                    rows={5}
                    className="w-full border p-3"
                    id=""
                  ></textarea>
                </div>
                <div className="flex flex-col w-full gap-4">
                  <div className="w-full flex items-center text-[20px]">
                    Утасны дугаар*
                  </div>
                  <input
                    type="text"
                    placeholder="Утасны дугаараа оруулна уу"
                    className="border-[#ECEDF0] bg-[#F7F7F8] rounded-lg p-4 text-[14px] text-[#8B8E95]"
                  />
                </div>
                <div className="flex flex-col w-full gap-4">
                  <div className="w-full flex items-center text-[20px]">
                    Төлбөр төлөх
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex justify-center items-center w-full gap-2">
                      <input type="checkbox" />
                      <button className="text-[#8B8E95]">Бэлнээр</button>
                    </div>
                    <div className="flex justify-center items-center w-full gap-2">
                      <input type="checkbox" />
                      <button className="text-[#8B8E95]">Картаар</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10 p-4">
          <div className="flex flex-col w-full gap-10">
            <Addcard
              text="Алхам 2"
              status="Хүлээгдэж байна"
              address="Захиалга баталгаажуулах"
            />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex flex-col justify-between items-center w-full h-full rounded-xl border p-4 shadow-lg gap-[32px]">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full border"></div>
                  <div className="w-full gap-4 grid grid-cols-2 ">
                    <img src="./cook2.png" alt="" className="h-auto" />
                    <div className="flex w-full h-full">
                      <div className="w-full h-full flex flex-col justify-between ">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col w-full gap-2">
                            <h1 className="font-bold text-[20px]">
                              Main Pizza{" "}
                            </h1>
                            <h1 className="text-[#18BA51] font-semibold">
                              34,800₮
                            </h1>
                          </div>
                        </div>
                        <div className="flex items-center text-[20px] text-[#767676]">
                          Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр{" "}
                        </div>
                        <div className="flex w-[50%] justify-between items-end">
                          <button className="flex rounded-md w-[40px] bg-[#18BA51] text-[white] text-[25px]">
                            <p className="w-full h-full flex justify-center items-center">
                              -
                            </p>
                          </button>
                          <div className="flex justify-center items-center h-full">
                            <p className="flex justify-center items-center ">
                              1
                            </p>
                          </div>
                          <button className="flex justify-center items-center w-[40px] rounded-md bg-[#18BA51] text-[white] text-[25px]">
                            <p className="flex justify-center items-center">
                              +
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full border"></div>
                </div>
                <div className="flex w-full h-[10%] justify-center items-center p-2">
                  <div className="w-[40%] h-full flex flex-col justify-center">
                    <h1 className="text-[#5E6166]">Нийт төлөх дүн</h1>
                    <h2 className="font-bold">34,800₮</h2>
                  </div>
                  <button className="w-[40%] h-full flex justify-center items-center rounded-md bg-[#18BA51] text-[white] font-normal">
                    Захиалах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
