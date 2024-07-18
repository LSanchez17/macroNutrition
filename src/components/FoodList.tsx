import { Button } from '@mui/base';
import foods from '../assets/foods/foods.json';
import { Macros } from '../types/types';

interface FoodListProps {
    searchTerm: string;
    onFoodSelected: (foodMacros: Macros) => void;
}

export const FoodList: React.FC<FoodListProps> = ({ searchTerm, onFoodSelected }) => {
    const matches = foods.filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm === '') {
        return null;
    }

    const handleClick = (foodMacros: Macros) => {
        onFoodSelected(foodMacros);
    }

    return (
        <div className='food-list'>
            {matches.map((food, idx) => (
                <div key={idx} className='food-item'>
                    <h3>{food.name}</h3>
                    <span>Protein: {food.protein}g</span>
                    <span>Carbs: {food.carbs}g</span>
                    <span>Fats: {food.fats}g</span>
                    <Button onClick={() => handleClick(food)}>Add Food</Button>
                </div>
            ))}
        </div>
    )

}