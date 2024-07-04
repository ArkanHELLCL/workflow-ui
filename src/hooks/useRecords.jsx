import { useContext } from 'react'
import { RecordsContext } from '../context/records.jsx'

export function useRecords() {  
    const {record, setRecord} = useContext(RecordsContext)    
    return {record, setRecord}
}