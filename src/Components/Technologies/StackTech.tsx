import { type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../TechType";
import StackTechCard from "./StackTechCard";

interface SelectedTechProps {
    selectedTech: TechType[],
    setSelectedTech: Dispatch<SetStateAction<TechType[]>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

const StackTech = ({ selectedTech, setSelectedTech, count, setCount }: SelectedTechProps) => {
    const handleRemoveAll = () => {
        setSelectedTech([]);
        setCount(0);
    };

    return (
        <div className="inter stackcard border border-[#E2E8F0] w-70 rounded-2xl pb-5">
            <h2 className="font-bold text-[1.5rem] ml-5.25 mt-5.25">Your Stack</h2>
            <h2 className="text-[1rem] ml-5.25 text-[#94A3B8]">{count === 0 ? "No Technology Selected" : `${count} Technology Selected`}</h2>
            <div>
                {selectedTech.length === 0 && (
                    <textarea className="permanent w-59.5 h-16.5 border-2 border-dotted border-[#94A3B8] resize-none text-center pt-4 ml-5 mt-3 text-[#94A3B8] rounded-lg" name="">Your stack is empty</textarea>
                )}
                {selectedTech.map((tech) => (
                    <StackTechCard
                        key={tech.id}
                        tech={tech}
                        selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}
                        count={count}
                        setCount={setCount}
                    />
                ))}
            </div>
            {selectedTech.length > 0 && (
                <div className="px-5 mt-4">
                    <button
                        type="button"
                        onClick={handleRemoveAll}
                        className="w-full h-10 rounded-full border border-red-400 text-red-500 font-semibold bg-white cursor-pointer"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default StackTech;