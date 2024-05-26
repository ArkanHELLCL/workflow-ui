/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState, useId } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, animated } from "@react-spring/web";
import { InBoxIcon, ReportIcon, TableIcon } from "./icons";

//const NAVIGATION_EVENT = 'pushstate'

/*function navigate(href){
    window.history.pushState({},'',href)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}*/

export default function SideBar({Link}){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const [postitionTo, setPositionTo] = useState(0)
    

    /*useEffect(() => {
        const onLocationChange = () => {
            setcurrentPath(window.location.path)
        }

        window.addEventListener(NAVIGATION_EVENT, onLocationChange)

        return () => {
            window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
        }
    },[])*/
    
    
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
        //id === 'b' ? navigate('/bandejas') : id === 'm' ? navigate('/mantenedores') : id === 'r' ? navigate('/reportes') : null
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

    //currentPath==='/bandejas' ? handleClickItem('b') : currentPath==='/mantenedores' ?  handleClickItem('m') : currentPath==='/reportes' ? handleClickItem('r') : null

    return(
        <section className="flex flex-col items-start gap-3 h-full pt-1 px-1 relative dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100" onDragOver={handleNotDragOver}>                            
            <animated.span className="w-[2px] h-[36px] absolute left-[6px] bg-[#58b8fe] mt-[2px]" style={menuSelected}></animated.span>
                <ul className="flex flex-col w-full h-full gap-2">
                    <li>
                        <Link to="/bandejas"  className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("b")} id={bandejaId} title="Bandejas"> 
                            <InBoxIcon styles="w-6 h-6" strokeWidth=""/>   
                        </Link>             
                    </li>
                    <li>
                        <Link to="/mantenedores" className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("m")} id={mantenedorId} title="Mantenedores">
                            <TableIcon styles="w-6 h-6" strokeWidth=""/>
                        </Link>
                    </li>                        
                    <li>
                        <Link to="/reportes" className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("r")} id={reporteId} title="Reportes">
                            <ReportIcon styles="w-7 h-7" strokeWidth={2}/>
                        </Link>                        
                    </li>
                </ul>
        </section>
    )
}