type addcardProps = {
  text: string;
  address: string;
  status: string;
};

export const Addcard = (props: addcardProps) => {
  return (
    <div className="flex w-full h-full gap-3 ">
      <div className="flex justify-center items-center border-blue-600 border rounded-[50%] w-[40px] h-[40px]">
        <div className="border bg-blue-600 w-[20px] h-[20px] rounded-[50%]"></div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-[14px] text-[#8B8E95]">{props.text}</h1>
        <h1>{props.address}</h1>
        <h1 className="text-[14px] text-[#0468C8]">{props.status}</h1>
      </div>
    </div>
  );
};
