/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import { BagIcon, BillIcon, HomeIcon, InBoxIcon, PayIcon } from "./icons";
import * as menu from "../mocks/menu.json"

function encontrarNombresPadres(idObjeto, objetivoId) {
    if(objetivoId === "m" || objetivoId === 'undefined' || objetivoId === null) return ["Inicio"]
    if(objetivoId === "Bandejas") return ["Bandejas"]
    if(objetivoId === "Mantenedores") return ["Mantenedores"]
    if(objetivoId === "Reportes") return ["Reportes"]

    for (const propiedad in idObjeto) {
        if (typeof idObjeto[propiedad] === 'object') {
            if (idObjeto[propiedad].id === objetivoId) {
                return [idObjeto[propiedad].name];
            } else {
                const resultado = encontrarNombresPadres(idObjeto[propiedad], objetivoId);
                if (resultado.length > 0) {
                    return [idObjeto[propiedad].name, ...resultado];
                }
            }
        }
    }
    return [];
}

function asignarIconoPorTipo(tipo) {    
    return  tipo.includes('Inicio') ? <HomeIcon />  : 
            tipo.includes('Compras') ? <BagIcon />  :
            tipo.includes('Pagos') ? <BillIcon />  :
            tipo.includes('Boletas') ? <PayIcon />  :
            tipo.includes('Bandejas') ? <InBoxIcon /> : 
        <InBoxIcon />    
    
}

export function Breadcrumbs(){
    const { filters } = useFilters()
    const bread = encontrarNombresPadres(menu, filters.itemIdSelected).filter(nombre => nombre !== undefined)

    const newBread = filters.itemIdSelected != "Bandejas" && filters.itemIdSelected != "Mantenedores" && filters.itemIdSelected != "Reportes" ? 
        (filters.itemIdSelected.charAt(0) === "b" ? ['Bandejas', ...bread] :
        filters.itemIdSelected.charAt(0) === "m" ? ['Mantenedores', ...bread] :
        filters.itemIdSelected.charAt(0) === "r" ? ['Reportes', ...bread] : bread)
        : bread
        
    const elementosConIconos = newBread.map(elemento => {
        const icono = asignarIconoPorTipo(elemento);
        return { elemento, icono };
    });
    
    const largo = newBread.length    
    return (
        <nav className="flex px-5 py-3 border border-[#d4d4d4] rounded-lg bg-[#faf9f8] dark:bg-[#262626] dark:border-[#353535] transition-[wfilters.itemSelectedth] duration-500 max-w-[80vw] overflow-clip" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">{
                elementosConIconos.map((item, index) => (
                    <li className={`inline-flex items-center`} key={index} aria-current={`${index + 1 === largo ? 'page' : ''}`}>
                        <a href="#" className={`${index + 1 === largo ? 'cursor-default text-sky-600 dark:text-white' : 'hover:text-stone-950 dark:hover:text-white text-stone-500  dark:text-stone-400'} inline-flex items-center text-sm  transition-all duration-500`}>                            
                             {item.icono}
                             <span className={`${index + 1 === largo ? 'truncate max-w-fit' : 'truncate max-w-[15vw]'}`}>{item.elemento}</span>
                        </a>
                    </li>
                ))
                }                
            </ol>
        </nav>
    )
}