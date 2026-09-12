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
  const [selectedTech,setSelectedTech] = useState<TechType[]>([]);

  const [count,setCount]=useState(0)
    return (
      <div className="all-tech w-301 mx-auto">
        <div className="mb-10">
          <h2 className="font-extrabold text-[2.4rem]">Explore the <span className="text-[#EC4899]">Technologies</span></h2>
          <p className="text-[#64748B] text-[1 rem]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="techs flex items-start gap-10">
        <AvailableTech setCount={setCount} techs={techs} selectedTech={selectedTech} setSelectedTech ={setSelectedTech}></AvailableTech>
        <StackTech count={count} setCount={setCount} selectedTech={selectedTech} setSelectedTech ={setSelectedTech}></StackTech>
        </div>
      </div>
    );
};

export default Techs;