import { useFilters } from "../../../../hooks"
import { Constants } from "../../../../utils/const"

/* eslint-disable no-unused-vars */
export function ListRequestByNumber(filteredRequest ){
    const { filters } = useFilters()
    const { maxAccByNumber } = Constants()    

    const numReqsPerRange = Math.ceil((Math.abs(filters.maxReq - filters.minReq) + 1) / maxAccByNumber)
    const requerimientoAccordion = []
    for (let i = 0; i < maxAccByNumber; i++) {
        const start = filters.minReq + i * numReqsPerRange
        const end = Math.min(start + numReqsPerRange - 1, filters.maxReq)
        let title = ''
        filters.orderDes ? title = `Del ${start} al ${end}` : title = `Del ${end} al ${start}`    

        requerimientoAccordion.push({id:i+1, title: title, desde: start, hasta: end, open:true,requerimientos: filteredRequest.filter((req) => req.VRE_Id >= start && req.VRE_Id <= end), showdia:false, showyear:true})
    }
    return requerimientoAccordion
}