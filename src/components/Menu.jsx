/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MenuTree } from "./menu/MenuTree.jsx"
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense } from "react";
import Loading from "../utils/Loading.jsx";
import EncontrarDescripcionPorId from "../utils/EncontrarDescripcionPorId.jsx";

const MenuArbol = ({itemIdSelected, mnuBandejas, mnuMantenedores, mnuReportes, mnuMensajes, frmRecord, frmRequest}) => {
    let url = ''
    itemIdSelected.charAt(0) === "b" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuBandejas[0])?.url :
    itemIdSelected.charAt(0) === "m" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuMantenedores[0])?.url :
    itemIdSelected.charAt(0) === "r" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuReportes[0])?.url : 
    itemIdSelected.charAt(0) === "j" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuMensajes[0])?.url : url = EncontrarDescripcionPorId('be', mnuBandejas[0])?.url     

    window.history.pushState({},'',url)
    
    return(
        <>
            <MenuTree menu={mnuBandejas}/>
            <MenuTree menu={mnuMensajes}/>{
                mnuReportes.length > 0 ?
                    <MenuTree menu={mnuReportes} frmRecord={frmRecord} frmRequest={frmRequest}/>
                : null
            }
            <MenuTree menu={mnuMantenedores} frmRecord={frmRecord} frmRequest={frmRequest}/>
        </>
    )
}

export default function Menu({menu, frmRecord, frmRequest}){    
    const { filters } = useFilters()
    const bandejas = menu.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
    const reportes = menu.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes
    const mantenedores = menu.mantenedores
    const mensajes = menu.mensajes
    
    return (
        <section id="menu" className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] border-r overflow-auto transition-color delay-75 z-0'>
            <div className="px-4 h-full relative">            
                <Suspense fallback={<Loading />}>
                    <MenuArbol itemIdSelected={filters.itemIdSelected} mnuBandejas={bandejas} mnuMantenedores={mantenedores} mnuReportes={reportes} mnuMensajes={mensajes} frmRecord={frmRecord} frmRequest={frmRequest}/>
                </Suspense>                   
            </div>
        </section>
    )
}