/* eslint-disable no-unused-vars */
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";

export function ListRequestByDate(hoy, dias, maxAccordions, filteredRequest){    
    let requerimientoAccordion = []
    let title=''
    let anterior    
    let resultRequerimientos = []
    let diasDesde = 0
    let diasHasta = 0

    //Creamos los accordions para los requerimientos
    for (let index = 1; index <= maxAccordions; index++) {
        if(index===1){
            title='Hoy'
            diasDesde = 0
            diasHasta = 0
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === hoy.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 0, 0, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===2){
            title='Ayer'
            diasDesde = 1
            diasHasta = 1
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === anterior.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 1, 1, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index>2 && index<6){
            anterior = new Date(hoy); 
            anterior.setDate(anterior.getDate() - (index-1));
            title = dias[anterior.getDay()]
            diasDesde = index - 1
            diasHasta = index - 1
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) === anterior.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, index-1, index-1, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===6){
            anterior = new Date(hoy);            
            title = 'Semana pasada'
            diasDesde = 5
            diasHasta = 12
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 5, 12, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===7){            
            title = 'Hace dos semanas'
            diasDesde = 13
            diasHasta = 19
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 13, 19, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===8){            
            title = 'Hace tres semanas'
            diasDesde = 20
            diasHasta = 26
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 20, 26, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===9){            
            title = 'Hace un mes'
            diasDesde = 27
            diasHasta = 56
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 27, 56, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===10){            
            title = 'Más de dos meses'
            diasDesde = 57
            diasHasta = 86
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 57, 86, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        if(index===11){            
            title = 'Más antiguos'
            diasDesde = 87
            diasHasta = -1
            //resultRequerimientos = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) < anterior.toISOString().slice(0,10))
            /*const { resultRequest:result } = FilteredRequestbyDate(hoy, 87, -1, filteredRequest)
            resultRequerimientos = structuredClone(result)*/
        }
        //const total = resultRequerimientos.length
        //requerimientoAccordion.push({id:index, open: true, title: title, requerimientos: resultRequerimientos, total: total})
        //requerimientoAccordion.push({id:index, title: title, requerimientos: resultRequerimientos, total: total})
        requerimientoAccordion.push({id:index, title: title, diaDesde: diasDesde, diaHasta: diasHasta})
        console.log(requerimientoAccordion)
    }    
    return requerimientoAccordion
}