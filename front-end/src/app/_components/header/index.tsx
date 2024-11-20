export const Header = () => {
  return (
    <div className="w-screen h-full">
      <div className="m-auto">
        <div className="w-full">
          <div className="flex justify-center items-center px-6 py-4 w-full">
            <div className="flex justify-between items-center w-[80%]">
              <div className="flex justify-center items-center gap-8 font-medium">
                <img src="./frame.svg" alt="" />
                <div>НҮҮР</div>
                <div>ХООЛНЫ ЦЭС</div>
                <div>ХҮРГЭЛТИЙН БҮС</div>
              </div>
              <div className="flex justify-center items-center gap-10 font-medium">
                <div className="flex justify-center items-center gap-3">
                  <img src="./vector.svg" alt="" />
                  <div className="flex justify-center items-center">Сагс</div>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <img src="./vector1.svg" alt="" />
                  <h1 className="flex justify-center items-center">Нэвтрэх</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
