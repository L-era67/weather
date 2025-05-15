export const Toirog = () => {
  return (
    <div className="realtive z-0 w-[100%] h-[100%] flex justify-center items-center">
      <div className="absolute  w-[140px] h-[140px] border-4 border-amber-500  bg-white rounded-full "></div>
      <div className="absolute w-[340px] h-[340px] border-4 border-amber-300 rounded-full"></div>
      <div className="absolute w-[540px] h-[540px] border-4 border-amber-300 rounded-full"></div>
      <div className="absolute w-[940px] h-[940px] border-4 border-amber-300 rounded-full"></div>

      <div className="absolute flex flex-col">
        <div className="w-[80px] h-[63px] border-2 border-blue-400 relative left-[70px] top-[20px] bg-white">
          <div className="absolute w-[80px] h-[63px] bg-amber-400  rounded-bl-full"></div>
        </div>
        <div className=" w-[140px] h-[140px] border-2 border-b-blue-400 bg-blue  gap-[16px] flex justify-center items-center">
          <img
            className="w-[43px] h-[86px] text-white"
            src="./zurag/VectorL.png"
            alt="L"
          />
          <img
            className=" w-[43px] h-[86px] rounded-tr-full rounded-br-full  bg-amber-300"
            src="./zurag/VectorR.png"
            alt="r"
          />
        </div>

        <div className="relative w-[80px] h-[63px] left-[70px] bottom-[22px] bg-white">
          <div className="absolute w-[80px] h-[63px] bg-white rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};
