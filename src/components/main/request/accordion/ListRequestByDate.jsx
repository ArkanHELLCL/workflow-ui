/* eslint-disable no-unused-vars */
let rangeDays = [
    { id: 1, title: 'Hoy', desde: 0, hasta: 0, showdia:false },
    { id: 2, title: 'Ayer', desde: 1, hasta: 1, showdia:false },
    { id: 3, title: null, desde: 2, hasta: 2, showdia:false },
    { id: 4, title: null, desde: 3, hasta: 3, showdia:false},
    { id: 5, title: null, desde: 4, hasta: 4, showdia:false },
    { id: 6, title: 'Semana pasada', desde: 5, hasta: 12, showdia:true },
    { id: 7, title: 'Hace dos semanas', desde: 13, hasta: 19, showdia:true },
    { id: 8, title: 'Hace tres semanas', desde: 20, hasta: 26, showdia:true },
    { id: 9, title: 'Hace un mes', desde: 27, hasta: 56, showdia:true },
    { id: 10, title: 'Más de dos meses', desde: 57, hasta: 86, showdia:true },
    { id: 11, title: 'Más antiguos', desde: 87, hasta:null, showdia:false, showyear:true },   
]

function FiltroRequerimientos( hoy, filteredRequest, diasDesde, diasHasta ) {
    let anterior = new Date(hoy); 
    let maxdias  = new Date(hoy); 

    //anterior.setHours(-4,0,0,0);
    //maxdias.setHours(-4,0,0,0);

    anterior.setDate(anterior.getDate() - diasDesde);
    if(diasDesde === diasHasta)
        maxdias = anterior
    else
        diasHasta !== null ? maxdias.setDate(maxdias.getDate() - diasHasta) : maxdias = null
    
    return filteredRequest?.filter(
      (item) =>        
        maxdias !== null ?
            new Date(item.DRE_FechaEdit.slice(0,10)).getTime() <= anterior.getTime() &&
            new Date(item.DRE_FechaEdit.slice(0,10)).getTime() >= maxdias.getTime()
        :
        new Date(item.DRE_FechaEdit.slice(0,10)).getTime() <= new Date(anterior).getTime()
    );
}

//new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime()

export function ListRequestByDate(hoy, maxAccordions, filteredRequest){    
    let requerimientoAccordion = []    
    for (let index = 1; index <= maxAccordions; index++) {      
        requerimientoAccordion.push({
                id:index, 
                title:rangeDays[index-1].title, 
                desde: rangeDays[index-1].desde, 
                hasta: rangeDays[index-1].hasta, 
                open: true, 
                requerimientos: FiltroRequerimientos(hoy,filteredRequest,rangeDays[index-1].desde,rangeDays[index-1].hasta), 
                showdia:rangeDays[index-1].showdia, 
                showyear:rangeDays[index-1].showyear})
    }
    return requerimientoAccordion
}