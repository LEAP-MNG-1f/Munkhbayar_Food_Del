import { BookIcon } from "../svg/bookIcon";

type DeliveryCardProps = {
  text?: string;
  title?: string;
};

export const DeliveryCard = (props: DeliveryCardProps) => {
  return (
    <div className="flex flex-col w-full h-auto justify-between p-6 border-2 rounded-xl shadow-xl">
      <div className="flex flex-col gap-6 justify-center">
        <div className="py-4">
          <BookIcon />
        </div>
        <div className="flex flex-col text-xl gap-2">
          <h1 className="font-bold">{props.title}</h1>
          <h1>{props.text}</h1>
        </div>
      </div>
    </div>
  );
};
