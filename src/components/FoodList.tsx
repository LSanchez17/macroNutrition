import { Button } from "@mui/base"
import useSearchFoods from "../hooks/useSearchFoods"

export interface FoodListProps {
    searchTerm: string
}

export const FoodList: React.FC<FoodListProps> = ({searchTerm}) => {
    const matchingFoods = useSearchFoods(searchTerm)

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
                            <Button>Add</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}