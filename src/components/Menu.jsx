import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { Bandejas, Mantenedores, Reportes } from "../mocks/menu.json";
export default function Menu(){
    return (
        <div className="pl-4 pr-4 lstmnu">
            <MenuTree menu={Bandejas} title="Bandejas"/>
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