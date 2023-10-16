/* eslint-disable react/prop-types */
import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { flujos, mantenedores, reportes } from "../mocks/menu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const MenuArbol = ({menuBandejas, mnuMantenedores, mnuReportes}) => {
    return(
        <>
            <MenuTree menu={menuBandejas} title="Bandejas"/>
            {
            mantenedores.length > 0 ?
                <MenuTree menu={mnuMantenedores} title="Mantenedores"/>
            : null
            }
            {
            reportes.length > 0 ?
                <MenuTree menu={mnuReportes} title="Reportes"/>
            : null
            }
        </>
    )
}

export default function Menu(){    
    const { filters } = useFilters()    

    const [loading, setLoading] = useState(true);
    const [menuBandejas, setMenuBandejas] = useState([])
    const [mnuMantenedores, setmnuMantenedores] = useState([])
    const [mnuReportes, setmnuReportes] = useState([])

    useEffect(() => {
        const bandejas = flujos.filter(item => item.id === filters.flujo)[0].bandejas

        setMenuBandejas(bandejas)
        setmnuMantenedores(mantenedores)
        setmnuReportes(reportes)
        setLoading(false);
    },[])            
    
    return (
        <div className="px-4 lstmnu relative">            
            {loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>
                    <MenuArbol menuBandejas={menuBandejas} mnuMantenedores={mnuMantenedores} mnuReportes={mnuReportes}/>
                </Suspense>
            )}                            
        </div>
    )
}