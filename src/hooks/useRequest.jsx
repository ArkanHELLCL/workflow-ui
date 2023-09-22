import { useContext } from 'react'
import { RequestContext } from '../context/request.jsx'

export function useRequest() {  
    const {request, setRequest} = useContext(RequestContext)
    return {request, setRequest}
}