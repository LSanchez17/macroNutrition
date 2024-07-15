import { useEffect, useState } from 'react';

export interface Macros {
    protein: number;
    carbs: number;
    fats: number;
}

const EMPTY_MACROS = {
    protein: 0,
    carbs: 0,
    fats: 0,
}

const useGetLocalStorage = (key: string) => {
    const [data, setData] = useState<Macros>(EMPTY_MACROS);

    useEffect(() => {
        const storedData = localStorage.getItem(`${key}Macros`);
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, [key]);

    return data;
};

export default useGetLocalStorage;