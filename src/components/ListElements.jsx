/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFilters, useInboxState, useAuth, useMantainers, useUserData, useInboxs } from "../hooks";
import { Flujos, MenuFilters, DetalleRequerimiento, ListaRequerimientos, ListaRegMantenedores, ListaRegReportes } from "./main";
import Departamentos from "./main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./main/maintainer/comunamant/menuFiltersCom.jsx";
import MenuFiltersListaDes from "./main/maintainer/itemslistaMant/menuFiltersListaDes.jsx";
import Regiones from "./main/maintainer/comunamant/filtroRegion.jsx";
import ListaDesplegable from "./main/maintainer/itemslistaMant/filtroListaDesplegable.jsx";
import MenuFiltersMen from "./main/reports/menuFiltersMen.jsx";
import Loading from "../utils/Loading.jsx";
import { forEach } from "lodash";
import { Constants } from "../utils/const.jsx";
import getobjItems from '../utils/getObjItems.jsx';

export default function ListElements({frmReport}) {    
  const { filters, filterRequest } = useFilters()
  const { inboxstate, setInboxState } = useInboxState()
  const [stateInbox, setStateInbox] = useState(false)
  const { host, fecthParams : params, dateOptions : options } = Constants()
  const { setAuth } = useAuth()
  const { mantenedores, setMantenedores } = useMantainers()
  const { userdata } = useUserData({})
  const { bandejas, setBandejas } = useInboxs()

  useEffect(() => {
    forEach(inboxstate.loadingInbox, (value, key) => {
      if(key === filters.itemIdSelected) {          
        setStateInbox(value)
      }
  })},[inboxstate.loadingInbox, filters.itemIdSelected])

  useEffect(() => {
    const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
    const objBandeja = getobjItems(userdata.treeMenu,filters.flujo);
    const { description, url, load } = objBandeja.filter(item => item.id===filters.itemIdSelected)[0] ? objBandeja.filter(item => item.id===filters.itemIdSelected)[0] : {description:'', url:'', load:true}
    const endpoint = host + url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded

    let message = ''      
    let error
    let isData = false
    if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'M'){
      message = date + ' - Actualizando registros...'
      isData = mantenedores.filter(item => item.id === filters.itemIdSelected).length > 0 ? true : false
    }
    if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'B'){
      message = date + ' - Actualizando requerimientos...'
      isData = bandejas.filter(item => item.id === filters.itemIdSelected).length > 0 ? true : false
    }
    if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'R'){
      isData = true
    }
    if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'J'){
      message = date + ' - Actualizando mensajes...'      
      isData = bandejas.filter(item => item.id === filters.itemIdSelected).length > 0 ? true : false
    }
    
    if(!load && !isData){
      //Inicio de carga de datos
      const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
      setInboxState(prevState => ({
        ...prevState,
        loadingInboxs: true,          
        messages: [...prevState.messages, message],
        error: false
      }))

      message = date + ' - Actualizando ' + description + '...'
      setInboxState(prevState => ({
        ...prevState,
        loadingInboxs: true,
        loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: false},
        messages: [...prevState.messages, message],
        error: error
      }))

      fetch(endpoint, params)
      .then((response) => response.json())
      .then((data) => {
          const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
          if(data.error){                
              if(parseInt(data.error) === 401){
                  setAuth(false)
              }
              message = date + ' - Error: ' + description + ' ' + data.message
          }
          else
              message = date + ' - ' + description + ' actualizado';

          if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'M')
            setMantenedores(prevState => ([...prevState, data]))

          if(filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' || filters.itemIdSelected?.charAt(0).toUpperCase() === 'J')
            setBandejas(prevstate => [...prevstate, data])

          setInboxState(prevState => ({
              ...prevState,                    
              messages: [...prevState.messages, message],
              error: data.error ? true : false,
              loadingInboxs: false,
              loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},                    
          }))
      })
      .catch((error) => {
          const date = new Intl.DateTimeFormat(undefined, options).format(new Date())            
          setInboxState(prevState => ({
              ...prevState,
              loadingInboxs: false,
              loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},
              messages: [...prevState.messages, date + ' - Error: ' + description + ' ' + error],
              error: true
          }))
      })
    } 
  },[filters.itemIdSelected])

  const Banadejas = () => {
    const { filteredRequest } = filterRequest(bandejas.filter(item => item.id === filters.itemIdSelected))
        
    return (
      filteredRequest && 
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
              <ListaRequerimientos filteredRequest={filteredRequest} maxRecordLoaded={filters.maxRecordLoaded}/>
            </>                      
        </div>
      </>    
    )
  }

  const Mantenedores = () => {
    return (
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
            <ListaRegMantenedores />                      
        </div>
      </>
    )
  }

  const Mensajes = () => {
    const { filteredRequest } = filterRequest(bandejas.filter(item => item.id === filters.itemIdSelected))

    return (
      filteredRequest && 
      <>
        <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40 dark:border-[#353535] border-[#d4d4d4] border-b">
          <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
          </div>
          <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
              <MenuFiltersMen />
          </div>
        </div>
        <ListaRequerimientos filteredRequest={filteredRequest} maxRecordLoaded={filters.maxRecordLoaded}/>
      </>
    )
  }

  const StatBan = () => {
    return (
      bandejas.filter(item => item.id.charAt(0).toUpperCase() === 'B' && item.id.length === 2).map((item, index) => (
        <article key={index} className="flex flex-col col-2 gap-3">
          <div><span key={index}>{item.id === 'be' ? 'Bandeja de entrada : ' : item.id === 'bs' ? 'Bandeja de salida : ' : item.id === 'bf' ? 'Bandeja de finalizados : ' : item.id === 'bo' ? 'Bandeja de otros : ' : item.id === 'ba' ? 'Bandeja de archivados : ' : '' }</span>
          <span>{item.registros.length}</span></div>
        </article>
      ))
    )
  }

  const StatMen = () => {
    return (
      bandejas.filter(item => item.id.charAt(0).toUpperCase() === 'J' && item.id.length === 2).map((item, index) => (
        <article key={index} className="flex flex-col col-2 gap-3">
          <div><span key={index}>{item.id === 'jr' ? 'Mensajes recibidos : ' : item.id === 'je' ? 'mensajes enviados : ' : item.id === 'jb' ? 'mensajes borrador : ' : item.id === 'jl' ? 'Mensajes eleminados : ' : item.id === 'ba' ? 'Bandeja de archivados : ' : '' }</span>
          <span>{item.registros.length}</span></div>
        </article>
      ))
    )
  }

  return (
    <section id="list">{
      !stateInbox ?
        <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-center'>
            <Loading /> 
        </div>
      :
        <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-baseline'>
              {
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' && filters.itemIdSelected.length > 1 && filters.itemIdSelected !== 'bn' &&
                  <Banadejas />
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' && filters.itemIdSelected.length > 1 &&
                  <Mantenedores />
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' && filters.itemIdSelected.length > 1 &&
                  <ListaRegReportes frmReport={frmReport} />
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'J' && filters.itemIdSelected.length > 1 &&
                  <Mensajes />
              }{
                filters.itemIdSelected === 'b' && 
                  <StatBan />
              }{
                filters.itemIdSelected === 'm' &&
                  <span>mantenedores</span>
              }{
                filters.itemIdSelected === 'r' &&
                  <span>reportes</span>
              }{
                filters.itemIdSelected === 'j' &&
                  <StatMen />
              }              
        </div>
    }
    </section>
  )
}