import { Macro } from "./Macro"
import { Macros } from "../hooks/useGetLocalStorage"
import useGetLocalStorage from "../hooks/useGetLocalStorage"

export const MacroDisplay = () => {
    const dinahMacros: Macros | null = useGetLocalStorage('Dinah')
    const luisMacros: Macros | null = useGetLocalStorage('Luis')

    return (
        <div className='macroDetails'>
            {dinahMacros && <Macro {...dinahMacros} name={'Dinah'} />}
            {luisMacros && <Macro {...luisMacros} name={'Luis'}/>}
        </div>
    )

}
