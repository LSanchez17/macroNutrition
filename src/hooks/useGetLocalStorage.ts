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
            try {
                setData(JSON.parse(storedData));
            }
            catch (e) {
                console.error(e);
            }
        }
    }, [key, keyToSearch]);

    return data;
};

export default useGetLocalStorage;