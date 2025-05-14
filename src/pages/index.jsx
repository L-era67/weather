import { Toirog } from "@/components/toirog";
import { Input } from "../components/input";
import { Nar } from "../components/Nar";
import { Sar } from "../components/Sar";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Ulaanbaatar&units=metric`;
    
  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;

  
  const getCity = async() =>{
   try{

 const response = await fetch(cityUrl, {
      headers:{
        "X-Api-key":process.env.NEXT_PUBLIC_CITY_API_KEY,
      }
    });
    const data =- await response.json();
    console.log(data)

   }catch (error){
    console.log(error)
   }
  }



  const getWeather = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setWeather(data);
    } catch (error) {

      console.log(error);
    }
  };
console.log("weather", weather?.main?.temp)

  return (
    <div className="flex w-[100wv] h-[100vh] ">

      <button onClick={getCity}>get City</button>
      
      <div className="w-[50%] bg-[#F3F4F6]   flex items-center">
        <div className="relative  w-[800px] h-[1200px] border-2 border-indigo-600 my-0 mx-auto ">
          <Input getWeather={getWeather} />
          <img
            src="./zurag/nar1.png"
            className="w-[176px] h-[176px] mt-[47px] absolute left-[130px] z-0 top-[80px]"
            alt="nar-1"
          />
          <div className="w-[100%] h-[100%] flex justify-center items-center absolute z-20">
            <Nar weather={weather}/>
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
            <Sar />
          </div>
        </div>
      </div>
    </div>
  );
}
