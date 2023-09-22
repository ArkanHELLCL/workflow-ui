import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'
import { ListRequestByDate } from '../components/ListRequestByDate.jsx'
import { ListRequestByNumber } from '../components/LisRequestByNumber.jsx';
import { Constants } from "../constants/const.jsx";

export function useFilters() {  
    const { filters, setFilters } = useContext(FiltersContext)
    const { dias } = Constants()

    const filterRequest = (request) => {
        const bandeja = request.filter(item => item?.bandeja === filters.itemIdSelected)
        const requerimientos = bandeja.length > 0 ? bandeja?.map(item => item?.requerimientos != undefined ? item?.requerimientos : [])[0] : []
        
        //Por Flujo seleccionado
        const filteredRequest = requerimientos?.filter((item) => filters.flujo === 0 ? item : item.FLU_Id === filters.flujo)

        //Estadisticas        
        filters.totalRequerimientos = filteredRequest?.length ? filteredRequest?.length : 0
        filters.totalSintomar = filteredRequest.filter((item) => item.IdEditor === undefined).length
        filters.totalVencidos = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias < 0).length
        filters.totalPorVencer = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias <= 5 && item.FLD_DiasLimites - item.DRE_DifDias >= 0).length
        
        //Accordion
        let requerimientoAccordion = []
        if(filteredRequest.length > 0){            
            if(filters.filter === 1){   //Fecha
                filters.maxAccordions = 11
                const resultRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime()) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime())

                requerimientoAccordion = ListRequestByDate(filters.hoy, dias, filters.maxAccordions, resultRequest)
            }
            if(filters.filter === 2){   //Numero del requerimiento
                const resultRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.VRE_Id > b.VRE_Id) : filteredRequest.sort((a, b) => a.VRE_Id < b.VRE_Id)
                let min = 0
                let max = 0
                if(filters.orderDes){
                    min = resultRequest[0].VRE_Id
                    max = resultRequest[resultRequest.length - 1].VRE_Id
                }else{
                    max = resultRequest[0].VRE_Id
                    min = resultRequest[resultRequest.length - 1].VRE_Id
                }
                filters.maxAccordions = 5

                requerimientoAccordion = ListRequestByNumber(min, max, filters.maxAccordions, filters.orderDes)
            }
            if(filters.filter === 3){   //Requerimientos atrazados
            }

            if(!filters.orderDes){
                requerimientoAccordion.reverse()
            }
        }
        console.log(filteredRequest, requerimientoAccordion, 'useFilters')
        return {filteredRequest, requerimientoAccordion}
    }
    return {filters, filterRequest, setFilters}
}