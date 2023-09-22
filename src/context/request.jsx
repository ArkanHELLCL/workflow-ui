/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RequestContext = createContext();

export function RequestProvider({ children }) {    
    const [request, setRequest] = useState(null)
    
    return (
        <RequestContext.Provider value={{
            request,
            setRequest
        }}>
        {children}
        </RequestContext.Provider>
    )
}