import { use } from "react";
import type { TechType } from "../TechType";
import AvailableTech from "./AvailableTech";
interface TechsProps{
techsPromise:Promise<TechType[]>
}
const Techs = ({techsPromise}:TechsProps) =>{
  const techs= use(techsPromise);
  console.log(techs.length)
    return (
      <div className="w-[1280px] border border-red-600 mx-auto">
        <div className="mb-[40px]">
          <h2 className="font-extrabold text-[2.4rem]">Explore the <span className="text-[#EC4899]">Technologies</span></h2>
          <p className="text-[#64748B] text-[1 rem]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <AvailableTech  techs={techs}></AvailableTech>
      </div>
    );
};

export default Techs;