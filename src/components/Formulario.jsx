/* eslint-disable react/prop-types */
import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';
import { Constants } from "../constants/const.jsx";
import { ButtonIcon, CloseIcon, TypeDoc } from './icons';
import { useEffect, useId, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from '../hooks/ClickAway';

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
    },[idGroups])

    
    const buttonsAnimation = useSpring({
        delay: 10,
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

const MenuAdjuntos = ({open, setOpen}) => {
    const adjunto = document.getElementById(open.id)
    const posadjunto = adjunto?.getBoundingClientRect()
    const posX = posadjunto?.left + 20
    const posT = posadjunto?.top + posadjunto?.height
    const pos = {
        "left": posX + "px",
        "top": posT + "px"
    }
    return(
        <div className='fixed w-fit h-fit py-1 pl-8 border z-40' style={pos}>
            <ul>
                <li className='border border-t-0 border-l-0 border-r-0 pr-0'>{open.id} - Vista previa</li>                
                <li>Abrir</li>
                <li>Descargar, menu mas largo para calcular la diferencia</li>
            </ul>
        </div>
    )
}

const Adjuntos = ({file, selected, setSelected, open, setOpen}) => {
    const adjId = useId()

    const HandleClickMenu = (file, id) => {
        setSelected(file)
        if(open.open && open.id === id) return setOpen({open: false, id: ''})
        setOpen({open: true, id: id})
    }
    
    const HandleClickFile = (file, id) =>{
        setSelected(file)        
        setOpen({open: false, id: ''})
    }
    return(        
        <div key={file[0].id} className='flex items-center relative' id={adjId}>
            <div className={`dark:border-[#474747] border-[#b9b9b9] p-1 dark:bg-[#363636] hover:bg-[#cde6f7] hover:cursor-pointer border-r-0 z-0 w-full flex border ${selected?.nombre === file[0].nombre ? 'bg-[#cde6f7] dark:bg-[#666666] dark:hover:bg-[#666666] dark:border-[#787878]':'dark:hover:bg-[#4a4a4a]'}`}
                onClick={() => HandleClickFile(file[0],adjId)}>
            {
                file[0].thumbail ?
                    <span>
                        <img src={file[0].thumbail} className='w-9 h-9' />
                    </span>
                :   
                <span className='w-9 h-9'>
                    <TypeDoc typeDoc={file[0].extension} />
                </span>
            }
            <div className='grid'>
                <span className='text-xs font-normal leading-tight w-fit px-2 truncate'>{file[0].nombre}.{file[0].extension}</span>
                <span className='text-xs font-normal leading-tight w-fit px-2'>Tamaño: {file[0].tamano}</span>
            </div>
            </div>
            <div className={`absolute h-full w-5 right-0 dark:bg-[#363636] border-[#b9b9b9] border dark:border-[#474747] hover:bg-[#cde6f7] z-20 border-l-0 items-center align-middle justify-center flex hover:cursor-pointer bg-[#fdfdfd] ${selected?.nombre === file[0].nombre ? 'bg-[#cde6f7] dark:bg-[#666666] dark:hover:bg-[#666666] dark:border-[#787878]':'dark:hover:bg-[#4a4a4a]'}`} 
                onClick={() => HandleClickMenu(file[0], adjId)}>
                <CloseIcon />
            </div>           
        </div>          
    )
}

export function Formulario(){
    const { request } = useRequest()
    const { dias } = Constants()
    const idForm = useId()
    const idGroups = useId()

    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState({open: false, id: ''})
       
    return(
        <>
        {request &&
            <div className='pl-4' id={idForm}>
                <header className='w-full h-auto relative'>
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
                                <span className='text-base font-light leading-tight'>De : {request?.DRE_UsuarioEditAnt}</span>
                                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.ESRAnterior_Descripcion}</strong></span>
                            </div>
                        </div>                        
                    </div>
                    <div className='grid grid-cols-3 gap-1 max-h-28 overflow-y-auto py-0 pr-2 relative z-10'>
                    {
                        REQ_Adjuntos.map((file, index) => {
                            return (                        
                                <Adjuntos file={file} key={index} selected={selected} setSelected={setSelected} open={open} setOpen={setOpen}/>
                            )}
                        )
                    }                        
                    </div>{
                        open.open &&
                        <MenuAdjuntos open={open} setOpen={setOpen}/>
                    }                    
                </header>
            </div>
        }
        </>
    )
}