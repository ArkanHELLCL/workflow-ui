/* eslint-disable no-unused-vars */
export function ListRequestByPending(orderDes, filteredRequest){
    let title = ''
    const requerimientoAccordion = []

    orderDes ? title = `Por tomar recientes` : title = `Por tomar antiguos`
    requerimientoAccordion.push({id:1, title: title, desde: null, hasta: null, open:true, pend : true, requerimientos: filteredRequest.filter((req) => req.IdEditor === undefined), showdia:true})

    orderDes ? title = `Toomados recientes` : title = `Tomados antiguos`
    requerimientoAccordion.push({id:2, title: title, desde: null, hasta: null, open:true, pend : false, requerimientos:  filteredRequest.filter((req) => req.IdEditor !== undefined), showdia:true})

    return requerimientoAccordion
}