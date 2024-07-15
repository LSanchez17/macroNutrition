import { useEffect, useState } from 'react';

export interface Macros {
    protein: number;
    carbs: number;
    fats: number;
}


const useGetLocalStorage = (key: string) => {
    const [data, setData] = useState<Macros | null>(null);
    const keyToSearch = `${key}Macros`;

    useEffect(() => {
        const storedData = localStorage.getItem(keyToSearch);
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, [key]);

    return data;
};

export default useGetLocalStorage;