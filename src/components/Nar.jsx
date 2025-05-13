import { HeartIcon, HomeIcon, MapIcon, MapPin, User2Icon } from "lucide-react";

export const Nar = () => {
  return (
    <div className="w-[414px] text-[#111827] bg-[#FFFFFFBF] shadow-xl  pl-[48px] py-[40px] rounded-lg">
      <p className="text-[18px]">May 13, 2025</p>
      <h1 className="text-[48px] ">Kraków</h1>
      <img src="./zurag/sun.png" alt="nar-2" />
      <h1 className="text-[144px]">26°</h1>
      <p className="text-[24px] text-[#FF8E27]">Bright</p>
      <div className="flex gap-[64px]">
        {/* <img src="./32/Home.png" alt="" />
                 <img src="./32/Vector.png" alt="" />
                <img src="./32/Vector1.png" alt="" />
               <img src="./32/User.png" alt="" /> */}
        <HomeIcon />
        <MapPin />
        <HeartIcon />
        <User2Icon />
      </div>
    </div>
  );
};
