/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ReportsContext = createContext();

export function ReportsProvider({ children }) {    
    const [report, setReport] = useState(null)
    
    return (
        <ReportsContext.Provider value={{
            report,
            setReport
        }}>
        {children}
        </ReportsContext.Provider>
    )
}