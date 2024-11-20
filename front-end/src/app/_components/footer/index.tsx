import { Frame } from "../svg/Frame";

export const Footer = () => {
  return (
    <div className="flex w-screen h-full">
      <div
        className="flex w-full h-[800px] bg-[#18BA51]"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <div className="flex justify-center items-center gap-3">
            <Frame />
            <div className="text-[#FFFFFF] font-bold text-2xl">
              Food Delivery
            </div>
          </div>
          <div className="flex justify-between p-2 w-[80%] text-[#FFFFFF] font-bold text-xl">
            <h1>Нүүр</h1>
            <h1>Холбоо барих</h1>
            <h1>Хоолны цэс</h1>
            <h1>Үйлчилгээний нөхцөл</h1>
            <h1>Хүргэлтийн бүс</h1>
            <h1>Нууцлалын бодлого</h1>
          </div>
          <div>
            <img src="./social.svg" alt="" width={200} />
          </div>
          <div className="border w-[80%]"></div>
          <div className="flex flex-col justify-center items-center text-[#FFFFFF] font-bold">
            <h1>© 2024 Pinecone Foods LLC </h1>
            <h1>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
