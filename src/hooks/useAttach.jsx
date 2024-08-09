import { useContext } from 'react'
import { AttachContext } from '../context/attach.jsx'

export function useAttach() {  
    const {adjuntos, setAdjuntos} = useContext(AttachContext)    
    return {adjuntos, setAdjuntos}
}