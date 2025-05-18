import { SearchIcon } from "lucide-react";

export const Input = ({ getWeather,getInput, input, filteredCity, setInput}) => {
 
const changeWeather = (value) =>{
  setInput(value.split(",")[0]);
  getWeather();
}



  return (
    <div className="absolute z-30 top-[110px] left-[40px] flex px-[24px] py-[16px] bg-white justify-start items-center gap-[16px] rounded-[48px] w-[567px] ">
      <SearchIcon className="text-black" />
      <input
      value={input}
        type="text"
        placeholder="Search"
        className="text-[32px]   text-gray-500 font-bold bg-[#FFFFFF] outline-none"
        onChange={getInput}
      />
      {filteredCity.map((city, index)=>(
        <div key={index} onClick={()=> changeWeather(city)}>
          {city}
        </div>
      ))}
      {/* <button onClick={getWeather} className=" text-amber-300 ">
        GET weather
      </button> */}
    </div>
  );
};
