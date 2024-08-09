/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AttachContext = createContext();

export function AttachProvider({ children }) {    
    const [adjuntos, setAdjuntos] = useState(null)
    
    return (
        <AttachContext.Provider value={{
            adjuntos,
            setAdjuntos
        }}>
        {children}
        </AttachContext.Provider>
    )
}