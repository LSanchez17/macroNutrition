import { Macros } from "../types/types";

interface SearchFoodProps {
    onFoodSelected: (foodMacros: Macros) => void;
}

export const SearchFood: React.FC<SearchFoodProps> = ({onFoodSelected}) => {

    const handleClick = () => {
        onFoodSelected({ protein: 10, carbs: 20, fats: 30 });
    }

    return (
        <div className='search-food'>
            <h2>Search for Food</h2>
            <input type='text' placeholder='Search for food...' />
            <button onClick={handleClick}>Add Food</button>
        </div>
    )
}
