/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import { useInboxState } from '../hooks/useInboxState.jsx';
import MenuFilters from "./main/menuFilters.jsx";
import Flujos from "./main/flujos.jsx";
import Departamentos from "./main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./main/maintainer/comunamant/menuFiltersCom.jsx";
import MenuFiltersListaDes from "./main/maintainer/itemslistaMant/menuFiltersListaDes.jsx";
import Regiones from "./main/maintainer/comunamant/filtroRegion.jsx";
import ListaDesplegable from "./main/maintainer/itemslistaMant/filtroListaDesplegable.jsx";
import DetalleRequerimiento from "./main/DetalleRequerimiento.jsx";
import ListaRequerimientos from "./main/ListaRequerimientos.jsx";
import ListaRegMantenedores from "./main/ListaRegMantenedores.jsx";
import ListaRegReportes from "./main/ListaRegReportes.jsx";
import Loading from "../utils/Loading.jsx";
import MenuFiltersMen from "./main/reports/menuFiltersMen.jsx";
import { forEach } from "lodash";
import { useEffect, useState } from "react";
import { Constants } from "../utils/const.jsx";
import { useAuth } from "../hooks/useAuth.jsx";
import { useMantainers } from "../hooks/useMantainers.jsx";

export default function List({frmRequest, frmRecord, frmReport, frmMessages}) {    
    const { filters } = useFilters()
    const { inboxstate, setInboxState } = useInboxState()
    const [stateInbox, setStateInbox] = useState(false)
    const { host, fecthParams : params, dateOptions : options } = Constants()
    const { setAuth } = useAuth()
    const { setMantenedores } = useMantainers()

    useEffect(() => {
      forEach(inboxstate.loadingInbox, (value, key) => {
        if(key === filters.itemIdSelected) {          
          setStateInbox(value)
        }
      })
      /*for (const [key, value] of Object.entries(inboxstate.loadingInbox)) {
        if(key === filters.itemIdSelected) {          
          setStateInbox(value)
        }
      }*/
      /*console.log('loadingInbox:', inboxstate.loadingInbox[filters.itemIdSelected])
      if(inboxstate.loadingInbox[filters.itemIdSelected] === undefined){        
        setStateInbox(true)
      }*/
    },[inboxstate.loadingInbox, filters.itemIdSelected])

    useEffect(() => {
      const date = new Intl.DateTimeFormat(undefined, options).format(new Date())        
      let url = ''      
      let message = ''      
      let msgfinal = ''
      let name = ''
      let error

      if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'M'){
        message = date + ' - Actualizando registros...'
        setInboxState(prevState => ({
            ...prevState,
            loadingInboxs: true,          
            messages: [...prevState.messages, message],
            error: false
        }))

        if(filters.itemIdSelected === 'mu'){
            url = host + '/api/mantenedores/usuarios?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de usuarios...'
            msgfinal = date + ' - Mantenedor de usuarios actualizado'
            name = 'usuarios'
            error = false
        }        
        if(filters.itemIdSelected === 'ml'){
            url = host + '/api/mantenedores/listas-desplegable?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de listas desplegable...'
            msgfinal = date + ' - Mantenedor de listas desplegable actualizado'
            name = 'listas desplegable'
            error = false
        }        
        if(filters.itemIdSelected === 'mi'){
            url = host + '/api/mantenedores/items-lista-desplegable?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de items de listas desplegable...'
            msgfinal = date + ' - Mantenedor de items de listas desplegable actualizado'
            name = 'items de listas desplegable'
            error = false
        }        
        if(filters.itemIdSelected === 'mp'){
            url = host + '/api/mantenedores/proveedores?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de proveedores...'
            msgfinal = date + ' - Mantenedor de proveedores actualizado'
            name = 'proveedores'
            error = false
        }        
        if(filters.itemIdSelected === 'mc'){
            url = host + '/api/mantenedores/comunas?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de comunas...'
            msgfinal = date + ' - Mantenedor de comunas actualizado'
            name = 'comunas'
            error = false
        }
        setInboxState(prevState => ({
            ...prevState,
            loadingInboxs: true,
            loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: false},
            messages: [...prevState.messages, message],
            error: error
        }))
        if(url){
            fetch(url, params)
            .then((response) => response.json())
            .then((data) => {
                if(data.error){
                    if(parseInt(data.error) === 401){
                        setAuth(false)
                    }
                    message = date + ' - Error: Mantenedor de ' + name + ' ' + data.message
                }
                else
                    message = msgfinal;
                
                setMantenedores(prevState => ([...prevState, data]))
                setInboxState(prevState => ({
                    ...prevState,                    
                    messages: [...prevState.messages, message],
                    error: data.error ? true : false,
                    loadingInboxs: false,
                    loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},                    
                }))
            })
            .catch((error) => {
                console.log('Error 1:', error)
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},
                    messages: [...prevState.messages, date + ' - Error: ' + name + ' ' + error],
                    error: true
                }))
            })
        }
      }
  }, [filters.itemIdSelected])
    
    return (
      <section id="list">{        
        !stateInbox ?
          <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-center'>
              <Loading /> 
          </div>
        :
          <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-baseline'>
                {
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' && filters.itemIdSelected.length > 1 &&
                    <>
                      <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
                          <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                            <Flujos />                
                          </div>
                          <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                            <MenuFilters />
                          </div>
                      </div>
                      <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">
                          <>
                            <DetalleRequerimiento />
                            <ListaRequerimientos frmRequest={frmRequest} frmMessages={frmMessages}/>
                          </>                      
                      </div>
                    </>
                }{
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' && filters.itemIdSelected.length > 1 &&
                    <>
                      <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40 dark:border-[#353535] border-[#d4d4d4] border-b">{
                        filters.itemIdSelected?.toUpperCase() === 'MU' ? (     
                          <>                
                            <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                  <Departamentos />                            
                            </div>
                            <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                  <MenuFiltersUsr />                            
                            </div>
                          </> 
                          ) : filters.itemIdSelected?.toUpperCase() === 'MC' ? (  
                            <>                
                              <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                    <Regiones />                            
                              </div>
                              <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                    <MenuFiltersCom />                            
                              </div>
                            </> 
                          ) : filters.itemIdSelected?.toUpperCase() === 'MI' ? (  
                            <>                
                              <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                    <ListaDesplegable />                            
                              </div>
                              <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                    <MenuFiltersListaDes />                            
                              </div>
                            </> 
                          ) : (
                            <>
                              <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                              </div>
                              <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                  <MenuFiltersMan />
                              </div>
                            </>                        
                          )
                        }
                      </div>
                      <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">                    
                          <ListaRegMantenedores frmRecord={frmRecord}/>                      
                      </div>
                    </>
                }{
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' && filters.itemIdSelected.length > 1 &&
                    <ListaRegReportes frmReport={frmReport} />
                }{
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'J' && filters.itemIdSelected.length > 1 &&
                    <>
                      <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40 dark:border-[#353535] border-[#d4d4d4] border-b">
                        <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                        </div>
                        <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                            <MenuFiltersMen />
                        </div>
                      </div>
                      <ListaRequerimientos frmRequest={frmRequest} frmMessages={frmMessages}/>
                    </>
                }
          </div>
      }
      </section>
    )
}