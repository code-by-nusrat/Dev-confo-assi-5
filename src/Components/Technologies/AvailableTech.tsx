import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../TechType";
import TechCard from "./TechCard";

interface AvailableTechProps{
    techs:TechType[],
    count:number,
    setCount:Dispatch<SetStateAction<number>>,
    selectedTech:TechType[]
    setSelectedTech:Dispatch<SetStateAction<TechType[]>>
}
const AvailableTech = ({ techs,selectedTech,setSelectedTech,count,setCount}:AvailableTechProps) => {
    //console.log(techs, 'techs from available techs')
    //console.log(count,setCount, 'from available players')
    return (
        <div className="inter cards w-226">
        <div className="card-container grid grid-cols-3 gap-x-0.5 gap-y-0.5">
            {
                techs.map((tech:TechType) => {
                    return<div key={tech.id}> 
                        
                        <TechCard count={count} setCount={setCount} selectedTech={selectedTech} setSelectedTech={setSelectedTech}  tech={tech}></TechCard>
                    </div>
                   
                })
            }
        </div>
        </div> 
    );
};

export default AvailableTech;