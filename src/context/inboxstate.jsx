/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InboxStateContext = createContext();

export function InboxStateProvider({ children }) {    
    const [inboxstate, setInboxState] = useState({
        loadingInboxs: false,        
        loadingInbox:{},
        messages: [],
        error: false,
        warnign: false
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