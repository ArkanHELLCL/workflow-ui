import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterRequest = (request) => {        
        if(request?.registros?.lenght===0) return {filteredRequest: []}
        
        let filteredRequest = []
        filters.totalFiltrados = 0
        //Search request        
        let bandeja = []
        if(filters.stringSearch!=='' && filters.filterSearch===1){
            bandeja = request?.filter(item => item?.id === filters.itemIdSelected)
        }        
        if(filters.stringSearch!=='' && filters.filterSearch===2){            
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

        //Total de registro antes de filtrar
        filters.totalRequerimientos = registros?.length ? registros?.length : 0
        
        //Solo para bandejas
        if(filters.itemIdSelected.charAt(0).toUpperCase() === 'B'){
            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : (
                filters.stringSearch.slice(0,2).toUpperCase() === '@N' ? Number(item.VRE_Id) === Number(filters.stringSearch.slice(2, filters.stringSearch.length)) :

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
            //Solo para bandejas activas no historicas
            if(filters.itemIdSelected.slice(0,3).toUpperCase() !== 'BNC')    //Bandejas de antiguos requerimientos
                filteredRequest = filteredRequest?.filter((item) => filters.flujo === 0 ? item : item.FLU_Id === filters.flujo)

            //Estadisticas
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
                filteredRequest = filters.orderDes ? filteredRequest.sort((a, b) => a.FLD_CodigoPaso >= b.FLD_CodigoPaso ? -1 : 1) : filteredRequest.sort((a, b) => a.FLD_CodigoPaso < b.FLD_CodigoPaso ? -1 : 1)            
                
                if(filters.orderDes){
                    filters.maxStep = filteredRequest[0]?.FLD_CodigoPaso
                    filters.minStep = filteredRequest[filteredRequest.length - 1]?.FLD_CodigoPaso
                }else{
                    filters.minStep = filteredRequest[0]?.FLD_CodigoPaso
                    filters.maxStep = filteredRequest[filteredRequest.length - 1]?.FLD_CodigoPaso
                }                
            }            
        }
        if(filters.itemIdSelected.charAt(0).toUpperCase() === 'M'){
            //Solo para mantenedores
            //filtros de cuadro de busqueda
            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : (
                item.titulo?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.subtitulo?.toUpperCase().match(filters.stringSearch.toUpperCase()) || 
                item.detalle?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.creador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                Number(item.Id) === Number(filters.stringSearch)
            ))

            //Estadisticas
            filters.totalVencidos = filteredRequest.filter((item) => item.estado === 0).length      //Bloqueados
            filters.totalPorVencer = filteredRequest.filter((item) => item.estado === 1 || item.estado === undefined).length     //Habilitados

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
            
            let PrevfilteredRequest = filteredRequest.length
            //Filros adicionales por cada mantenedor, cuando corresponda
            if(filters.itemIdSelected==='mu'){   //Usuarios - Filtro por Departamento
                filteredRequest = filteredRequest.filter((item) => filters.departamento === 0 ? item : parseInt(item.DEP_Id) === parseInt(filters.departamento))
                filters.totalFiltrados = filteredRequest.length
            }
            if(filters.itemIdSelected==='mc'){   //Comunas - Filtro por Region
                filteredRequest = filteredRequest.filter((item) => filters.region === 0 ? item : parseInt(item.REG_Id) === parseInt(filters.region))
                filters.totalFiltrados = filteredRequest.length
            }
            if(filters.itemIdSelected==='mi'){   //Item Lista Desplegable - Filtro por Lista Desplegable
                filteredRequest = filteredRequest.filter((item) => filters.listadesplegable === 0 ? item : parseInt(item.LID_Id) === parseInt(filters.listadesplegable))
                filters.totalFiltrados = filteredRequest.length
            }

            PrevfilteredRequest === filters.totalFiltrados ? filters.totalFiltrados = 0 : filters.totalFiltrados
        }
        if(filters.itemIdSelected.charAt(0).toUpperCase() === 'J'){
            //Solo para mensajes                        
            //filtros de cuadro de busqueda            
            filteredRequest = registros?.filter((item) => filters.stringSearch === "" ? item : (
                filters.stringSearch.slice(0,2).toUpperCase() === '@N' ? Number(item.VRE_Id) === Number(filters.stringSearch.slice(2, filters.stringSearch.length)) :

                item.DRE_UsuarioEditAnt?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.NombreEditor?.toUpperCase().match(filters.stringSearch.toUpperCase()) || 
                item.ApellidoEditor?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.NombreCreador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.ApellidoCreador?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.REQ_Descripcion?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                item.DFO_Descripcion?.toUpperCase().match(filters.stringSearch.toUpperCase()) ||
                Number(item.VRE_Id) === Number(filters.stringSearch)
            ))            
            //Estadisticas        
            filters.totalMensajes = filteredRequest?.length ? filteredRequest?.length : 0

            //Orden de los registros
            if(filters.filterMen === 1){   //Fecha creación
                filteredRequest = filters.orderDesMen ? filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() > new Date(b.DRE_FechaEdit).getTime() ? -1 : 1) : filteredRequest.sort((a, b) => new Date(a.DRE_FechaEdit).getTime() < new Date(b.DRE_FechaEdit).getTime() ? -1 : 1)
            }
            if(filters.filterMen === 2){   //Id del mensaje
                filteredRequest = filters.orderDesMen ? filteredRequest.sort((a, b) => parseInt(a.VRE_Id) > parseInt(b.VRE_Id) ? -1 : 1) : filteredRequest.sort((a, b) => parseInt(a.VRE_Id) < parseInt(b.VRE_Id) ? -1 : 1)
                
                if(filters.orderDesMen){
                    filters.maxReq = filteredRequest[0]?.VRE_Id
                    filters.minReq = filteredRequest[filteredRequest.length - 1]?.VRE_Id
                }else{
                    filters.minReq = filteredRequest[0]?.VRE_Id
                    filters.maxReq = filteredRequest[filteredRequest.length - 1]?.VRE_Id
                }
            }
            if(filters.filterMen === 3){  //Remitente
                filteredRequest = filters.orderDesMen ? filteredRequest.sort((a, b) => a.USR_Apellido?.toUpperCase() > b.USR_Apellido?.toUpperCase() ? -1 : 1) : filteredRequest.sort((a, b) => a.USR_Apellido?.toUpperCase() < b.USR_Apellido?.toUpperCase() ? -1 : 1)
            }            
        }
        //Total de registros despues de filtrar
        if(parseInt(filteredRequest.length) === parseInt(filters.totalRequerimientos))
            filters.totalFiltrados = 0 
        else 
            filters.totalFiltrados = filteredRequest.length

        return {filteredRequest}
    }
    return {filters, filterRequest, setFilters}
}