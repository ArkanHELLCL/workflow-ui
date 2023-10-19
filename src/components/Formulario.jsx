/* eslint-disable react/prop-types */
import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';
import { Constants } from "../constants/const.jsx";
import { ButtonIcon } from './icons';
import { useEffect, useId, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";

const { REQ_Adjuntos } = formulario;
const { FOR_Botones } = formulario;
const { FOR_Campos } = formulario;

const Buttons = ({idGroups}) => {
    const [postitionTo, setPositionTo] = useState(0)
    let corr = 0;
    let keygrp = '';

    useEffect(()=>{
        const buttons = document.getElementById(idGroups)        
        const posButtons = buttons?.getBoundingClientRect()
        setPositionTo(posButtons?.x)        
    })

    
    const buttonsAnimation = useSpring({
        delay: 100,
        opacity: 0,
        position: 'absolute',        
        from: {
            transform: `translateX(${postitionTo*2}px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });
    
    return(
        <div className='flex items-center gap-3 pb-2' id={idGroups}>
        {
            grupos.map(grp => {
                corr = corr+1;
                keygrp = 'btnGrp-' + corr;
                return (
                    <animated.div key={keygrp} className='flex' style={buttonsAnimation} id={keygrp}>
                    {
                        grp.map(btns =>
                            <button key={btns[0].id} className='h-9 w-auto dark:bg-[#444444] border dark:border-[#666666] bordfer-[#b8b5b2] flex items-center pr-1 pl-2 border-r-0 last:border-r' title={btns[0].nombre}>
                                <ButtonIcon typeButton={btns[0].id} styles='w-5 h-5'strokeWidth='1.3'/>{
                                    btns[0].descripcion &&
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>{btns[0].descripcion}</span>
                                }                                            
                            </button>
                        )
                    }
                    </animated.div>
                )
            })
                
        }
        </div>
    )
}

const fecha = (date, dias) => {
    const newDate = new Date(date)
    return dias[newDate.getDay()] + ' ' + newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes()        
} 

const grupos = FOR_Botones.map(grupo => grupo)

export function Formulario(){
    const { request } = useRequest()
    const { dias } = Constants()
    const idForm = useId()
    const idGroups = useId()   
       
    return(
        <>
        {request &&
            <div className='pl-4' id={idForm}>
                <header className='w-full h-auto'>
                    <div className='flex justify-between relative'>
                        <div>
                            <h1 className='text-lg truncate max-w-[1170px]'>{request?.REQ_Descripcion}</h1>
                            <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.FLU_Descripcion}</strong></h2>
                            <h2 className='text-base font-light leading-tight'>Acción requerida: <strong className='text-green-600'>{request?.ESR_AccionFlujoDatos}</strong></h2>                            
                        </div>
                        <div className='grid text-right leading-tight absolute right-2 top-8'>
                            <Buttons idGroups={idGroups}/>
                            <span className='text-[11px] leading-tight'>{fecha(request?.DRE_FechaEdit, dias)}</span>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='pt-3 pl-2'>
                                <img
                                    className='w-14 h-14 rounded-full' 
                                    src = {formulario.IdEditor_Foto} />
                            </div>
                            <div className='grid'>
                                <span className='text-sm font-light leading-tight'>Solicitado por:</span>
                                <span className='text-base font-light leading-tight'>{request?.DRE_UsuarioEditAnt}</span>
                                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.ESRAnterior_Descripcion}</strong></span>
                            </div>
                        </div>                        
                    </div>
                </header>
            </div>
        }
        </>
    )
}