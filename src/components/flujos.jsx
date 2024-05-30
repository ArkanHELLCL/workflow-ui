/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { flujos } from "../mocks/flujos.json";
import { CaretDownIcon, CheckSmallIcon } from "./icons";
import { useSpring, animated } from "@react-spring/web";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

function LstFlujos(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const chkFlujos = useId();
    const [openFlujos, setOpenFlujos] = useState(false);

    const handleSetFlujos = (flujo) => {         
        setFilters(prevState => ({
            ...prevState, 
            flujo: flujo,
            loading: flujo !== filters.flujo ? true : false
        }))
        setRequest(null)
        setOpenFlujos(false)
        if(flujo === 0 && filters.filter===4)
            setFilters(prevState => ({
                ...prevState, 
                filter: 1,
                loading: filters.filter !== 1 ? true : false
        }))
    }

    const menuAppear = useSpring({             
        opacity:1,
        height: `${openFlujos ? 115 : 0}` + 'px',
        config: { duration: 100 }
    });

    const handleClickAway = () => {
        setOpenFlujos(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="relative">
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
                <animated.div style={menuAppear} className={`absolute z-40 top-[31px] px-[1px]  left-[45px]  h-fit overflow-hidden`}>
                    <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">                    
                        {
                            flujos.map((item) =>
                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} onClick={() => handleSetFlujos(item.id)}><span className={`${filters.flujo===item.id ? 'visible' : 'hidden'} absolute left-5 top-1`}><CheckSmallIcon /></span>{item.description}</li>
                            )
                        }
                    </ul>
                </animated.div>
            </div>
        </ClickAwayListener>
    )
}

export default function Flujos(){
    return (        
        <LstFlujos />        
    )     
}