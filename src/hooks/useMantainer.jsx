import { useContext } from 'react'
import { MantainerContext } from '../context/mantainer.jsx'

export function useMantainer() {  
    const {mantainer, setMantainer} = useContext(MantainerContext)    
    return {mantainer, setMantainer}
}