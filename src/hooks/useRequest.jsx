import { useContext } from 'react'
import { RequestContext } from '../context/request.jsx'

export function useRequest() {  
    const {request, setRequest} = useContext(RequestContext)            
    /*const itemRequest = (item) => {
        return item
    }*/
    //return {request, itemRequest, setRequest}
    return {request, setRequest}
}