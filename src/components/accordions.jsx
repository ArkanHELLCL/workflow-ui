import { ListRequestByDate } from '../components/ListRequestByDate.jsx'
import { ListRequestByNumber } from '../components/LisRequestByNumber.jsx';
import { Constants } from "../constants/const.jsx";
import { ListRequestByPending } from './LisRequestByPending.jsx';
import { ListRequestByStep } from './LisRequestByStep.jsx';

export function Accordions(filteredRequest, filters){
    const { maxAccByDate, maxAccByNumber, maxAccByStep } = Constants()    
    //Accordion
    let requerimientoAccordion = []
    if(filteredRequest.length > 0){            
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