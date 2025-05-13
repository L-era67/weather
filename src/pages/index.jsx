import { Toirog } from "@/components/toirog";
import { Input } from "../components/input";
import { Nar } from "../components/Nar";
import { Sar } from "../components/Sar";
export default function Home() {
  return (
    <div className="flex w-[100wv] h-[100vh] ">
      <div className="w-[50%] bg-[#F3F4F6]   flex items-center">
        <div className="relative  w-[800px] h-[1200px] border-2 border-indigo-600 my-0 mx-auto ">
          <Input />
          <img
            src="./zurag/nar1.png"
            className="w-[176px] h-[176px] mt-[47px] absolute left-[130px] z-0 top-[80px]"
            alt="nar-1"
          />
          <div className="w-[100%] h-[100%] flex justify-center items-center absolute z-20">
            <Nar />
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
