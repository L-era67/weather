import { MapPin, SearchIcon } from "lucide-react";

export const Input = ({
  getWeather,
  getInput,
  input,
  filteredCity,
  setInput,
  setFilteredCity,
}) => {
  const changeWeather = (value) => {
    console.log("VALUE", value);

    setInput(value.split(",")[0]);
    setTimeout(() => {
      setFilteredCity([]);
    }, 200);

    getWeather();
  };

  return (
    <div className="absolute z-30 top-[200px] left-[40px] flex flex-col gap-2">
      <div className="  flex px-[14px] py-[8px] bg-white justify-start items-center gap-[10px] rounded-[48px] w-[567px] ">
        <SearchIcon className="text-black w-[px]" onClick={()=>{if(input.trim()!=""){
          getWeather();
          setFilteredCity([])
        }}}/>
        <input
          value={input}
          type="text"
          placeholder="Search"
          className="text-[26px]   text-gray-500 font-bold outline-none"
          onChange={getInput}
        />
      </div>
      <div className="bg-white text-gray-500 rounded-md">
        {filteredCity.map((city, index) => (
          // console.log("CITY CITY INPUT::",  city.toLowerCase().split(",")[0], "----", input)

          <div
            key={index}
            onClick={() => changeWeather(city)}
            className={`flex gap-2 cursor-pointer ${
              city.toLowerCase().split(",")[0] === input.toLowerCase()
                ? "bg-gray-500 text-white"
                : "bg-white"
            }`}
          >
            <MapPin className="w-[16px]" />
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};
