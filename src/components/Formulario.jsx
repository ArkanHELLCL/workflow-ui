/* eslint-disable react/prop-types */
import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';
import { Constants } from "../constants/const.jsx";
import { ButtonIcon, CloseIcon, DeleteFileIcon, OpenFolderIcon, PrinterIcon, SaveAllIcon, SaveAsIcon, TypeDoc } from './icons';
import { useEffect, useId, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from '../hooks/ClickAway';
import { set } from 'lodash';

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
                            <button key={btns.id} className='h-9 w-auto dark:bg-[#444444] border dark:border-[#666666] bordfer-[#b8b5b2] flex items-center pr-1 pl-2 border-r-0 last:border-r' title={btns.nombre}>
                                <ButtonIcon typeButton={btns.id} styles='w-5 h-5'strokeWidth='1.3'/>{
                                    btns.descripcion &&
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>{btns.descripcion}</span>
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

const MenuAdjuntos = ({open, setOpen, IdMenu, refMenu, selected}) => {
    const [pos, setPos] = useState(null)
    
    useEffect(() => {
        const posMenu = document.getElementById(IdMenu)?.getBoundingClientRect()
    
        const adjunto = document.getElementById(open.id)
        const posadjunto = adjunto?.getBoundingClientRect()
        const posX = posadjunto?.left + posadjunto?.width - posMenu?.width
        const posT = posadjunto?.top + posadjunto?.height    
        
        posX && !isNaN(posX) ?
        setPos({
            "left": posX + "px",
            "top": posT + "px",
            "opacity": "1",
            "zIndex": "50"
        }) : setPos(null)
    },[open, IdMenu])

    return( 
        <div 
            className={`fixed w-fit h-fit border dark:bg-[#323130] bg-[#ffffff] dark:border-[#8a8886] border-[#8a8886] overflow-hidden shadow opacity-0 -z-10 ${open.open ? '' : ''}`} 
            style={pos}
            id={IdMenu} 
            ref={refMenu}
            >
            <ul className='text-[11px]'>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce]'>
                    <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] border-[#e1dfdd] font-semibold'>Vista previa</span>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] flex relative'>
                    <span className="w-5 h-5 absolute top-2 left-2"><OpenFolderIcon /></span>                    
                    <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] font-semibold'>Abrir</span>                    
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative'>
                    <span className="w-5 h-5 absolute top-2 left-2 "><PrinterIcon /></span>
                    <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Impresion rápida</span>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#5f564c] flex relative'>
                    <span className="w-5 h-5 absolute top-2 left-2 text-sky-600"><SaveAsIcon /></span>
                    <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Guardar como</span>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative'>
                    <span className="w-5 h-5 absolute top-2 left-2 text-purple-600 dark:text-purple-700"><SaveAllIcon /></span>
                    <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] font-semibold'>Guardar todos los adjuntos...</span>                    
                </li>{
                    selected?.upload  &&
                        <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative'>
                        <span className="w-5 h-5 absolute top-2 left-2 text-red-600"><DeleteFileIcon /></span>
                        <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Quitar datos adjuntos</span>
                    </li>
                }
                                
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
        <div key={file.id} className='flex items-center relative' id={adjId}>
            <div className={`dark:border-[#474747] border-[#b9b9b9] p-1 dark:bg-[#363636] hover:bg-[#cde6f7] hover:cursor-pointer border-r-0 z-0 w-full flex border ${selected?.nombre === file.nombre ? 'bg-[#cde6f7] dark:bg-[#666666] dark:hover:bg-[#666666] dark:border-[#787878]':'dark:hover:bg-[#4a4a4a]'}`}
                onClick={() => HandleClickFile(file,adjId)}>
            {
                file.thumbail ?
                    <span>
                        <img src={file.thumbail} className='w-9 h-9' />
                    </span>
                :   
                <span className='w-9 h-9'>
                    <TypeDoc typeDoc={file.extension} />
                </span>
            }
            <div className='grid'>
                <span className='text-xs font-normal leading-tight w-fit px-2 truncate'>{file.nombre}.{file.extension}</span>
                <span className='text-xs font-normal leading-tight w-fit px-2'>Tamaño: {file.tamano}</span>
            </div>
            </div>
            <div className={`absolute h-full w-5 right-0 dark:bg-[#363636] border-[#b9b9b9] border dark:border-[#474747] hover:bg-[#cde6f7] z-20 border-l-0 items-center align-middle justify-center flex hover:cursor-pointer ${selected?.nombre === file.nombre ? 'bg-[#cde6f7] dark:bg-[#666666] dark:hover:bg-[#666666] dark:border-[#787878]':'dark:hover:bg-[#4a4a4a] bg-[#fdfdfd]'}`} 
                onClick={() => HandleClickMenu(file, adjId)}>
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
    const IdMenu = useId()
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState({open: false, id: ''})

    const [adjuntos, setAdjuntos] = useState([]);
    const [dropEnter, setDropEnter] = useState(false);
    //const [adjuntosData, setAdjuntosData] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        setDropEnter(false);
        const files = Array.from(event.dataTransfer.files);
        const validFiles = files.filter((file) => {
            const validExtensions = [".jpg", ".jpeg", ".png", ".gif",".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".txt",".zip",".rar"];
            const isValidExtension = validExtensions.some((ext) =>
            file.name.toLowerCase().endsWith(ext)
            );
            const isValidSize = file.size <= 10485760; // 10 MB
            return isValidExtension && isValidSize;
        });
        setAdjuntos((prevAdjuntos) => [...prevAdjuntos, ...validFiles]);        

        validFiles.map(adjunto => {
            const data = {
                id: adjunto?.name,
                nombre: adjunto?.name,
                extension: adjunto?.name.split('.').pop(),
                tamano: adjunto?.size,
                thumbail: null,               
                upload: true
            }
            REQ_Adjuntos.push(data)
        })
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    /*const handleAdjuntarClick = () => {
        document.getElementById("adjuntos-input").click();
    };*/

    const handleDragEnter = (event) => {
        event.preventDefault();
        setDropEnter(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDropEnter(false);
        //console.log('leave')
    };


    const handleAdjuntosChange = (event) => {
        const files = Array.from(event.target.files);
        setAdjuntos((prevAdjuntos) => [...prevAdjuntos, ...files]);
    };
    const { ref:refMenu } = ClickAway(setOpen);
    return(
        <>
        {request &&
        <>            
            <div 
                className='pl-4 h-full pt-[10px] w-full relative overflow-hidden flex flex-col' 
                id={idForm}
                onDragEnter={handleDragEnter}
                >
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
                    </div><MenuAdjuntos open={open} setOpen={setOpen} IdMenu={IdMenu} refMenu={refMenu} selected={selected}/>                                                                   
                </header>
                <div className={`flex-1 overflow-y-auto flex ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''} px-0 py-3`}>
                {
                    dropEnter ?
                    <div className=' dark:bg-[#071725] bg-stone-400 opacity-80 border border-dashed border-[#1f4568] hover:pointer-events-auto z-50 flex justify-center align-middle items-center flex-1'
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}                        
                        onDragLeave={handleDragLeave}
                        >
                        <div>
                            <span className='dark:text-[#2c87d2]'> Agregar adjuntos</span>
                        </div>
                    </div> :
                    <div>Campos</div>
                }
                    
                </div>
                <input
                    id="adjuntos-input"
                    type="file"
                    multiple
                    onChange={handleAdjuntosChange}
                    className='hidden'
                />
            </div>
            </>
        }
        </>
    )
}