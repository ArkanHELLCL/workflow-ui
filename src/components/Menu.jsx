import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { flujos, mantenedores, reportes } from "../mocks/menu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Menu(){
    const { filters } = useFilters()
    const [postitionTo, setPositionTo] = useState(0)    

    let bandejas = flujos.filter(item => item.id === filters.flujo)[0].bandejas
    /*const posOverlayBandejas = bandejas.findIndex(item => item.id === filters.itemIdSelected)
    const posOverlayMantenedores = mantenedores.findIndex(item => item.id === filters.itemIdSelected)
    const posOverlayReportes = reportes.findIndex(item => item.id === filters.itemIdSelected)

    const maxBandejas = bandejas.length + 1
    const maxMantenedores = mantenedores.length + 1
    const maxReportes = reportes.length + 1*/
    
    //console.log(rect, rect.top)

    //const widthEl = 26

    useEffect(() => {        
        const overlayElement = document.getElementById(filters.itemIdSelected);
        const rect = overlayElement?.getBoundingClientRect()
        setPositionTo(rect?.top - (30+80+12+2))
    }, [filters.itemIdSelected])

    const menuOverlay = useSpring({
        delay: 100,
        opacity: 1,
        position: 'absolute',
        transform: `translateY(0px)`,        
        to: {
            transform: `translateY(${postitionTo}px)`,
        }
    });

    return (
        <div className="px-4 lstmnu relative">
            <animated.div className='absolute overlay h-[26px] left-4 dark:bg-[#444444]' style={menuOverlay}></animated.div>
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