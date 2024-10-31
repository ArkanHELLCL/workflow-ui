/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { useUserData, useFilters } from "../hooks";
import { MenuTree } from "./menu/MenuTree.jsx"
import Loading from "../utils/Loading.jsx";

const MenuArbol = ({mnuBandejas, mnuMantenedores, mnuReportes, mnuMensajes, frmRecord, frmRequest}) => {    
    return(
        <>  {
                mnuBandejas &&
                    <MenuTree menu={mnuBandejas}/>
            }{
                mnuMensajes &&
                    <MenuTree menu={mnuMensajes}/>
            }{
                mnuReportes &&
                    <MenuTree menu={mnuReportes} frmRecord={frmRecord} frmRequest={frmRequest}/>
            }{
                mnuMantenedores &&
                    <MenuTree menu={mnuMantenedores} frmRecord={frmRecord} frmRequest={frmRequest}/>
            }
        </>
    )
}

export default function Menu({frmRecord, frmRequest}){    
    const { filters } = useFilters()
    const { userdata } = useUserData()
    const menu = userdata?.treeMenu
    
    const bandejas = menu?.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
    const reportes = menu?.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes
    const mantenedores = menu?.mantenedores
    const mensajes = menu?.mensajes
    
    return (        
        <section id="menu" className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] border-r overflow-auto transition-color delay-75 z-0'>
            <div className="px-4 h-full relative">{
                menu ?
                <Suspense fallback={<Loading />}>
                    <MenuArbol mnuBandejas={bandejas} mnuMantenedores={mantenedores} mnuReportes={reportes} mnuMensajes={mensajes} frmRecord={frmRecord} frmRequest={frmRequest}/>
                </Suspense>
                : null
                }
            </div>
        </section>
    )
}