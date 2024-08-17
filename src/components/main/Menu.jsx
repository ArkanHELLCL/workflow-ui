/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MenuTree } from "./menu/MenuTree.jsx"
import { useFilters } from "../../hooks/useFilters.jsx";
import { Suspense } from "react";
import Loading from "../../utils/Loading.jsx";
import EncontrarDescripcionPorId from "./menu/EncontrarDescripcionPorId.jsx";

const MenuArbol = ({itemIdSelected, mnuBandejas, mnuMantenedores, mnuReportes, mnuMensajes, frmRecord}) => {
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
                    <MenuTree menu={mnuReportes} frmRecord={frmRecord}/>
                : null
            }
            <MenuTree menu={mnuMantenedores} frmRecord={frmRecord}/>
        </>
    )
}

export default function Menu({menu,frmRecord}){    
    const { filters } = useFilters()
    const bandejas = menu.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
    const reportes = menu.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes
    const mantenedores = menu.mantenedores
    const mensajes = menu.mensajes
    
    return (
        <div className="px-4 h-full relative">            
            <Suspense fallback={<Loading />}>
                <MenuArbol itemIdSelected={filters.itemIdSelected} mnuBandejas={bandejas} mnuMantenedores={mantenedores} mnuReportes={reportes} mnuMensajes={mensajes} frmRecord={frmRecord}/>
            </Suspense>                   
        </div>
    )
}