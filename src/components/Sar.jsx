import { HeartIcon, HomeIcon, MapIcon, MapPin, User2Icon } from "lucide-react";

export const Sar = ({ weather }) => {
  return (
    <div className="w-[414px] text-[#white] bg-[#111827BF] shadow-xl  px-[48px] py-[40px]  backdrop-blur-lg rounded-4xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[18px]">
            {weather?.forecast?.forecastday[0]?.hour[23].time}
          </p>
          <h1 className="text-[48px] font-[800]">{weather?.location?.name}</h1>
        </div>
        <MapPin className="text-white ml-[40px]" />
      </div>
      <img className="ww-262px h-262px" src="./zurag/moon.png" alt="nar-2" />

      <h1 className="text-[100px] w-[800] font-[800] -mb-5 bg-gradient-to-b from-white to-black text-transparent bg-clip-text">
        {weather?.forecast?.forecastday[0]?.hour[23].temp_c}
      </h1>

      <div className="flex items-center gap-[20px]">
        <p className="text-[24px] text-[#777CCE] font-[800]">
          {weather?.forecast?.forecastday[0]?.hour[23].condition?.text}
        </p>
        <img
          className="ww-262px h-262px"
          src={weather?.forecast?.forecastday[0]?.hour[23].condition?.icon}
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
