import { Macros } from "../hooks/useGetLocalStorage"

export interface MacroProps extends Macros {
    name: string
}

export const Macro: React.FC<MacroProps> = ({protein, carbs, fats, name}) => {

    return (
        <div className='macroRatios'>
            <span className="macroOwnerTitle">Macros for {name}</span>
            <span className="macroTitle">Protein: {protein}</span>
            <span className="macroTitle">Carbs: {carbs}</span>
            <span className="macroTitle">Fats: {fats}</span>
        </div>
    )
}