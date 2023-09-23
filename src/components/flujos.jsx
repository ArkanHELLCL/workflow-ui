/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { flujos } from "../mocks/flujos.json";
import { CaretDownIcon, CheckSmallIcon } from "./icons";
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from "../hooks/ClickAway.jsx";

function LstFlujos(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const chkFlujos = useId();
    const [openFlujos, setOpenFlujos] = useState(false);

    const handleSetFlujos = (flujo) => {         
        setFilters(prevState => ({
            ...prevState, 
            flujo: flujo,            
        }))
        setRequest(null)
        setOpenFlujos(false)
        if(flujo === 0 && filters.filter===4)
            setFilters(prevState => ({
                ...prevState, 
                filter: 1
        }))
    }

    const menuAppear = useSpring({             
        opacity:1,
        height: `${openFlujos ? 115 : 0}` + 'px',        
    });

    const { ref } = ClickAway(()=>setOpenFlujos(false));

    return (
            <div className="relative" ref={ref}>
                <div className="w-auto flex z-50 truncate">
                    <span>Flujo : </span>
                    <label htmlFor={chkFlujos} className='hover:border-sky-600 text-sky-600 border-b-2 ml-2 flex cursor-pointer border-transparent'>{
                            flujos.filter(item => item.id === filters.flujo)[0].name
                        }
                        <span className="pl-1 pt-3">
                            <CaretDownIcon />
                        </span>
                    </label>                         
                    <input type="checkbox" id={chkFlujos} className="hidden" onClick={() => setOpenFlujos(!openFlujos)} />
                </div>
                <ul className={`${openFlujos ? 'border' : ''} absolute z-40 dark:bg-[#323130] bg-[#ffffff] top-[31px] px-[1px] dark:border-[#484644] left-[45px] border-[#e1dfdd] h-fit overflow-hidden`}>
                    <animated.div style={menuAppear} >
                        <ul className="py-2">                    
                            {
                                flujos.map((item) =>
                                    <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} onClick={() => handleSetFlujos(item.id)}><span className={`${filters.flujo===item.id ? 'visible' : 'hidden'} absolute left-5 top-1`}><CheckSmallIcon /></span>{item.description}</li>
                                )
                            }                        
                        </ul>
                    </animated.div>
                </ul>
            </div>
            )
}

export function Flujos(){
    return (
        <>
            <LstFlujos />
        </>
    )
            
}