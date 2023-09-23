import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {  
    const { filters, setFilters } = useContext(FiltersContext)
    //const { dias } = Constants()

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
        
        console.log(filteredRequest, 'useFilters')
        return {filteredRequest}
    }
    return {filters, filterRequest, setFilters}
}