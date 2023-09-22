import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'
import { ListRequestByDate } from '../components/ListRequestByDate.jsx'
import { Constants } from "../constants/const.jsx";

export function useFilters() {  
    const { filters, setFilters } = useContext(FiltersContext)
    const { dias } = Constants()

    const filterRequest = (request) => {
        const bandeja = request.filter(item => item?.bandeja === filters.itemIdSelected)
        const requerimientos = bandeja.length > 0 ? bandeja?.map(item => item?.requerimientos != undefined ? item?.requerimientos : [])[0] : []
        //console.log(requerimientos)
        //Por Flujo seleccionado
        const filteredRequest = requerimientos?.filter((item) => filters.flujo === 0 ? item : item.FLU_Id === filters.flujo)

        //Estadisticas        
        filters.totalRequerimientos = filteredRequest?.length ? filteredRequest?.length : 0
        filters.totalSintomar = filteredRequest.filter((item) => item.IdEditor === undefined).length
        filters.totalVencidos = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias < 0).length
        filters.totalPorVencer = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias <= 5 && item.FLD_DiasLimites - item.DRE_DifDias >= 0).length
        //console.log(filteredRequest)
        //Accordion
        let requerimientoAccordion = []
        if(filteredRequest.length > 0){            
            if(filters.filter === 1){   //Fecha
                //Por Fecha
                const resultRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime()) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime())

                //requerimientoAccordion = ListRequestByDate(filters.hoy, filters.dias, filters.maxAccordions, filteredRequest)
                requerimientoAccordion = ListRequestByDate(filters.hoy, dias, filters.maxAccordions, resultRequest)
            }
            if(!filters.orderDes){
                requerimientoAccordion.reverse()
            }
        }
        //filters.accordionRequest = structuredClone(requerimientoAccordion)

        //return filteredRequest
        return {filteredRequest, requerimientoAccordion}
    }
    return {filters, filterRequest, setFilters}
}