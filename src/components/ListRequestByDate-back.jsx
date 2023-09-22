/* eslint-disable no-unused-vars */
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";

export function ListRequestByDate(hoy, dias, maxAccordions, filteredRequest){    
    let requerimientoAccordion = []
    let title=''
    let anterior    
    let resultRequerimientos = []    
    //const maxAccordions = 11
    //console.log('ListRequestByDate')
    //Creamos los accordions para los requerimientos
    for (let index = 1; index <= maxAccordions; index++) {
        if(index===1){
            title='Hoy'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === hoy.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 0, 0, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===2){
            title='Ayer'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === anterior.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 1, 1, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index>2 && index<6){
            anterior = new Date(hoy); 
            anterior.setDate(anterior.getDate() - (index-1));
            title = dias[anterior.getDay()]
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === anterior.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, index-1, index-1, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===6){
            anterior = new Date(hoy);            
            title = 'Semana pasada'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 5, 12, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===7){            
            title = 'Hace dos semanas'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 13, 19, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===8){            
            title = 'Hace tres semanas'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 20, 26, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===9){            
            title = 'Hace un mes'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 27, 56, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===10){            
            title = 'Más de dos meses'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 57, 86, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        if(index===11){            
            title = 'Más antiguos'
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10))
            const { resultRequest:result } = FilteredRequestbyDate(hoy, 87, -1, filteredRequest)
            resultRequerimientos = structuredClone(result)
        }
        const total = resultRequerimientos.length
        //requerimientoAccordion.push({id:index, open: true, title: title, requerimientos: resultRequerimientos, total: total})
        requerimientoAccordion.push({id:index, title: title, requerimientos: resultRequerimientos, total: total})
        console.log(requerimientoAccordion)
    }
    /*if(filters.orderDes){
        return requerimientoAccordion
    }else{
        return requerimientoAccordion.reverse()
    }*/
    return requerimientoAccordion
}