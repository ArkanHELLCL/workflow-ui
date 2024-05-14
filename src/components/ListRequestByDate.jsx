/* eslint-disable no-unused-vars */
export function ListRequestByDate(hoy, dias, maxAccordions, filteredRequest){    
    let requerimientoAccordion = []
    let title=''
    let anterior = new Date(hoy); 
    let maxdias  = new Date(hoy); 
    let diasDesde = 0
    let diasHasta = 0
    let requerimientos = []
    //console.log('ListRequestByDate',filteredRequest)
    //Creamos los accordions para los requerimientos

    
    anterior.setDate(anterior.getDate());
    maxdias.setDate(maxdias.getDate());
    requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))    
    requerimientoAccordion.push({id:1, title: 'Hoy', requerimientos: requerimientos})
    
    anterior.setDate(anterior.getDate() - 1);
    maxdias.setDate(maxdias.getDate() - 1);
    requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
    requerimientoAccordion.push({id:2, title: 'Ayer', requerimientos: requerimientos})

    for (let index = 3; index <= maxAccordions; index++) {
        /*if(index===1){
            title='Hoy'
            diasDesde = 0
            diasHasta = 0
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))            
        }*/
        /*if(index===2){
            title='Ayer'
            diasDesde = 1
            diasHasta = 1
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10)) 
        }*/
        if(index>2 && index<6){
            anterior = new Date(hoy); 
            title = dias[anterior.getDay()]
            diasDesde = index - 1
            diasHasta = index - 1
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===6){
            title = 'Semana pasada'
            diasDesde = 5
            diasHasta = 12
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===7){            
            title = 'Hace dos semanas'
            diasDesde = 13
            diasHasta = 19
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===8){            
            title = 'Hace tres semanas'
            diasDesde = 20
            diasHasta = 26
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===9){            
            title = 'Hace un mes'
            diasDesde = 27
            diasHasta = 56
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===10){            
            title = 'Más de dos meses'
            diasDesde = 57
            diasHasta = 86
            anterior.setDate(anterior.getDate() - diasDesde);
            maxdias.setDate(maxdias.getDate() - diasHasta);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))   
        }
        if(index===11){            
            title = 'Más antiguos'
            diasDesde = 87
            diasHasta = -1
            anterior.setDate(anterior.getDate() - diasDesde);
            requerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10)) 
        }
        //requerimientoAccordion.push({id:index, title: title, desde: diasDesde, hasta: diasHasta, open: true, requerimientos: requerimientos})
        requerimientoAccordion.push({id:index, title: title, requerimientos: requerimientos})
    }    
    return requerimientoAccordion
}