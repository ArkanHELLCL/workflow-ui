import { ListRequestByDate } from './accordion/ListRequestByDate.jsx'
import { ListRequestByNumber } from './accordion/LisRequestByNumber.jsx';
import { Constants } from "../../../utils/const.jsx";
import { ListRequestByPending } from './accordion/LisRequestByPending.jsx';
import { ListRequestByStep } from './accordion/LisRequestByStep.jsx';
import { ListRequestSearchResult } from './accordion/ListRequestSearchResult.jsx';

export function Accordions(filteredRequest, filters){
    const { maxAccSearch, maxAccByDate, maxAccByNumber, maxAccByStep } = Constants()    
    //Accordion
    let requerimientoAccordion = []
    if(filteredRequest.length > 0){
        if(filters.filterSearchResult){
            requerimientoAccordion = ListRequestSearchResult(maxAccSearch, filteredRequest)
            return { requerimientoAccordion }
        }
        if(filters.filter === 1){   //Fecha nueva logica
            requerimientoAccordion = ListRequestByDate(filters.hoy, maxAccByDate, filteredRequest)
        }
        if(filters.filter === 2){   //Numero del requerimiento nueva logica          
            requerimientoAccordion = ListRequestByNumber(filters.minReq, filters.maxReq, maxAccByNumber, filters.orderDes, filteredRequest)
        }
        if(filters.filter === 3){   //Requerimientos atrazados
            requerimientoAccordion = ListRequestByPending(filters.orderDes, filteredRequest)
        }
        if(filters.filter === 4){   //Por Paso
            requerimientoAccordion = ListRequestByStep(filters.minStep, filters.maxStep, maxAccByStep, filters.orderDes, filteredRequest)
        }
        if(!filters.orderDes){
            requerimientoAccordion.reverse()
        }        
    }

    return { requerimientoAccordion }
}