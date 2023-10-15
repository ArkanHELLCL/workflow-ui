import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { flujos, mantenedores, reportes } from "../mocks/menu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense } from "react";
import Loading from "./Loading.jsx";

export default function Menu(){
    const { filters } = useFilters()    
    let bandejas = flujos.filter(item => item.id === filters.flujo)[0].bandejas
    
    return (
        <div className="px-4 lstmnu relative">
            <Suspense fallback={<Loading />}>
                <MenuTree menu={bandejas} title="Bandejas"/>
            </Suspense>
            <Suspense fallback={<Loading />}>
                {
                mantenedores.length > 0 ?
                    <MenuTree menu={mantenedores} title="Mantenedores"/>
                : null
                }
            </Suspense>
            <Suspense fallback={<Loading />}>
                {
                reportes.length > 0 ?
                    <MenuTree menu={reportes} title="Reportes"/>
                : null
                }
            </Suspense>              
        </div>
    )
}