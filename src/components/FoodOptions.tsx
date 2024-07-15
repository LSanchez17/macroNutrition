import { useState } from "react"
import { Input } from "@mui/base"

import { FoodList } from "./FoodList"


export const FoodOptions = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return(
        <div className='foodOptions'>
            <Input 
                placeholder='Search for food' 
                className="searchInput"
                onChange={handleChange}
            />
            <FoodList searchTerm={searchTerm} />
        </div>
    )

}
