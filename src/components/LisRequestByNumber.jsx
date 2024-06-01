/* eslint-disable no-unused-vars */
export function ListRequestByNumber(min, max, maxAccordions, orderDes, filteredRequest ){    
    const numReqsPerRange = Math.ceil((Math.abs(max - min) + 1) / maxAccordions)
    const requerimientoAccordion = []
    for (let i = 0; i < maxAccordions; i++) {
        const start = min + i * numReqsPerRange
        const end = Math.min(start + numReqsPerRange - 1, max)
        let title = ''
        orderDes ? title = `Del ${start} al ${end}` : title = `Del ${end} al ${start}`    

        requerimientoAccordion.push({id:i+1, title: title, desde: start, hasta: end, open:true,requerimientos: filteredRequest.filter((req) => req.VRE_Id >= start && req.VRE_Id <= end), showdia:true})
    }
    return requerimientoAccordion
}