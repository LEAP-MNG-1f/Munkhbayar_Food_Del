export const Header = () => {
  return (
    <div className="w-screen h-full">
      <div className="container m-auto">
        <div className="w-full">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-3 p-3">
              <img src="./frame.svg" alt="" />
              <div className="p-2">НҮҮР</div>
              <div className="p-2">ХООЛНЫ ЦЭС</div>
              <div className="p-2">ХҮРГЭЛТИЙН БҮС</div>
            </div>
            <div className="">
              <div className="flex justify-center items-center gap-2">
                <img src="./vector.svg" alt="" />
                <div>Сагс</div>
              </div>
              <div>Нүүр</div>
              <div>working</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
