import { Button, Input } from "@mui/base"
import { Macros } from "../hooks/useGetLocalStorage"
import { useState } from "react"
import useUpdateLocalStorage from "../hooks/useUpdateLocalStorage"

export interface MacroProps extends Macros {
    name: string
}

export const Macro: React.FC<MacroProps> = ({protein, carbs, fats, name}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [internalMacros, setInternalMacros] = useState({protein, carbs, fats})
    
    const handleClick = () => {
        setIsEditing(!isEditing)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInternalMacros((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    useUpdateLocalStorage(name, internalMacros)

    return (
        <div className='macroRatios'>
            <Button onClick={handleClick}>{isEditing ? 'Save' : 'Edit' }</Button>
            {!isEditing &&  (
                <>
                    <span className="macroOwnerTitle">Macros for {name}</span>
                    <span className="macroTitle">Protein: {internalMacros.protein}</span>
                    <span className="macroTitle">Carbs: {internalMacros.carbs}</span>
                    <span className="macroTitle">Fats: {internalMacros.fats}</span>
                </>
            )
            }
            {isEditing && (
                <>
                    <span className="macroOwnerTitle">Macros for {name}</span>
                    <Input placeholder='Protein' name="protein" onChange={handleChange} />
                    <Input placeholder='Carbs' name="carbs" onChange={handleChange} />
                    <Input placeholder='Fats' name="fats" onChange={handleChange} />
                </>
            )}
        </div>
    )
}