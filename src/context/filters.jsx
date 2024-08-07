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
        //hoy : new Date('2024-08-05T23:00:00'),
        //hoy: new Date(),
        hoy:'2024-08-05T00:00:00',
        minReq : null,
        maxReq : null,
        maxStep : null,
        minStep : null,
        filterSearch: 1,
        stringSearch: '',
        filterSearchResult:false,
        darkMode: true,
        departamento: 0,
        region:0,
        orderDesMant: true,
        filterMant: 1
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