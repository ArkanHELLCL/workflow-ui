/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InboxStateContext = createContext();

export function InboxStateProvider({ children }) {    
    const [inboxstate, setInboxState] = useState({
        loadingInboxs: false,
        loadingBE: false,
        loadingBS: false,
        loadingBF: false,
        loadingBA: false,
        loadingBO: false,
        loadingBNC: false,
        loadingBNW: false,
        messages: []
    })
    
    return (
        <InboxStateContext.Provider value={{
            inboxstate,
            setInboxState
        }}>
        {children}
        </InboxStateContext.Provider>
    )
}