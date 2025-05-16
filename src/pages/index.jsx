import { Toirog } from "@/components/toirog";
import { Input } from "../components/input";
import { Nar } from "../components/Nar";
import { Sar } from "../components/Sar";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [input, setInput] = useState("Ulaanbaatar");
  const [cities, setCities] = useState([])



  // const cityUrl = `https://api.api-ninjas.com/v1/city?name=${input}`;

  // const getCity = async () => {
  //   try {
  //     const response = await fetch(cityUrl, {
  //       headers: {
  //         "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
  //       },
  //     });

  //     const data = await response.json();

  //     return data;
  //   } catch (error) {
  //     console.log("CITY error:", error);
  //   }
  // };

  const getWeather = async () => {
    try {
      // const city = await getCity();
      // console.log(city);
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].latitude}&lon=${city[0].longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
       `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${input}`
      );

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log("WEATHER ALDAA:", error);
    }
  };

  const getCities =async () =>{
    try {
       const response = await fetch (`https://countriesnow.space/api/v0.1/countries`);

       const medeelel =await response.json(); // {error: , msg: , "data:" [],} ene data-g awah heregtei

       console.log(medeelel.data[0].cities[0]) //ingej baij yg ter hotiin ner garch irj baina
       console.log(medeelel)

       const medeelelMassive = medeelel.data //odoo yg data:[{country}, {country:"ulsin ner" ,cities:[hotuudin ner baina] }]

      const Country = medeelelMassive.filter((uls)=> uls.cities.find((hot)=> hot==="Tokyo"))
      
       console.log( typeof Country)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getCities();
    getWeather();
    console.log(getWeather())
  }, [])

  console.log("weather data:", weather);

  return (
    <div className="flex w-[100wv] h-[100vh] ">
      <div className="w-[50%] bg-[#F3F4F6]   flex items-center">
        <div className="relative  w-[800px] h-[1200px] border-2 border-indigo-600 my-0 mx-auto ">
          <Input getWeather={getWeather} setInput={setInput} />
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
            <Sar  weather={weather}/>
          </div>
        </div>
      </div>
    </div>
  );
}
