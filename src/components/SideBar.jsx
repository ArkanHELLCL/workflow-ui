/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, animated } from "@react-spring/web";
import { DocIcon, InBoxIcon, TableIcon } from "./icons";

export default function SideBar(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const [postitionTo, setPositionTo] = useState(0)
    
    useEffect(() => {                
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='b'){
            setPositionTo(0)
        }
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='m'){
            setPositionTo(48)            
        }
        if(filters.itemIdSelected.charAt(0).toLowerCase()==='r'){
            setPositionTo(96)
        }        
    }, [filters.itemIdSelected])

    

    function handleClickItem(id) {
        setFilters(prevState => ({
            ...prevState,         
            itemIdSelected: id        
        }))        
        setRequest(null)
        //moveMenu(id)
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

    return(
        <section className="flex flex-col items-start gap-3 h-full pt-1 px-1 relative">                            
            <animated.span className="w-[2px] h-[36px] absolute left-[6px] bg-[#58b8fe] mt-[2px]" style={menuSelected}></animated.span>
            <ul className="flex flex-col w-full h-full gap-2">
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("b")}>
                    <InBoxIcon styles="w-6 h-6" strokeWidth=""/>                
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("m")}>
                    <TableIcon styles="w-6 h-6" strokeWidth=""/>
                </li>
                <li className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2`} onClick={()=>handleClickItem("r")}>
                    <DocIcon styles="w-6 h-6" strokeWidth=""/>
                </li>                
            </ul>
        </section>
    )
}