import { type Dispatch, type SetStateAction } from "react";
interface SelectedTechProps {
    selectedTech: TechType[]
    setSelectedTech: Dispatch<SetStateAction<object[]>>
    count:number,
    setCount:Dispatch<SetStateAction<number>>
}

const StackTech = ({ selectedTech, setSelectedTech, count, setCount }: SelectedTechProps) => {
    console.log(selectedTech, setSelectedTech)
    return (
        <div className="inter border w-70">
            <h2 className="font-bold text-[1.5rem] ml-5.25 mt-5.25">Your Stack</h2>
            <h2 className="text-[1rem] ml-5.25 text-[#94A3B8]">{count === 0 ? "No Technology Selected" : `${count} Technology Selected`}</h2>
        </div>
    );
};

export default StackTech;