import { type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../TechType";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
interface TechCardProps {
    tech: TechType;
    selectedTech: TechType[]
    setSelectedTech: Dispatch<SetStateAction<TechType[]>>,
    // count: number,
    setCount: Dispatch<SetStateAction<number>>
    //  Dispatch<SetStateAction<object[]>>
}

const TechCard = ({ tech, selectedTech, setSelectedTech, setCount }: TechCardProps) => {
    const isSelected = selectedTech.some((item) => item.id === tech.id);

    const handleSelectCart = () => {
        if (isSelected) return;

        setSelectedTech((prev) => {
            if (prev.some((item) => item.id === tech.id)) return prev;
            return [...prev, tech];
        });
        setCount((prev) => prev + 1);
        toast.success(`${tech.name} added to your stack!`);
    }
    return (
        <div className="w-full inter card">
            <div className={` border border-[#F1F5F9] w-[288px] h-64.25 rounded-[9px]  ${isSelected
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}>
                <div className="flex justify-between items-center p-4 ">
                    <img className="w-7.5 h-7.5" src={tech.icon} alt="" />
                    <button className=" text-[#0EA5E9] border rounded-[30px] w-19.25 bg-blue-50 text-[1rem] font-semibold">{tech.badge}</button>
                </div>
                <h3 className="font-bold text-[1.1rem] pl-4">{tech.name}</h3>
                <p className="text-[12px] font-[400px] text-[#64748B] pl-4">{tech.description}</p>
                <div className="flex justify-between items-center p-4">
                    <button className="font-medium text-[11px] text-[#334155] w-17.5 bg-[#f1f5f9] rounded-xl h-5">{tech.category}</button>
                    <p className="font-medium text-[11px] text-[#334155]">{tech.difficulty}</p>
                    <div className="flex gap-2 text-[12px] text-[#FFD700]">
                        <FaStar />
                        <p className="font-medium text-[11px] text-[#334155]">{tech.rating}</p>
                    </div>
                </div>
                <button onClick={() => handleSelectCart()} disabled={isSelected}
                    className={`w-61.5 h-9 bg-black text-[white] rounded-lg ml-5 ${isSelected ? "bg-blue-300 border" : "bg-black"}`}>{isSelected === true ? "Selected" : "Add to Stack"}</button>
            </div>
        </div>
    );
};

export default TechCard;