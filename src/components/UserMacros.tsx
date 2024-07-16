import { useLocalStorageContext } from "../context/LocalStorageContext";
import { SearchFood } from "./SearchFood";


export const UserMacros = () => {
    const { macros, updateMacros} = useLocalStorageContext();

    return (
        <>
            <div className='user-macros'>
                <h2>Your Macros</h2>
                <p>Protein: {macros.protein}g</p>
                <p>Carbs: {macros.carbs}g</p>
                <p>Fats: {macros.fats}g</p>
            </div>
            <SearchFood onFoodSelected={updateMacros} />
        </>
    )
}