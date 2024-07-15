import foods from '../assets/foods/foods.json';
import { MacroProps } from '../components/Macro';

const useSearchFoods = (searchTerm: string): MacroProps[] | null => {
    if (!searchTerm) {
        return null;
    }

    const matchingFoods = foods.filter((food: MacroProps) => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return searchRegex.test(food.name);
    });

    return matchingFoods;
};

export default useSearchFoods;