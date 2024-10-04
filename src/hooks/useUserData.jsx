import { useContext } from 'react'
import { UserDataContext } from '../context/userdata.jsx'

export function useUserData() {  
    const {userdata, setUserdata} = useContext(UserDataContext)    
    return {userdata, setUserdata}
}