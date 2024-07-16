import { useEffect, useState } from "react";
import useGetLocalStorage, { Macros } from "./useGetLocalStorage"
import useUpdateLocalStorage from "./useUpdateLocalStorage"

export const useUpdateMacros = (user: string, foodMacros: Macros | null) => {
    const currentData = useGetLocalStorage(user);
    const [updatedMacros, setUpdatedMacros] = useState<Macros | null>(null);

    useEffect(() => {
        if (!user || !foodMacros || !currentData) return;

        const newMacros = {
            protein: currentData.protein - foodMacros.protein,
            carbs: currentData.carbs - foodMacros.carbs,
            fats: currentData.fats - foodMacros.fats,
        };

        setUpdatedMacros(newMacros);
    }, [user, foodMacros, currentData]);

    useUpdateLocalStorage(user, updatedMacros);
};
