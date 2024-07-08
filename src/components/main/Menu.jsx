/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MenuTree } from "./menu/MenuTree.jsx"
import { useFilters } from "../../hooks/useFilters.jsx";
import { Suspense } from "react";
import Loading from "../../utils/Loading.jsx";
import EncontrarDescripcionPorId from "./menu/EncontrarDescripcionPorId.jsx";

const MenuArbol = ({itemIdSelected, menuBandejas, mnuMantenedores, mnuReportes, frmRecord}) => {
    let url = ''
    itemIdSelected.charAt(0) === "b" ? url = EncontrarDescripcionPorId(itemIdSelected, menuBandejas[0])?.url :
    itemIdSelected.charAt(0) === "m" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuMantenedores[0])?.url :
    itemIdSelected.charAt(0) === "r" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuReportes[0])?.url : url = EncontrarDescripcionPorId('be', menuBandejas[0])?.url     

    window.history.pushState({},'',url)
    
    return(
        <>
            <MenuTree menu={menuBandejas}/>
            {
            menuBandejas.length > 0 ?
                <MenuTree menu={mnuMantenedores} frmRecord={frmRecord}/>
            : null
            }
            {
            mnuReportes.length > 0 ?
                <MenuTree menu={mnuReportes} frmRecord={frmRecord}/>
            : null
            }
        </>
    )
}

export default function Menu({flujos,frmRecord}){    
    const { filters } = useFilters()

    const bandejas = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
    const mantenedores = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].mantenedores
    const reportes = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes    
    
    return (
        <div className="px-4 h-full relative">            
            <Suspense fallback={<Loading />}>
                <MenuArbol itemIdSelected={filters.itemIdSelected} menuBandejas={bandejas} mnuMantenedores={mantenedores} mnuReportes={reportes} frmRecord={frmRecord}/>
            </Suspense>                   
        </div>
    )
}