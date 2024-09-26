/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MantainerContext = createContext();

export function MantainerProvider({ children }) {    
    const [mantainer, setMantainer] = useState({"id":null,"record":null})
    
    return (
        <MantainerContext.Provider value={{
            mantainer,
            setMantainer
        }}>
        {children}
        </MantainerContext.Provider>
    )
}