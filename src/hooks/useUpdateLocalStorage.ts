import { useEffect } from 'react';

const useUpdateLocalStorage = (key: string, value: any) => {
    useEffect(() => {
        const storageKey = `${key}Macros`;
        const serializedValue = JSON.stringify(value);
        
        const existingValue = localStorage.getItem(storageKey);
        if (existingValue) {
            // Data exists, update it
            const parsedExistingValue = JSON.parse(existingValue);
            const updatedValue = { ...parsedExistingValue, ...value };
            localStorage.setItem(storageKey, JSON.stringify(updatedValue));
        } else {
            // Data doesn't exist, set it for the first time
            localStorage.setItem(storageKey, serializedValue);
        }
    }, [key, value]);
};

export default useUpdateLocalStorage;