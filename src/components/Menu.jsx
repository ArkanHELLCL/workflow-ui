/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MenuTree } from "./MenuTree.jsx"
import { flujos } from "../mocks/treeMenu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";
import EncontrarDescripcionPorId from "./EncontrarDescripcionPorId.jsx";
import EncontrarIdPorUrl from './EncontrarIdPorUrl.jsx'

const currentPath = window.location.pathname

const MenuArbol = ({itemIdSelected, menuBandejas, mnuMantenedores, mnuReportes}) => {
    let url = ''
    itemIdSelected.charAt(0) === "b" ? url = EncontrarDescripcionPorId(itemIdSelected, menuBandejas[0]).url :
    itemIdSelected.charAt(0) === "m" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuMantenedores[0]).url :
    itemIdSelected.charAt(0) === "r" ? url = EncontrarDescripcionPorId(itemIdSelected, mnuReportes[0]).url : url = EncontrarDescripcionPorId('be', menuBandejas[0]).url     

    window.history.pushState({},'',url)
    
    return(
        <>
            <MenuTree menu={menuBandejas}/>
            {
            menuBandejas.length > 0 ?
                <MenuTree menu={mnuMantenedores}/>
            : null
            }
            {
            mnuReportes.length > 0 ?
                <MenuTree menu={mnuReportes}/>
            : null
            }
        </>
    )
}

export default function Menu(){    
    const { filters, setFilters } = useFilters()
    const [loading, setLoading] = useState(true);
    const [menuBandejas, setMenuBandejas] = useState([])
    const [mnuMantenedores, setmnuMantenedores] = useState([])
    const [mnuReportes, setmnuReportes] = useState([])

    let idCurrentPath=''//filters.itemIdSelected

    useEffect(() => {        
        const bandejas = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
        const mantenedores = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].mantenedores
        const reportes = flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes
        setMenuBandejas(bandejas)
        setmnuMantenedores(mantenedores)
        setmnuReportes(reportes)
        setLoading(false);
    },[filters.flujo])

    useEffect(() => {
        //currentPath!=='/' ? idCurrentPath = filters.itemIdSelected : 
        !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas[0]).id :
        !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].mantenedores[0]).id :
        !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes[0]).id : idCurrentPath = filters.itemIdSelected

        //console.log(currentPath,idCurrentPath)
        if(idCurrentPath){
            setFilters({
                ...filters,
                itemIdSelected:idCurrentPath
            })
        }
    },[])
    
    return (
        <div className="px-4 h-full relative">            
            {loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>
                    <MenuArbol itemIdSelected={filters.itemIdSelected} menuBandejas={menuBandejas} mnuMantenedores={mnuMantenedores} mnuReportes={mnuReportes}/>
                </Suspense>
            )}                            
        </div>
    )
}