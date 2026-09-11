import type { TechType } from "../TechType";
import { FaStar } from "react-icons/fa";

interface TechCardProps {
    tech: TechType;
}

const TechCard = ({tech}:TechCardProps ) => {
    return (
        <div className="inter">
            <div className="card border border-[#F1F5F9] w-[288px] h-[257px]">
                <div className="flex justify-between items-center p-4 ">
                  <img className="w-[30px] h-[30px]" src={tech.icon} alt="" />
                  <button className=" text-[#0EA5E9] border rounded-[30px] w-[77px] bg-blue-50 text-[1rem] font-semibold">{tech.badge}</button>
                </div>
                <h3 className="font-bold text-[1.1rem] pl-4">{tech.name}</h3>
                <p className="text-[12px] font-[400px] text-[#64748B] pl-4">{tech.description}</p>
                <div className="flex justify-between items-center p-4">
                    <button className="font-medium text-[11px] text-[#334155] w-[70px] bg-[#f1f5f9] rounded-[12px] h-[20px]">{tech.category}</button>
                    <p className="font-medium text-[11px] text-[#334155]">{tech.difficulty}</p>
                    <div className="flex gap-2 text-[12px] text-[#FFD700]">
                        <FaStar />
                        <p className="font-medium text-[11px] text-[#334155]">{tech.rating}</p>
                    </div>
                </div>
                <button className="w-[246px] h-[36px] bg-black text-[white] rounded-[8px] mx-auto mt-4">Add to Stack</button>
            </div>
        </div>
    );
};

export default TechCard;