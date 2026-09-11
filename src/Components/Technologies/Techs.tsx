import { use, useState } from "react";
import type { TechType } from "../TechType";
import AvailableTech from "./AvailableTech";
import StackTech from "./StackTech";
interface TechsProps{
techsPromise:Promise<TechType[]>
}
const Techs = ({techsPromise}:TechsProps) =>{
  const techs= use(techsPromise);
  //console.log(techs.length)
  const [] =useState()
    return (
      <div className="all-tech w-[1280px] border border-red-600 mx-auto">
        <div className="mb-[40px]">
          <h2 className="font-extrabold text-[2.4rem]">Explore the <span className="text-[#EC4899]">Technologies</span></h2>
          <p className="text-[#64748B] text-[1 rem]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="flex gap-10">
        <AvailableTech  techs={techs}></AvailableTech>
        <StackTech></StackTech>
        </div>
      </div>
    );
};

export default Techs;