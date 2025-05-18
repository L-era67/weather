import { Toirog } from "@/components/toirog";
import { Input } from "../components/input";
import { Nar } from "../components/Nar";
import { Sar } from "../components/Sar";
import { useEffect, useState } from "react";
import { LucideFileInput } from "lucide-react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [input, setInput] = useState("Ulaanbaatar");
  const [cities, setCities] = useState([]);
  const [filteredCity, setFilteredCity]=useState([]);

  const getWeather = async () => {
    try {
      console.log("INPUT::", input);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${input}`
      );

      const data = await response.json();
      console.log("DATA:", data);
      setWeather(data);
    } catch (error) {
      console.log("WEATHER ALDAA:", error);
    }
  };

  // const getCities =async () =>{
  //   try {
  //      const response = await fetch (`https://countriesnow.space/api/v0.1/countries`);

  //      const medeelel =await response.json(); // {error: , msg: , "data:" [127sh],} ene data-g awah heregtei

  //      console.log(medeelel.data[0].cities[0]) //ingej baij yg ter hotiin ner garch irj baina
  //      console.log("medeelel",medeelel)

  //      const medeelelMassive = medeelel.data //odoo yg data:[{country}, {country:"ulsin ner" ,cities:[hotuudin ner baina] }]

  //     const Country = medeelelMassive.filter((uls)=> uls.cities.find((hot)=> hot===input))

  //      console.log("hot haih",Country)

  //     //  const City = Country.find((city)=> console.log("CITY::",city.cities))

  //     const City = Country[0].cities.find((city) => city===input)
  //      console.log("CITY",City)

  //      setInput(City);

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getCities = async () => {
    try {
      const response = await fetch(
        `https://countriesnow.space/api/v0.1/countries`
      );

      const data = await response.json();

      setCities(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCities();
    getWeather();
    console.log(getWeather());
  }, []);

  const getInput = (event) => {
    setInput(event.target.value);

    const citiesAndCountry = cities.flatMap((country) =>
      country.cities.map((city) => `${city}, ${country.country}`)
    );

    const city = citiesAndCountry?.filter((item) =>
      item.toLowerCase().startsWith(input.toLowerCase())).slice(0, 4);

      setFilteredCity(city)
  };

  return (
    <div className="flex w-[100wv] h-[100vh] ">
      <div className="w-[50%] bg-[#F3F4F6]   flex items-center">
        <div className="relative  w-[800px] h-[1200px] border-2 border-indigo-600 my-0 mx-auto ">
          <Input getWeather={getWeather} getInput={getInput} input={input} filteredCity={filteredCity} setInput={setInput}/>
          {/* <Input getWeather={getWeather}/> */}
          <img
            src="./zurag/nar1.png"
            className="w-[176px] h-[176px] mt-[47px] absolute left-[130px] z-0 top-[80px]"
            alt="nar-1"
          />
          <div className="w-[100%] h-[100%] flex justify-center items-center absolute z-20">
            <Nar weather={weather} />
          </div>
        </div>
      </div>

      <div className="absolute flex justify-center w-[100%] h-[100%] items-center ">
        <Toirog />
      </div>

      <div className="w-[50%]  bg-[#0F141E] flex items-center">
        <div className="relative w-[800px] h-[1200px] border-2 border-amber-100 my-0 mx-auto">
          <img
            src="./zurag/sar.png"
            alt=""
            className="absolute z-0 bottom-0 right-0 mb-[130px] mr-[144px]"
          />

          <div className="absolute z-10 w-[100%] h-[100%] flex justify-center items-center">
            <Sar weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}
