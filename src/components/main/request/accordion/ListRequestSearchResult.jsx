/* eslint-disable no-unused-vars */
let rangeInbox = [
    { id: 1, title: 'Bandeja de entrada', cod: 'be', showyear:true },
    { id: 2, title: 'Bandeja de salida', cod: 'bs', showyear:true },
    { id: 3, title: 'Bandeja de finalizados', cod: 'bf', showyear:true },
    { id: 4, title: 'Bandeja de otros', cod: 'bo', showyear:true },
    { id: 5, title: 'Bandeja de archivados', cod: 'ba', showyear:true },
    { id: 6, title: 'Bandeja de compras v0', cod: 'bnc', showyear:true },
    { id: 7, title: 'Bandeja de workflow v1', cod: 'bnw', showyear:true }
]

function FiltroRequerimientos( filteredRequest, cod ) {        
    return filteredRequest?.filter(
      (item) => item.Bandeja === cod
    );
}

export function ListRequestSearchResult(maxAccordions, filteredRequest){    
    let requerimientoAccordion = []

    for (let index = 1; index <= maxAccordions; index++) {      
        requerimientoAccordion.push({id:index, title:rangeInbox[index-1].title, open: true, requerimientos: FiltroRequerimientos(filteredRequest,rangeInbox[index-1].cod), showyear:rangeInbox[index-1].showyear})
    }
    return requerimientoAccordion
}