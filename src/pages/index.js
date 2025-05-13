import { Input } from "../components/input";
import { Nar } from "../components/Nar";
export default function Home() {
  return (
    <div className="flex w-[100wv h-[100vh]">
      <div className="w-[50%] bg-[#F3F4F6] h-[1200px]  relative flex ">
        <div className="absolute z-[30]">
          <Input />
        </div>
        
        <img
          src="./zurag/nar1.png"
          className="w-[176px] h-[176px] mt-[47px] absolute left-[0] z-[0]"
          alt="nar-1"
        />

        <div className="w-[100%] h-[100%] flex justify-center items-center absolute z-[20]">
          <Nar />
        </div>
      </div>

      <div className="w-[50%] h-[1200px] bg-[#0F141E]"></div>
    </div>
  );
}
