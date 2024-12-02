type SelectAdminProps = {
  text?: string;
  focus?: string;
  buttonName?: string;
};

export const SelectAdmin = ({ text, focus, buttonName }: SelectAdminProps) => {
  // const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL;
  // try {
  //   const res = await fetch(`$(BACKEND_ENDPOINT)/categories`,{

  //   });
  // } catch (error) {
  //   console.log(error);
  // }
  return (
    <button className="w-full flex justify-between items-center border rounded-md p-2 hover:bg-[#18BA51] font-medium">
      <h1>{text}</h1>
      <div className="flex flex-col gap-1 p-2">
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
      </div>
    </button>
  );
};
