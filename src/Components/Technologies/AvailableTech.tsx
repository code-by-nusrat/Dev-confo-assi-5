import type { TechType } from "../TechType";
import TechCard from "./TechCard";


const AvailableTech = ({ techs }) => {
    console.log(techs, 'techs from available techs')
    return (
        <div className="w-[904px]">
        <div className=" grid grid-cols-3 gap-x-0.5 gap-y-0.5">
            {
                techs.map((tech:TechType) => {
                    return<div key={tech.id}> 
                        
                        <TechCard  tech={tech}></TechCard>
                    </div>
                   
                })
            }
        </div>
        </div> 
    );
};

export default AvailableTech;