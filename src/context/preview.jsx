/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PreviewContext = createContext();

export function PreviewProvider({ children }) {    
    const [preview, setPreview] = useState({
        state:false,
        obj:null,
        selected:null
    })
    
    return (
        <PreviewContext.Provider value={{
            preview,
            setPreview
        }}>
        {children}
        </PreviewContext.Provider>
    )
}