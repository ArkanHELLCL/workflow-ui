/* eslint-disable no-unused-vars */
import { useFilters } from "../../../../hooks"

export function ListRequestByPending(filteredRequest){
    const { filters } = useFilters()
    let title = ''
    const requerimientoAccordion = []

    filters.orderDes ? title = `Por tomar recientes` : title = `Por tomar antiguos`
    requerimientoAccordion.push({id:1, title: title, desde: null, hasta: null, open:true, pend : true, requerimientos: filteredRequest.filter((req) => req.IdEditor === undefined), showdia:false, showyear:true})

    filters.orderDes ? title = `Tomados recientes` : title = `Tomados antiguos`
    requerimientoAccordion.push({id:2, title: title, desde: null, hasta: null, open:true, pend : false, requerimientos:  filteredRequest.filter((req) => req.IdEditor !== undefined), showdia:false, showyear:true})

    return requerimientoAccordion
}