import { useContext } from 'react'
import { InboxsContext } from '../context/inboxs.jsx'

export function useInboxs() {  
    const {bandejas, setBandejas} = useContext(InboxsContext)    
    return {bandejas, setBandejas}
}