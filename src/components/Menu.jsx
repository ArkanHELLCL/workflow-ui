import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { flujos, mantenedores, reportes } from "../mocks/menu.json";
import { useFilters } from "../hooks/useFilters.jsx";
export default function Menu(){
    const { filters } = useFilters()
    let bandejas = flujos.filter(item => item.id === filters.flujo)[0].bandejas
    return (
        <div className="pl-4 pr-4 lstmnu">
            <MenuTree menu={bandejas} title="Bandejas"/>
            {
            mantenedores.length > 0 ?
                <MenuTree menu={mantenedores} title="Mantenedores"/>
            : null
            }
            {
            reportes.length > 0 ?
                <MenuTree menu={reportes} title="Reportes"/>
            : null
            }                
        </div>
    )
}