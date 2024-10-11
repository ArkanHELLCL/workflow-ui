import { useContext } from 'react'
import { InboxStateContext } from '../context/inboxstate.jsx'

export function useInboxState() {  
    const {inboxstate, setInboxState} = useContext(InboxStateContext)    
    return {inboxstate, setInboxState}
}