import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from "react-icons/io";
import type { TechType } from '../TechType';
interface StackTechCardProp {
    tech: TechType;
    // selectedTech: TechType[],
    setSelectedTech: Dispatch<SetStateAction<TechType[]>>,
    // count: number,
    setCount: Dispatch<SetStateAction<number>>
}
const StackTechCard = ({ tech,setSelectedTech,setCount }: StackTechCardProp) => {
    const handleRemovePlayer = (techToRemove: TechType) => {
        setSelectedTech((prev) => prev.filter((item) => item.id !== techToRemove.id));
        setCount((prev) => Math.max(0, prev - 1));
    }
    return (
        <div>
            <div className=" inter w-57.75 h-12.5 border mx-auto mt-4 rounded-lg border-[#E2E8F0] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="w-7.5 h-7 ml-2" src={tech.icon} alt="" />
                    <div>
                        <p className="text-[14px] font-bold">{tech.name}</p>
                        <p className="text-[10px]">{tech.category}</p>
                    </div>
                </div>
                <div onClick={() => handleRemovePlayer(tech)}>
                    <IoIosClose className="text-3xl cursor-pointer" />
                </div>
            </div>

        </div>
    );
};

export default StackTechCard;