/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InboxsContext = createContext();

export function InboxsProvider({ children }) {    
    const [bandejas, setBandejas] = useState([])
    
    return (
        <InboxsContext.Provider value={{
            bandejas,
            setBandejas
        }}>
        {children}
        </InboxsContext.Provider>
    )
}