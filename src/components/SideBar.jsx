/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState, useId } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, animated } from "@react-spring/web";
import { InBoxIcon, ReportIcon, TableIcon } from "./icons";

export default function SideBar(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const [postitionTo, setPositionTo] = useState(0)
    
    useEffect(() => {
        let overlayElement = null        
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='b'){
            overlayElement = document.getElementById(bandejaId);            
        }
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='m'){
            overlayElement = document.getElementById(mantenedorId);            
        }
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='r'){
            overlayElement = document.getElementById(reporteId);            
        }
        
        setRequest(null)        
        const rect = overlayElement?.getBoundingClientRect()
        setPositionTo(rect?.top - (30+2))
    }, [filters.itemIdSelected])
    
    function handleClickItem(id) {
        setFilters(prevState => ({
            ...prevState,         
            itemIdSelected: id,
            loading: id !== filters.itemIdSelected ? true : false
        }))        
    }

    const menuSelected = useSpring({
        delay: 100,
        opacity: 1,
        position: 'absolute',
        transform: `translateY(0px)`,        
        to: {
            transform: `translateY(${postitionTo}px)`,
        }
    });

    const bandejaId = useId()
    const mantenedorId = useId()
    const reporteId = useId()

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }

    return(
        <section className="flex flex-col items-start gap-3 h-full pt-1 px-1 relative dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100" onDragOver={handleNotDragOver}>                            
            <animated.span className="w-[2px] h-[36px] absolute left-[6px] bg-[#58b8fe] mt-[2px]" style={menuSelected}></animated.span>
            <ul className="flex flex-col w-full h-full gap-2">
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("b")} id={bandejaId} title="Bandejas">
                    <InBoxIcon styles="w-6 h-6" strokeWidth=""/>                
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("m")} id={mantenedorId} title="Mantenedores">
                    <TableIcon styles="w-6 h-6" strokeWidth=""/>
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("r")} id={reporteId} title="Reportes">
                    <ReportIcon styles="w-7 h-7" strokeWidth={2}/>
                </li>
            </ul>
        </section>
    )
}