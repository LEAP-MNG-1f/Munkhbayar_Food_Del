import { Frame } from "../homepage/svg/Frame";

export const Footer = () => {
  return (
    <div className="flex w-full h-auto">
      <div
        className="flex w-full h-[800px] bg-[#18BA51]"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-auto gap-10">
          <div className="flex justify-center items-center gap-3 w-[80%]">
            <Frame />
            <div className="text-[#FFFFFF] font-bold text-2xl">
              Food Delivery
            </div>
          </div>
          <div className="flex justify-between w-[80%] text-[#FFFFFF] font-bold text-xl">
            <button>Нүүр</button>
            <button>Холбоо барих</button>
            <button>Хоолны цэс</button>
            <button>Үйлчилгээний нөхцөл</button>
            <button>Хүргэлтийн бүс</button>
            <button>Нууцлалын бодлого</button>
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
