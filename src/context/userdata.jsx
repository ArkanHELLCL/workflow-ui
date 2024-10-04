/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserDataContext = createContext();

export function UserDataProvider({ children }) {    
    const [userdata, setUserdata] = useState(null)
    
    return (
        <UserDataContext.Provider value={{
            userdata,
            setUserdata
        }}>
        {children}
        </UserDataContext.Provider>
    )
}