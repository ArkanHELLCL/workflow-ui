/* eslint-disable no-unused-vars */
import { useFilters } from "../../../../hooks"
import { Constants } from "../../../../utils/const"

export function ListRequestByStep(filteredRequest){
    const { filters } = useFilters()
    const { maxAccByStep } = Constants()    

    const numReqsPerRange = Math.ceil((Math.abs(filters.maxStep - filters.minStep) + 1) / maxAccByStep)
    const requerimientoAccordion = []
    for (let i = 0; i < maxAccByStep; i++) {
        const start = filters.minStep + i * numReqsPerRange
        const end = Math.min(start + numReqsPerRange - 1, filters.maxStep)
        let title = ''
        filters.orderDes ? title = `Del ${start} al ${end}` : title = `Del ${end} al ${start}`
        requerimientoAccordion.push({id:i+1, title: title, desde: start, hasta: end, open:true, requerimientos: filteredRequest.filter((req) => req.FLD_CodigoPaso >= start && req.FLD_CodigoPaso <= end), showdia:false, showyear:true})
        
    }
    return requerimientoAccordion
}