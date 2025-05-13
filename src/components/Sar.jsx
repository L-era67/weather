import { HeartIcon, HomeIcon, MapIcon, MapPin, User2Icon } from "lucide-react";

export const Sar = () => {
  return (
    <div className="w-[414px] text-[#white] bg-[#111827BF] shadow-xl  px-[48px] py-[40px] rounded-4xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[18px]">May 13, 2025</p>
          <h1 className="text-[48px] font-[800]">Kraków</h1>
        </div>
        <MapPin className="text-white ml-[40px]" />
      </div>
      <img className="ww-262px h-262px" src="./zurag/moon.png" alt="nar-2" />

      <h1 className="text-[144px] w-[800] font-[800] -mb-5 bg-gradient-to-b from-white to-black text-transparent bg-clip-text">26°</h1>
      <p className="text-[24px] text-[#777CCE] font-[800]">Bright</p>
      <div className="flex gap-[64px] pt-[48px]">
        
        <HomeIcon />
        <MapPin />
        <HeartIcon />
        <User2Icon />
      </div>
    </div>
  );
};