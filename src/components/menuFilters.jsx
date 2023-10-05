/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { CaretDownIcon, ArrowDownIcon, ArrowUpIcon, CheckIcon, CheckSmallIcon } from "./icons.jsx";
import { flujos } from "../mocks/flujos.json";

import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from "../hooks/ClickAway.jsx";

export function MenuFilters({defaultTheme}) {
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const [openFilter, sectionFilter] = useState(false);
    const chkFilter = useId();
    let width = 0;

    filters.flujo === 0 ?  width =  340: width = 365;

    const menuAppear = useSpring({        
        opacity:1,
        height: `${openFilter ? width : 0}` + 'px',        
    });
    
    
    const handleSetFlujos = (flujo) => {         
        setFilters(prevState => ({
            ...prevState, 
            flujo: flujo,            
        }))
        setRequest(null)
        if(flujo === 0 && filters.filter===4)
            setFilters(prevState => ({
                ...prevState, 
                filter: 1
        }))        
        sectionFilter(false)
    }
    const handleSetFiltros = (filtro) => {         
        setFilters(prevState => ({
            ...prevState, 
            filter: filtro
        }))
        sectionFilter(false)
    }
    const handleSetOrder = (orderDes) => {         
        setFilters(prevState => ({
            ...prevState, 
            orderDes: orderDes
        }))
        sectionFilter(false)
    }

    function desOrder(orderDes){        
        if(filters.filter===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filter===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        if(filters.filter===2 && orderDes){
            return 'Número mayor en la parte superior'
        }
        if(filters.filter===2 && !orderDes){
            return 'Número mayor en la parte inferior'
        }

        if(filters.filter===3 && orderDes){
            return 'Más atrasado en la parte superior'
        }
        if(filters.filter===3 && !orderDes){
            return 'Más atrasado en la parte inferior'
        }

        if(filters.filter===4 && orderDes){
            return 'Paso más alto en la parte superior'
        }
        if(filters.filter===4 && !orderDes){
            return 'Paso más alto en la parte inferior'
        }
        return 'Sin orden'
    }
        
    const { ref } = ClickAway(sectionFilter);
    const MenuFilter = () => {        
        return (                   
            <animated.div style={menuAppear} className={` absolute z-40 dark:bg-[#323130] bg-[#ffffff] top-[25px] py-0 right-8 w-72 h-fit overflow-hidden`}>
                <div className="h-full border dark:border-[#8a8886] border-[#e1dfdd]">
                    <ul className="border-b pb-2 dark:border-[#484644] border-[#e1dfdd]">
                        <li className="px-6 py-2 text-xs font-semibold truncate">Filtrar</li>
                            <ul>                                
                                {
                                    flujos.map((item) =>
                                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} onClick={() => handleSetFlujos(item.id)}><span className={`${filters.flujo===item.id ? 'visible' : 'hidden'} absolute left-5 top-1`}><CheckSmallIcon /></span>{item.description}</li>
                                    )
                                }
                            </ul>
                    </ul>
                    <ul className="border-b pb-2 dark:border-[#484644] border-[#e1dfdd]">
                        <li className="px-6 py-2 text-xs font-semibold truncate">Organizar por</li>
                            <ul>                            
                                {
                                    flujos.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} onClick={() => handleSetFiltros(item.id)}><span className={`${filters.filter===item.id ? 'visible' : 'hidden'} absolute left-5 top-0 text-green-500`}><CheckIcon /></span>{item.description}</li>
                                    )
                                }
                            </ul>
                    </ul> 
                    <ul className="">
                        <li className="px-6 py-2 text-xs font-semibold truncate">Ordenar</li>
                            <ul>                                                            
                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={'o1'} onClick={() => handleSetOrder(true)}><span className={`${filters.orderDes ? 'visible' : 'hidden'} absolute left-5 top-1`}><CheckSmallIcon /></span>{desOrder(true)}</li>

                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={'o2'} onClick={() => handleSetOrder(false)}><span className={`${!filters.orderDes ? 'visible' : 'hidden'} absolute left-5 top-1`}><CheckSmallIcon /></span>{desOrder(false)}</li>                                
                            </ul>
                    </ul>
                </div>
            </animated.div>         
        )
    }
    
    return (
        <div className="relative flex align-middle justify-end z-50 pb-0" ref={ref}>
            <div className="hover:bg-[#f0f0f0] dark:hover:bg-[#444444] mb-[4px] px-2 py-1 z-50">
                <div className="relative w-full flex z-50">
                    <label htmlFor={chkFilter} className={`${defaultTheme.txtc} cursor-pointer text-xs flex truncate`}>
                        {
                            flujos.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                        }
                        <span className="pl-1 pt-1">
                            <CaretDownIcon />
                        </span>                     
                    </label>                              
                    <input type="checkbox" id={chkFilter} className="hidden" onClick={() => sectionFilter((cur) => !cur)} />
                </div>                
            </div>            
            <MenuFilter />            
            <div className="pl-1 flex items-center mb-1">
                <span className="cursor-pointer dark:hover:bg-[#444444] hover:bg-[#f0f0f0] p-2 pt-[6px] pb-[6px]" onClick={() => handleSetOrder(!filters.orderDes)}>
                    {filters.orderDes ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </span>
            </div>
        </div>
    )
}