import React, { createContext, useContext, useEffect, useState } from 'react';
import { Macros } from '../types/types';

type LocalStorageContextType = {
    macros: Macros;
    updateMacros: (foodMacros: Macros) => void;
    updateSpecificMacros: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

export const useLocalStorageContext = () => {
    const context = useContext(LocalStorageContext);
    if (!context) {
        throw new Error('useLocalStorageContext must be used within a LocalStorageContextProvider');
    }
    return context;
};

interface LocalStorageContextProviderProps {
    children: React.ReactNode;
}

export const LocalStorageContextProvider: React.FC<LocalStorageContextProviderProps> = ({ children }) => {
    const [macros, setMacros] = useState<Macros>({ protein: 0, carbs: 0, fats: 0 });

    useEffect(() => {
        const storedMacros = localStorage.getItem('macros');
        if (storedMacros) {
            setMacros(JSON.parse(storedMacros));
        }
    }, []);

    const updateMacros = (foodMacros: Macros) => {
        const differenceInMacros = {
            protein: macros.protein - foodMacros.protein,
            carbs: macros.carbs - foodMacros.carbs,
            fats: macros.fats - foodMacros.fats,
        };
        setMacros(differenceInMacros);
        localStorage.setItem('macros', JSON.stringify(differenceInMacros));
    };

    const updateSpecificMacros = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMacros({ ...macros, [name]: Number(value) });
        localStorage.setItem('macros', JSON.stringify({ ...macros, [name]: Number(value) }));
    };

    return (
        <LocalStorageContext.Provider value={{ macros, updateMacros, updateSpecificMacros }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
