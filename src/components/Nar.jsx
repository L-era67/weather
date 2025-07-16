import { HeartIcon, HomeIcon, MapIcon, MapPin, User2Icon } from "lucide-react";
import { useState } from "react";

export const Nar = ({ weather }) => {
  return (
    <div className=" w-[414px] text-[#111827] px-[48px] py-[40px] rounded-4xl bg-white/750 backdrop-blur-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[18px]">
            {weather?.forecast?.forecastday[0]?.date}
          </p>
          <h1 className="text-[48px] font-[800]">{weather?.location?.name}</h1>
        </div>
        <MapPin className="text-black ml-[40px]" />
      </div>
      <img className="ww-262px h-262px" src="./zurag/sun3.png" alt="nar-2" />

      <h1 className="text-[100px] w-[800] font-[800] -mb-5 bg-gradient-to-b from-black to-white text-transparent bg-clip-text">
        {weather?.current?.temp_c}
      </h1>

      <div className="flex items-center gap-[20px]">
        <p className="text-[24px] text-[#FF8E27] font-[800]">
          {weather?.current?.condition?.text}
        </p>
        <img
          className="ww-262px h-262px"
          src={weather?.current?.condition?.icon}
          alt="nar-2"
        />
      </div>
      <div className="flex gap-[64px] pt-[48px]">
        <HomeIcon />
        <MapPin />
        <HeartIcon />
        <User2Icon />
      </div>
    </div>
  );
};
