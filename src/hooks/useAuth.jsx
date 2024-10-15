import { useContext } from 'react'
import { AuthContext } from '../context/auth.jsx'

export function useAuth() {  
    const {auth, setAuth} = useContext(AuthContext)    
    return {auth, setAuth}
}