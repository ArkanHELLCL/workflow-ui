import { useContext } from 'react'
import { ReportsContext } from '../context/reports.jsx'

export function useReports() {  
    const {report, setReport} = useContext(ReportsContext)    
    return {report, setReport}
}