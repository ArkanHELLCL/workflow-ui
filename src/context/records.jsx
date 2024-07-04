/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RecordsContext = createContext();

export function RecordsProvider({ children }) {    
    const [record, setRecord] = useState(null)
    
    return (
        <RecordsContext.Provider value={{
            record,
            setRecord
        }}>
        {children}
        </RecordsContext.Provider>
    )
}