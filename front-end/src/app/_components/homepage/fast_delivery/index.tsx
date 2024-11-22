import { DeliveryCard } from "./card";

export const FastDelivery = () => {
  return (
    <div className="flex justify-between items-center w-[80%] h-full">
      <div className="grid grid-cols-4 gap-3 w-full">
        <DeliveryCard
          text="Захиалга бэлтгэлийн явцыг хянах"
          title="Хүргэлтийн төлөв хянах"
        />
        <DeliveryCard
          text="Захиалга бэлтгэлийн явцыг хянах"
          title="Шуурхай хүргэлт"
        />
        <DeliveryCard
          text="Захиалга бэлтгэлийн явцыг хянах"
          title="Эрүүл, баталгаат орц"
        />
        <DeliveryCard
          text="Захиалга бэлтгэлийн явцыг хянах"
          title="Хоолны өргөн сонголт"
        />
      </div>
    </div>
  );
};
