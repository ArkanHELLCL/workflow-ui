/* eslint-disable react/prop-types */
import { useEffect, useState, useId } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, animated } from "@react-spring/web";
import { DocIcon, InBoxIcon, MailIcon, TableIcon } from "./icons";

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
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='s'){
            overlayElement = document.getElementById(mensajesId);            
        }
        setRequest(null)        
        const rect = overlayElement?.getBoundingClientRect()
        setPositionTo(rect?.top - (30+2))
    }, [filters.itemIdSelected])
    
    function handleClickItem(id) {
        setFilters(prevState => ({
            ...prevState,         
            itemIdSelected: id,
            loading: true
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
    const mensajesId = useId()

    return(
        <section className="flex flex-col items-start gap-3 h-full pt-1 px-1 relative">                            
            <animated.span className="w-[2px] h-[36px] absolute left-[6px] bg-[#58b8fe] mt-[2px]" style={menuSelected}></animated.span>
            <ul className="flex flex-col w-full h-full gap-2">
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("b")} id={bandejaId} title="Bandejas">
                    <InBoxIcon styles="w-6 h-6" strokeWidth=""/>                
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("m")} id={mantenedorId} title="Mantenedores">
                    <TableIcon styles="w-6 h-6" strokeWidth=""/>
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("r")} id={reporteId} title="Reportes">
                    <DocIcon styles="w-6 h-6" strokeWidth=""/>
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "s" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 relative`} onClick={()=>handleClickItem("s")} id={mensajesId} title="Mensajes">
                    <div className="absolute inline-flex items-center justify-center w-2 h-2 text-[10px] font-bold text-white bg-red-600 rounded-full top-1 right-1"></div>
                    <MailIcon styles="w-6 h-6" strokeWidth=""/>
                </li>
            </ul>
        </section>
    )
}