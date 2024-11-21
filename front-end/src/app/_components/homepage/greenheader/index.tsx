export const Greentwo = () => {
  return (
    <div
      className="flex w-full h-[800px] bg-[#18BA51] justify-center"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-[80%] h-auto justify-center items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-full items-center">
            <div className="flex flex-col justify-between gap-6 p-2">
              <h1 className="text-6xl font-bold text-[#FFFFFF]">
                Pinecone <br /> Food delivery
              </h1>
              <div className="border-[1px]"></div>
              <h3 className="text-xl text-[#FFFFFF] font-medium">
                Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <img src="/cook.png" width={600} />
          </div>
        </div>
      </div>
    </div>
  );
};
