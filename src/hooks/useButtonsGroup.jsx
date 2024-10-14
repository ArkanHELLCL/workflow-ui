import { useContext } from 'react'
import { ButtonsGroupContext } from '../context/buttonsgroup.jsx'

export function useButtonsGroup() {  
    const {grupos, setGrupos} = useContext(ButtonsGroupContext)    
    return {grupos, setGrupos}
}