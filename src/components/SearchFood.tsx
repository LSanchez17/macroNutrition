import { Input } from "@mui/base";
import { Macros } from "../types/types";
import { useState } from "react";
import { FoodList } from "./FoodList";

interface SearchFoodProps {
    onFoodSelected: (foodMacros: Macros) => void;
}

export const SearchFood: React.FC<SearchFoodProps> = ({onFoodSelected}) => {
    const [searchTerm, setSearchTerm] = useState('');  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className='search-food'>
            <h4>Search for Food</h4>
            <Input type='text' className="foodInput" placeholder='Search for food...' onChange={handleChange} />
            <FoodList searchTerm={searchTerm} onFoodSelected={onFoodSelected}/>
        </div>
    )
}