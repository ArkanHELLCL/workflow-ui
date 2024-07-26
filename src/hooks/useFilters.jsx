import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterRequest = (request) => {
        let filteredRequest = []
        //Search request        
        let bandeja = []
        if(filters.stringSearch!=='' && filters.filterSearch===1){
            bandeja = request?.filter(item => item?.id === filters.itemIdSelected)
        }        
        if(filters.stringSearch!=='' && filters.filterSearch===2){            
            //let requerimientosArray = [];            
            // Recorremos cada elemento en el objeto "bandejas"
            request?.forEach(item => {                
                // Recorremos cada requerimiento en la bandeja actual y lo agregamos al array de requerimientos
                item.registros?.forEach(item => {
                    bandeja.push(item);
                });
            });
            bandeja = bandeja[0].registros = bandeja
        }
        
        filters.stringSearch==='' ? bandeja = request.filter(item => item?.id === filters.itemIdSelected) : null
        const registros = bandeja.length > 0 ? bandeja?.map(item => item?.registros != undefined ? item?.registros : [])[0] : []
        
        //Solo para bandejas
        if(filters.itemIdSelected.charAt(0).toUpperCase() === 'B'){            
            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : (
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
                filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => parseInt(a.VRE_Id) > parseInt(b.VRE_Id) ? -1 : 1) : filteredRequest.sort((a, b) => parseInt(a.VRE_Id) < parseInt(b.VRE_Id) ? -1 : 1)
                
                if(filters.orderDes){
                    filters.maxReq = filteredRequest[0]?.VRE_Id
                    filters.minReq = filteredRequest[filteredRequest.length - 1]?.VRE_Id
                }else{
                    filters.minReq = filteredRequest[0]?.VRE_Id
                    filters.maxReq = filteredRequest[filteredRequest.length - 1]?.VRE_Id
                }
            }
            if(filters.filter === 3){   //Requerimientos atrazados
                filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime() ? -1 : 1)
            }
            if(filters.filter === 4){   //Paso actual
                filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.FLD_CodigoPaso > b.FLD_CodigoPaso ? -1 : 1) : filteredRequest.sort((a, b) => a.FLD_CodigoPaso < b.FLD_CodigoPaso ? -1 : 1)            
                
                if(filters.orderDes){
                    filters.maxStep = filteredRequest[0]?.FLD_CodigoPaso
                    filters.minStep = filteredRequest[filteredRequest.length - 1]?.FLD_CodigoPaso
                }else{
                    filters.minStep = filteredRequest[0]?.FLD_CodigoPaso
                    filters.maxStep = filteredRequest[filteredRequest.length - 1]?.FLD_CodigoPaso
                }
            }
        }else{
            //Solo para mantenedores
            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : null)

            //Estadisticas        
            filters.totalRequerimientos = filteredRequest?.length ? filteredRequest?.length : 0
            filters.totalVencidos = filteredRequest.filter((item) => item.estado === 0).length      //Bloqueados
            filters.totalPorVencer = filteredRequest.filter((item) => item.estado === 1 || item.estado === undefined).length     //Habilitados

            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : (
                item.titulo?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.subtitulo?.toUpperCase().match(filters.stringSearch.toUpperCase()) || 
                item.detalle?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.creador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                Number(item.Id) === Number(filters.stringSearch)
            ))

            //Orden de los registros
            if(filters.filterMant === 1){   //Fecha creación
                filteredRequest = filters.orderDesMant ? filteredRequest.sort((a, b) => new Date(a.modificacion).getTime() > new Date(b.modificacion).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.modificacion).getTime() < new Date(b.modificacion).getTime() ? -1 : 1)
            }
            if(filters.filterMant === 2){   //Id del registro
                filteredRequest = filters.orderDesMant ? filteredRequest.sort((a, b) => parseInt(a.Id) > parseInt(b.Id) ? -1 : 1) : filteredRequest.sort((a, b) => parseInt(a.Id) < parseInt(b.Id) ? -1 : 1)
                
                if(filters.orderDesMant){
                    filters.maxReq = filteredRequest[0]?.Id
                    filters.minReq = filteredRequest[filteredRequest.length - 1]?.Id
                }else{
                    filters.minReq = filteredRequest[0]?.Id
                    filters.maxReq = filteredRequest[filteredRequest.length - 1]?.Id
                }
            }
            if(filters.filterMant === 3){  //Titulo
                filteredRequest = filters.orderDesMant ? filteredRequest.sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? -1 : 1) : filteredRequest.sort((a, b) => a.titulo.toUpperCase() < b.titulo.toUpperCase() ? -1 : 1)
            }

            //Filros adicionales por cada mantenedor, cuando corresponda
            if(filters.itemIdSelected==='mu'){   //Usuarios - Filtro por Departamento
                filteredRequest = filteredRequest.filter((item) => filters.departamento === 0 ? item : parseInt(item.DEP_Id) === parseInt(filters.departamento))
            }
            if(filters.itemIdSelected==='mc'){   //Comunas - Filtro por Region
                filteredRequest = filteredRequest.filter((item) => filters.region === 0 ? item : parseInt(item.REG_Id) === parseInt(filters.region))
            }
        }
        return {filteredRequest}
    }
    return {filters, filterRequest, setFilters}
}