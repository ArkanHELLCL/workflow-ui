import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { bandejas, Mantenedores, Reportes } from "../mocks/menu.json";
export default function Menu(){
    return (
        <div className="pl-4 pr-4 lstmnu">
            <MenuTree menu={bandejas} title="Bandejas"/>
            {
            Mantenedores.length > 0 ?
                <MenuTree menu={Mantenedores} title="Mantenedores"/>
            : null
            }
            {
            Reportes.length > 0 ?
                <MenuTree menu={Reportes} title="Reportes"/>
            : null
            }                
        </div>
    )
}