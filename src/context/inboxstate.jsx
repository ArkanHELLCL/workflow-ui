/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InboxStateContext = createContext();

export function InboxStateProvider({ children }) {    
    const [inboxstate, setInboxState] = useState({
        loadingInboxs: false,        
        /*loadingInbox:{
            be: false,
            bs: false,
            bf: false,
            ba: false,
            bo: false,
            bnc: false,
            bnw: false,

            ru: false,
            ro: false,
            rp: false,

            mu: false,
            ml: false,
            mi: false,
            mp: false,
            mc: false,

            jr: false,
            je: false,
            jb: false,
            jl: false
        },*/
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