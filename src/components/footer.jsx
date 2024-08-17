/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { BlockIcon, CheckIcon, QuestionIcon, WarningIcon } from "../utils/icons.jsx";
import { useSpring, animated } from "@react-spring/web";
import * as menu from "../mocks/treeMenu.json"
import EncontrarDescripcionPorId from "./main/menu/EncontrarDescripcionPorId.jsx";

export default function Footer() {    
    const [clickPorVencer, setClickPorVencer] = useState(false);
    const [clickVencidos, setClickVencidos] = useState(false);
    const [clickSinTomar, setClickSinTomar] = useState(false);

    const { filters } = useFilters()

    const porVencerApper = useSpring({
        opacity: clickPorVencer ? 1 : 0,
        width: `${clickPorVencer ? 195 : 0}` + 'px',    
    });

    const regHabilitados = useSpring({
        opacity: clickPorVencer ? 1 : 0,
        width: `${clickPorVencer ? 160 : 0}` + 'px',    
    });

    const regBloqueados = useSpring({
        opacity: clickVencidos ? 1 : 0,
        width: `${clickVencidos ? 165 : 0}` + 'px',    
    });

    const vencidosApper = useSpring({
        opacity: clickVencidos ? 1 : 0,
        width: `${clickVencidos ? 185 : 0}` + 'px',    
    });

    const sintomarApper = useSpring({
        opacity: clickSinTomar ? 1 : 0,
        width: `${clickSinTomar ? 185 : 0}` + 'px',    
    });

    function handleClickPorVencer(){
        setClickPorVencer(!clickPorVencer)

        setClickVencidos(false)
        setClickSinTomar(false)
    }
    function handleClickVencidos(){
        setClickVencidos(!clickVencidos)

        setClickPorVencer(false)
        setClickSinTomar(false)
    }

    function handleClickSinTomar(){
        setClickSinTomar(!clickSinTomar)

        setClickVencidos(false)
        setClickPorVencer(false)
    }        
    let tipoABuscar = ''    
    
    filters.itemIdSelected.charAt(0) === "b" ? tipoABuscar = "bandejas" :
    filters.itemIdSelected.charAt(0) === "r" ? tipoABuscar = "reportes" : 
    filters.itemIdSelected.charAt(0) === "m" ? tipoABuscar = "mantenedores" :
    filters.itemIdSelected.charAt(0) === "j" ? tipoABuscar = "mensajes" : tipoABuscar = "bandejas" 
    
    let obj


    if(tipoABuscar === "bandejas" || tipoABuscar === "reportes"){
        obj = menu.flujos.filter(item => parseInt(item.id) === filters.flujo)[0][tipoABuscar][0]
    }else{
        obj = menu[tipoABuscar][0]
    }

    const descripcion = EncontrarDescripcionPorId(filters.itemIdSelected, obj).description;

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }   
    return (
        <footer className='dark:bg-[#323130] bg-[#f3f2f1] w-screen h-[25px] transition-color delay-75 flex items-center p-3 space-x-2 text-xs absolute bottom-0 z-20' onDragOver={handleNotDragOver}>
            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">{descripcion !== null ? descripcion : 'Sin menú'}</span>
            {
                tipoABuscar === "bandejas" && filters.itemIdSelected.length > 1 ? 
                    <>{                        
                        filters.itemIdSelected.slice(0,2) !== 'ba' &&
                        <>
                            <div className="dark:text-orange-300 text-orange-400 flex z-20">
                                <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickPorVencer()}>
                                    <WarningIcon />
                                </span>                
                                <animated.div style={porVencerApper} className='overflow-hidden pt-[1px]'>
                                    <span className="z-10 truncate pt-1">Total de requerimientos por vencer :</span> 
                                </animated.div>                           
                                <span className="pt-[1px]">{filters.totalPorVencer}</span>  
                            </div>                    
                            <div className="text-red-500 flex z-20">
                                <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickVencidos()}>
                                    <WarningIcon />
                                </span>                
                                <animated.div style={vencidosApper} className='overflow-hidden pt-[1px]'>
                                    <span className="z-10 truncate">Total de requerimientos vencidos :</span> 
                                </animated.div>                           
                                <span className="pt-[1px]">{filters.totalVencidos}</span>  
                            </div>
                        </>
                    }{
                        filters.itemIdSelected.slice(0,2) !== 'bn' && filters.itemIdSelected.slice(0,2) !== 'ba' &&
                            <div className="text-sky-500 flex z-20">
                                <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickSinTomar()}>
                                    <QuestionIcon />
                                </span>
                                    <animated.div style={sintomarApper} className='overflow-hidden pt-[1px]'>
                                        <span className="z-10 truncate pt-1">Total de requerimientos sin tomar :</span> 
                                    </animated.div>
                                
                                <span className="pt-[1px]">{filters.totalSintomar}</span>  
                            </div>
                        }
                        <div>
                            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>
                            <span className="text-green-500">{filters.totalRequerimientos}</span>                
                        </div> 
                    </>
                    : 
                        filters.itemIdSelected === 'm' || filters.itemIdSelected === 'j' ? (
                            <div>
                                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>
                                <span className="text-green-500">{obj.children.length}</span>                
                            </div>
                        ) : 
                            filters.itemIdSelected.charAt(0) === "m" || filters.itemIdSelected.charAt(0) === "j" ? (                            
                            <>
                                <div className="dark:text-green-300 text-green-400 flex z-20">
                                    <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickPorVencer()}>
                                        <CheckIcon styles={"w-3 h-3"}/>
                                    </span>                
                                    <animated.div style={regHabilitados} className='overflow-hidden pt-[1px]'>
                                        <span className="z-10 truncate pt-1">Total de registros habilitados:</span> 
                                    </animated.div>                           
                                    <span className="pt-[1px]">{filters.totalPorVencer}</span>  
                                </div>

                                <div className="text-red-500 flex z-20">
                                    <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickVencidos()}>
                                        <BlockIcon styles={"w-3 h-3"} />
                                    </span>                
                                    <animated.div style={regBloqueados} className='overflow-hidden pt-[1px]'>
                                        <span className="z-10 truncate">Total de registros bloqueados:</span> 
                                    </animated.div>                           
                                    <span className="pt-[1px]">{filters.totalVencidos}</span>  
                                </div>

                                <div>
                                    <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>
                                    <span className="text-blue-500">{filters.totalRequerimientos}</span>                
                                </div> 
                            </>
                        ) : (
                            <div>
                                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>
                                <span className="text-green-500">{filters.itemIdSelected === "r" || filters.itemIdSelected === "b" ? obj.children.length : obj.children.filter((item) => item === filters.itemIdSelected)[0]?.children?.length || 0}</span>                
                            </div>
                        )
                    
                }
        </footer>
    )
}