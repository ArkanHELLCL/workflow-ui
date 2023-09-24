/* eslint-disable no-unused-vars */
export function ListRequestByPending(orderDes){
    let title = ''
    const requerimientoAccordion = []

    orderDes ? title = `Por tomar recientes` : title = `Por tomar antiguos`
    requerimientoAccordion.push({id:1, title: title, desde: null, hasta: null, open:true, pend : true})

    orderDes ? title = `Toomados recientes` : title = `Tomados antiguos`
    requerimientoAccordion.push({id:2, title: title, desde: null, hasta: null, open:true, pend : false})

    return requerimientoAccordion
}