/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {    
    const [filters, setFilters] = useState({
        flujo: 0,
        orderDes: true,
        filter: 1,
        requerimiento: null,
        itemIdSelected: 'be',        
        totalRequerimientos: 0,
        totalSintomar: 0,
        totalVencidos: 0,
        totalPorVencer: 0,        
        hoy : new Date('2023-08-31 8:0:0'),
        minReq : null,
        maxReq : null,
        maxStep : null,
        minStep : null
    });
    
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}