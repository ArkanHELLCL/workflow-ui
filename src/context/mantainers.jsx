/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MantainersContext = createContext();

export function MantainersProvider({ children }) {    
    const [mantenedores, setMantenedores] = useState([])
    
    return (
        <MantainersContext.Provider value={{
            mantenedores,
            setMantenedores
        }}>
        {children}
        </MantainersContext.Provider>
    )
}