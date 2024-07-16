import { Button } from "@mui/base"
import useSearchFoods from "../hooks/useSearchFoods"
import { Macros } from "../hooks/useGetLocalStorage"
import { useUpdateMacros } from "../hooks/useUpdateMacros"
import { useState } from "react"

export interface FoodListProps {
    searchTerm: string
}

export const FoodList: React.FC<FoodListProps> = ({searchTerm}) => {
    const [user, setUser] = useState('')
    const [foodPicked, setFoodPicked] = useState<Macros | null>(null)
    const matchingFoods = useSearchFoods(searchTerm)

    useUpdateMacros(user, foodPicked)    

    const handleClick = (user: string, index: number) => {
        if (!matchingFoods) return

        setUser(user)
        setFoodPicked(matchingFoods[index])
    }

    return (
        <div className='foodList'>
            {matchingFoods && matchingFoods.map((food, index) => {
                return (
                    <div key={index} className='foodItem'>
                        <div className="foodItemProperties">
                            <span className="semiBoldText">{food.name}</span>
                            <span className="semiBoldText">Protein: {food.protein} </span>
                            <span className="semiBoldText">Carbs: {food.carbs} </span>
                            <span className="semiBoldText">Fats: {food.fats} </span>
                        </div>
                        <div className="foodItemAction">
                            <Button onClick={() => handleClick('Dinah', index)}>Sub Dinah</Button>
                            <Button onClick={() => handleClick('Luis', index)}>Sub Luis</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}