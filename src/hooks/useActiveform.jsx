import { useContext } from 'react'
import { ActiveformContext } from '../context/activeform.jsx'

export function useActiveform() {  
    const {activeform, setActiveform} = useContext(ActiveformContext)    
    return {activeform, setActiveform}
}