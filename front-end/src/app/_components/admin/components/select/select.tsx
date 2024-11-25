type SelectAdminProps = {
  text: string;
};

export const SelectAdmin = (props: SelectAdminProps) => {
  return (
    <button className="w-full flex justify-between items-center border rounded-md p-2 hover:bg-[#18BA51] font-medium">
      <h1>{props.text}</h1>
      <div className="flex flex-col gap-1 p-2">
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
        <div className="flex rounded-[50%] bg-black border w-1 h-1"></div>
      </div>
    </button>
  );
};
