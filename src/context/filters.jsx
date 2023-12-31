/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {    
    const [filters, setFilters] = useState({
        flujo: 0,
        orderDes: true,
        filter: 1,        
        itemIdSelected: 'be',        
        totalRequerimientos: 0,
        totalSintomar: 0,
        totalVencidos: 0,
        totalPorVencer: 0,        
        hoy : new Date('2023-10-17 8:0:0'),
        minReq : null,
        maxReq : null,
        maxStep : null,
        minStep : null,
        filterSearch: 1,
        stringSearch: '',
        loading: true        
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