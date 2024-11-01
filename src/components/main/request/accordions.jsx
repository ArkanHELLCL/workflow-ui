import { useFilters } from '../../../hooks/useFilters.jsx';
import { ListRequestByDate } from './accordion/ListRequestByDate.jsx'
import { ListRequestByNumber } from './accordion/LisRequestByNumber.jsx';
import { ListRequestByPending } from './accordion/LisRequestByPending.jsx';
import { ListRequestByStep } from './accordion/LisRequestByStep.jsx';
import { ListRequestSearchResult } from './accordion/ListRequestSearchResult.jsx';

export function Accordions(filteredRequest){
    const { filters } = useFilters()    
    
    //Accordion
    let requerimientoAccordion = []
    if(filteredRequest?.length > 0){
        if(filters.filterSearchResult){
            requerimientoAccordion = ListRequestSearchResult(filteredRequest)
            return { requerimientoAccordion }
        }
        if(filters.itemIdSelected.charAt(0).toUpperCase() === 'B'){
            if(filters.filter === 1){   //Fecha nueva logica
                requerimientoAccordion = ListRequestByDate(filteredRequest)
            }
            if(filters.filter === 2){   //Numero del requerimiento nueva logica          
                requerimientoAccordion = ListRequestByNumber(filteredRequest)
            }
            if(filters.filter === 3){   //Requerimientos atrazados
                requerimientoAccordion = ListRequestByPending(filteredRequest)
            }
            if(filters.filter === 4){   //Por Paso
                requerimientoAccordion = ListRequestByStep(filteredRequest)
            }
            if(!filters.orderDes){
                requerimientoAccordion.reverse()
            }
        }else{
            requerimientoAccordion = ListRequestByDate(filteredRequest)
        }
    }

    return { requerimientoAccordion }
}