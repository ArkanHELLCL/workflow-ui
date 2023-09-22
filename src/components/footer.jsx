/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { QuestionIcon, WarningIcon } from "./icons";
import { useSpring, animated } from "@react-spring/web";
import * as menu from "../mocks/menu.json"

export function Footer() {
    const [clickPorVencer, setClickPorVencer] = useState(false);
    const [clickVencidos, setClickVencidos] = useState(false);
    const [clickSinTomar, setClickSinTomar] = useState(false);

    const { filters } = useFilters()

    const porVencerApper = useSpring({
        opacity: clickPorVencer ? 1 : 0,
        width: `${clickPorVencer ? 195 : 0}` + 'px',    
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

    // Función para buscar la descripción a partir del id
    function buscarDescripcionPorId(tipo, idBuscar) {
        const elementos = menu[tipo] || [];
        const elementoEncontrado = elementos.find((elemento) => elemento.id === idBuscar);
        return elementoEncontrado ? elementoEncontrado.description : null;
    }
        
    let tipoABuscar = ''
    filters.itemIdSelected.charAt(0) === "b" ? tipoABuscar = "Bandejas" :
    filters.itemIdSelected.charAt(0) === "m" ? tipoABuscar = "Mantenedores" :
    filters.itemIdSelected.charAt(0) === "r" ? tipoABuscar = "Reportes" : tipoABuscar = "Bandejas"
        
    const descripcion = buscarDescripcionPorId(tipoABuscar, filters.itemIdSelected);
        
    return (
        <footer className='dark:bg-[#323130] bg-[#f3f2f1] w-screen h-[25px] transition-all flex items-center p-3 space-x-2 text-xs'>
            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">{descripcion !== null ? descripcion : 'Sin menú'}</span>
            {
                tipoABuscar === "Bandejas" ? 
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
                        <div className="text-sky-500 flex z-20">
                            <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickSinTomar()}>
                                <QuestionIcon />
                            </span>                
                            <animated.div style={sintomarApper} className='overflow-hidden pt-[1px]'>
                                <span className="z-10 truncate">Total de requerimientos sin tomar :</span> 
                            </animated.div>                           
                            <span className="pt-[1px]">{filters.totalSintomar}</span>  
                        </div>                        
                        <div>
                            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>
                            <span className="text-green-500">{filters.totalRequerimientos}</span>                
                        </div> 
                    </>
                    : null
                }
        </footer>
    )
}