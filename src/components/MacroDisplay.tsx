import { Macro } from "./Macro"
import { Macros } from "../hooks/useGetLocalStorage"
import useGetLocalStorage from "../hooks/useGetLocalStorage"

import { Button } from "@mui/base"


export const MacroDisplay = () => {
    const dinahMacros: Macros = useGetLocalStorage('dinah')
    const luisMaros: Macros = useGetLocalStorage('luis')

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className='macroDetails'>
            <Macro {...dinahMacros} name={'Dinah'} />
            <Button 
                onClick={handleClick} 
            >Save Macros</Button>
            <Macro {...luisMaros} name={'Luis'}/>
        </div>
    )

}
