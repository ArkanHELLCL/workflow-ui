/* eslint-disable no-unused-vars */
let rangeDays = [
    { id: 1, title: 'Hoy', desde: 0, hasta: 0 },
    { id: 2, title: 'Ayer', desde: 1, hasta: 1 },
    { id: 3, title: null, desde: 2, hasta: 2 },
    { id: 4, title: null, desde: 3, hasta: 3 },
    { id: 5, title: null, desde: 4, hasta: 4 },
    { id: 6, title: 'Semana pasada', desde: 5, hasta: 12 },
    { id: 7, title: 'Hace dos semanas', desde: 13, hasta: 19 },
    { id: 8, title: 'Hace tres semanas', desde: 20, hasta: 26 },
    { id: 9, title: 'Hace un mes', desde: 27, hasta: 56 },
    { id: 10, title: 'Más de dos meses', desde: 57, hasta: 86 },
    { id: 11, title: 'Más antiguos', desde: 87, hasta: 9999 },   
]

function FiltroRequerimientos( hoy, filteredRequest, diasDesde, diasHasta ) {
    let anterior = new Date(hoy); 
    let maxdias  = new Date(hoy); 
    anterior.setDate(anterior.getDate() - diasDesde);
    maxdias.setDate(maxdias.getDate() - diasHasta);
    return filteredRequest?.filter(
      (item) =>
        item.DRE_FechaEdit?.slice(0, 10) <= anterior.toISOString().slice(0, 10) &&
        item.DRE_FechaEdit?.slice(0, 10) >= maxdias.toISOString().slice(0, 10)
    );
  }

export function ListRequestByDate(hoy, maxAccordions, filteredRequest){    
    let requerimientoAccordion = []    

    for (let index = 1; index <= maxAccordions; index++) {      
        requerimientoAccordion.push({id:index, title:rangeDays[index-1].title, desde: rangeDays[index-1].desde, hasta: rangeDays[index-1].hasta, open: true, requerimientos: FiltroRequerimientos(hoy,filteredRequest,rangeDays[index-1].desde,rangeDays[index-1].hasta)})
    }
    return requerimientoAccordion
}