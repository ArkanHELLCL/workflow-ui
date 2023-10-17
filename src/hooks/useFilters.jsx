import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {  
    const { filters, setFilters } = useContext(FiltersContext)

    const filterRequest = (request) => {        
        let filteredRequest = []
        const bandeja = request.filter(item => item?.id === filters.itemIdSelected)
        const requerimientos = bandeja.length > 0 ? bandeja?.map(item => item?.requerimientos != undefined ? item?.requerimientos : [])[0] : []        

        filteredRequest = requerimientos?.filter((item) => filters.stringSearch === "" ? item : (   
            item.DRE_UsuarioEditAnt?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            item.NombreEditor?.toUpperCase().match(filters.stringSearch.toUpperCase()) || 
            item.ApellidoEditor?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            item.NombreCreador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            item.ApellidoCreador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            item.REQ_Descripcion?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            item.DFO_Descripcion?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
            Number(item.VRE_Id) === Number(filters.stringSearch)
        ))
        
        //Por Flujo seleccionado
        filteredRequest = filteredRequest?.filter((item) => filters.flujo === 0 ? item : item.FLU_Id === filters.flujo)

        //Estadisticas        
        filters.totalRequerimientos = filteredRequest?.length ? filteredRequest?.length : 0
        filters.totalSintomar = filteredRequest.filter((item) => item.IdEditor === undefined).length
        filters.totalVencidos = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias < 0).length
        filters.totalPorVencer = filteredRequest.filter((item) => item.FLD_DiasLimites - item.DRE_DifDias <= 5 && item.FLD_DiasLimites - item.DRE_DifDias >= 0).length

        //Orden de los requerimientos
        if(filters.filter === 1){   //Fecha
            filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime() ? -1 : 1)
        }
        if(filters.filter === 2){   //Numero del requerimiento
            filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.VRE_Id > b.VRE_Id ? -1 : 1) : filteredRequest.sort((a, b) => a.VRE_Id < b.VRE_Id ? -1 : 1)
            
            if(filters.orderDes){
                filters.maxReq = filteredRequest[0].VRE_Id
                filters.minReq = filteredRequest[filteredRequest.length - 1].VRE_Id
            }else{
                filters.minReq = filteredRequest[0].VRE_Id
                filters.maxReq = filteredRequest[filteredRequest.length - 1].VRE_Id
            }
        }
        if(filters.filter === 3){   //Requerimientos atrazados
            filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime() ? -1 : 1)
        }
        if(filters.filter === 4){   //Paso actual
            filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.FLD_CodigoPaso > b.FLD_CodigoPaso ? -1 : 1) : filteredRequest.sort((a, b) => a.FLD_CodigoPaso < b.FLD_CodigoPaso ? -1 : 1)            
            
            if(filters.orderDes){
                filters.maxStep = filteredRequest[0].FLD_CodigoPaso
                filters.minStep = filteredRequest[filteredRequest.length - 1].FLD_CodigoPaso
            }else{
                filters.minStep = filteredRequest[0].FLD_CodigoPaso
                filters.maxStep = filteredRequest[filteredRequest.length - 1].FLD_CodigoPaso
            }
        }            
        return {filteredRequest}
    }
    return {filters, filterRequest, setFilters}
}