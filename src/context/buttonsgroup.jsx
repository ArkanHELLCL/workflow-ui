/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ButtonsGroupContext = createContext();

export function ButtonsGroupProvider({ children }) {    
    const [grupos, setGrupos] = useState(null)
    
    return (
        <ButtonsGroupContext.Provider value={{
            grupos,
            setGrupos
        }}>
        {children}
        </ButtonsGroupContext.Provider>
    )
}