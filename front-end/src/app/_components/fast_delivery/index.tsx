import { BookIcon } from "../svg/bookIcon";

export const FastDelivery = () => {
  return (
    <div className="flex justify-between items-center w-[80%] h-full">
      <div className="grid grid-cols-4 gap-3 w-full">
        <div className="flex flex-col w-full h-auto justify-between p-6 border-2 rounded-xl shadow-xl">
          <div className="flex flex-col gap-6 justify-center">
            <div className="py-4">
              <BookIcon />
            </div>
            <div className="flex flex-col text-xl gap-2">
              <h1 className="font-bold">Хүргэлтийн төлөв хянах</h1>
              <h1>Захиалга бэлтгэлийн явцыг хянах</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto justify-between p-6 border-2 rounded-xl shadow-xl">
          <div className="flex flex-col gap-6 justify-center">
            <div className="py-4">
              <BookIcon />
            </div>
            <div className="flex flex-col text-xl gap-2">
              <h1 className="font-bold">Хүргэлтийн төлөв хянах</h1>
              <h1>Захиалга бэлтгэлийн явцыг хянах</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto justify-between p-6 border-2 rounded-xl shadow-xl">
          <div className="flex flex-col gap-6 justify-center">
            <div className="py-4">
              <BookIcon />
            </div>
            <div className="flex flex-col text-xl gap-2">
              <h1 className="font-bold">Хүргэлтийн төлөв хянах</h1>
              <h1>Захиалга бэлтгэлийн явцыг хянах</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto justify-between p-6 border-2 rounded-xl shadow-xl">
          <div className="flex flex-col gap-6 justify-center">
            <div className="py-4">
              <BookIcon />
            </div>
            <div className="flex flex-col text-xl gap-2">
              <h1 className="font-bold">Хүргэлтийн төлөв хянах</h1>
              <h1>Захиалга бэлтгэлийн явцыг хянах</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
