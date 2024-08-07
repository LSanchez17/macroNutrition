import { useState } from "react";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { SearchFood } from "./SearchFood";
import { Button, Input } from "@mui/base";


export const UserMacros = () => {
    const { macros, updateMacros, updateSpecificMacros } = useLocalStorageContext();
    const [editMacros, setEditMacros] = useState(false);

    return (
        <>
            <div className='user-macros'>
                <h2>Your Macros</h2>
                <Button onClick={() => setEditMacros(!editMacros)}>Edit Macros</Button>
                {editMacros && (
                    <>
                        <Input type='text' value={macros.protein} name='protein' onChange={(e) => updateSpecificMacros(e)} />
                        <Input type='text' value={macros.carbs} name='carbs' onChange={(e) => updateSpecificMacros(e)} />
                        <Input type='text' value={macros.fats} name='fats' onChange={(e) => updateSpecificMacros(e)} />
                    </>
                )}
                {!editMacros && (
                    <>
                        <span>Protein: {macros.protein}g</span>
                        <span>Carbs: {macros.carbs}g</span>
                        <span>Fats: {macros.fats}g</span>
                    </>
                )}
            </div>
            <SearchFood onFoodSelected={updateMacros} />
        </>
    )
}