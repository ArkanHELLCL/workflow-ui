import { useContext } from 'react'
import { MantainersContext } from '../context/mantainers.jsx'

export function useMantainers() {  
    const {mantenedores, setMantenedores} = useContext(MantainersContext)    
    return {mantenedores, setMantenedores}
}