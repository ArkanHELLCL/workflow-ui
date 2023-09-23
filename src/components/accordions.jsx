import { ListRequestByDate } from '../components/ListRequestByDate.jsx'
import { ListRequestByNumber } from '../components/LisRequestByNumber.jsx';
import { Constants } from "../constants/const.jsx";

export function Accordions(filteredRequest, filters){
    const { dias, maxAccByDate, maxAccByNumber } = Constants()
    console.log('Accordions')
    //Accordion
    let requerimientoAccordion = []
    if(filteredRequest.length > 0){            
        if(filters.filter === 1){   //Fecha
            const resultRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime() ? -1 : 1)

            requerimientoAccordion = ListRequestByDate(filters.hoy, dias, maxAccByDate, resultRequest)
        }
        if(filters.filter === 2){   //Numero del requerimiento
            const resultRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.VRE_Id > b.VRE_Id ? -1 : 1) : filteredRequest.sort((a, b) => a.VRE_Id < b.VRE_Id ? -1 : 1)
            console.log('resultRequest', resultRequest)
            let min = 0
            let max = 0
            if(filters.orderDes){
                max = resultRequest[0].VRE_Id
                min = resultRequest[resultRequest.length - 1].VRE_Id
            }else{
                min = resultRequest[0].VRE_Id
                max = resultRequest[resultRequest.length - 1].VRE_Id
            }
            requerimientoAccordion = ListRequestByNumber(min, max, maxAccByNumber, filters.orderDes)
        }
        if(filters.filter === 3){   //Requerimientos atrazados
        }

        if(!filters.orderDes){
            requerimientoAccordion.reverse()
        }
    }

    return { requerimientoAccordion }
}