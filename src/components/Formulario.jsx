/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';
import { Constants } from "../constants/const.jsx";
import { ArrowLeftIcon, ButtonIcon, CloseIcon, DeleteFileIcon, OpenFolderIcon, PrinterIcon, SaveAllIcon, SaveAsIcon, TypeDoc } from './icons';
import { useEffect, useId, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from '../hooks/ClickAway';
import { DocPreview } from './DocPreview.jsx';
import { InputTypes } from './InputTypes.jsx';

const Buttons = ({grupos, idGroups, frmname}) => {
    //console.log("btns")
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
            grupos?.map(grp => {
                corr = corr+1;
                keygrp = 'btnGrp-' + corr;
                return (
                    <animated.div key={keygrp} className='flex' style={buttonsAnimation} id={keygrp}>
                    {
                        grp[0].botones.map(btns =>
                            <button 
                                key={btns.id} 
                                className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                title={btns.nombre}
                                type={btns.type}
                                form={frmname}>
                                    <ButtonIcon typeButton={btns.id} styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>{
                                        btns.nombre &&
                                        <span className='text-xs font-normal leading-tight w-fit px-2'>{btns.nombre}</span>
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

const MenuAdjuntos = ({open, setOpen, IdMenu, refMenu, handleEliminarClick, setPreview, setSelected, selectedMenu}) => {
    //console.log("MenuAdjuntos",selectedMenu)
    const [pos, setPos] = useState(null)
    useEffect(() => {
        const posMenu = document.getElementById(IdMenu)?.getBoundingClientRect()
        const adjunto = open?.id ? document.getElementById(open.id) : null
        const posadjunto = adjunto?.getBoundingClientRect()
        const posX = posadjunto?.left + posadjunto?.width - posMenu?.width
        const posT = posadjunto?.top + posadjunto?.height    
        posX && !isNaN(posX) ?
        setPos({
            "left": posX + "px",
            "top": posT + "px",
            "opacity": "1",
            "zIndex": "100"
        }) : setPos(null)
    },[])

    const handleDeleteFile = (file) => {        
        handleEliminarClick(file)
        setOpen({open: false, id: ''})

        //mensaje de eliminacion de adjunto
    }

    const handlePreview = () => {        
        setSelected(selectedMenu)        
        setPreview(true)
        setOpen({open: false, id: ''})
    }

    return( 
        <div 
            className={`fixed w-fit h-fit border dark:bg-[#323130] bg-[#ffffff] dark:border-[#8a8886] border-[#8a8886] overflow-hidden shadow opacity-0 -z-10 mnuadj ${open.open ? '' : ''}`} 
            style={pos}
            id={IdMenu} 
            ref={refMenu}
            >
            <ul className='text-[11px]' id="mnuAdjunto">
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] cursor-pointer'>
                    <div onClick={() => handlePreview()}>
                        <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] border-[#e1dfdd] font-semibold' >Vista previa</span>
                    </div>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] flex relative cursor-pointer'>
                    <span className="absolute top-2 left-3"><OpenFolderIcon styles='w-[18px] h-[18px]'/></span>                    
                    <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] font-semibold'>Abrir</span>                    
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative cursor-pointer'>
                    <span className="absolute top-2 left-2"><PrinterIcon styles="w-[24px] h-[24px]" strokeWidth='2.75'/></span>
                    <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Impresion rápida</span>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#5f564c] flex relative cursor-pointer'>
                    <span className="absolute top-2 left-3"><SaveAsIcon /></span>
                    <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Guardar como</span>
                </li>
                <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative cursor-pointer'>
                    <span className="w-6 h-6 absolute top-2 left-2"><SaveAllIcon styles='h-4 w-4' strokeWidth={1.75}/></span>
                    <span className='ml-9 block w-full py-2 border border-t-0 border-l-0 border-r-0 pr-4 dark:border-[#484644] font-semibold'>Guardar todos los adjuntos...</span>                    
                </li>{
                    selectedMenu?.upload  &&
                        <li className='dark:hover:bg-[#484644] hover:bg-[#d2d0ce] relative cursor-pointer' onClick={()=>handleDeleteFile(selectedMenu)}>
                        <span className="w-5 h-5 absolute top-2 left-2 text-red-600"><DeleteFileIcon styles='h-5 w-5' strokeWidth={2} /></span>
                        <span className='ml-9 block w-full py-2 pr-4 font-semibold'>Quitar datos adjuntos</span>
                    </li>
                }
            </ul>
        </div>        
    )
}

const Adjuntos = ({file, selected, setSelected, setPreview, setAdjuntos, open, setOpen}) => {
    
    const IdMenu = useId()
    const [selectedMenu, setSelectedMenu] = useState(null)
    const { ref:refMenu } = ClickAway(setOpen);

    const HandleClickMenu = (file, id) => {
        setSelectedMenu(file)        
        //if(open.open && open.id === id) return setOpen({open: false, id: ''})
        setOpen({open: true, id: id})        
    }
    
    const HandleClickFile = (file) =>{
        setSelected(file)
        setSelectedMenu(file)
        setOpen({open: false, id: ''})
        setPreview(true)        
    }

    const handleEliminarClick = (adjunto) => {
        setAdjuntos((prevAdjuntos) =>
          prevAdjuntos.filter((a) => a !== adjunto)
        );
    };
    //console.log(open)
    return(
        <>
        <div key={file.id} className='flex items-center relative overflow-hidden z-50 elmadj' id={file.id}>
            <div className={`dark:border-[#5f5f5f] border-[#b9b9b9] p-1 dark:bg-[#363636] hover:bg-[#cde6f7] hover:cursor-pointer border-r-0 z-0 w-full h-full flex border hover:dark:border-[#a8a8a8] ${selected?.nombre === file.nombre ? 'bg-[#b1d6f0] dark:bg-[#666666] dark:hover:bg-[#4a4a4a] dark:border-[#a8a8a8]':'dark:hover:bg-[#4a4a4a]'} peer/adjunto`}
            onClick={() => HandleClickFile(file)}>
                {
                    file.thumbail ?
                        <span className='min-w-[2.25rem] min-h-[2.25rem] flex items-center'>
                            <img src={file.thumbail} className='h-9 w-9' />
                        </span>
                    :   
                    <span className='w-9 h-9'>
                        <TypeDoc typeDoc={file.extension} />
                    </span>
                }
                <div className='grid'>
                    <span className='text-xs font-normal leading-tight w-auto px-2 truncate'>{file.nombre}</span>
                    <span className='text-xs font-normal leading-tight w-fit px-2'>Tamaño: {file.tamano}</span>
                </div>
            </div>
            <div className={`absolute h-full w-5 right-0 dark:bg-[#363636] border-[#b9b9b9] border dark:border-[#5f5f5f] hover:bg-[#cde6f7] z-20 border-l-0 items-center align-middle justify-center flex hover:cursor-pointer peer-hover/adjunto:dark:border-[#a8a8a8] ${selected?.nombre === file.nombre ? 'bg-[#b1d6f0] dark:bg-[#666666] dark:hover:bg-[#666666] dark:border-[#a8a8a8]':'dark:hover:bg-[#4a4a4a] bg-[#fdfdfd]'}`} 
                onClick={() => HandleClickMenu(file, file.id)}>
                <CloseIcon />
            </div>           
        </div>{
                open.open && file.id === open.id && (
                    <MenuAdjuntos open={open} setOpen={setOpen} IdMenu={IdMenu} refMenu={refMenu} selected={selected} handleEliminarClick={handleEliminarClick} setPreview={setPreview} setSelected={setSelected} selectedMenu={selectedMenu}/>
                )}
        </>
    )
}

export function Formulario(){
    const { request, setRequest } = useRequest()
    const { dias } = Constants()
    const idForm = useId()
    const idGroups = useId()
    
    const [selected, setSelected] = useState(null)    

    const [form, setForm] = useState(formulario)
    const [adjuntos, setAdjuntos] = useState([]);
    //const [botones, setBotones] = useState(null);
    const [campos, setCampos] = useState(null);
    const [grupos, setGrupos] = useState(null);

    const [dropEnter, setDropEnter] = useState(false);

    const [preview, setPreview] = useState(false)    
    


    useEffect(() => {
        const { REQ_Adjuntos } = formulario;
        const { FOR_Botones } = formulario;
        const { FOR_Campos } = formulario;

        setForm(formulario)
        setAdjuntos(REQ_Adjuntos)
        //setBotones(FOR_Botones)
        setCampos(FOR_Campos)
        setGrupos(FOR_Botones.map(grupo => grupo))
    },[formulario,request])

    useEffect(() => {
        selected ?
            setRequest({
                ...request,
                "adjuntos": adjuntos,
                "selected": selected,
            }) :
        setRequest(null)
    },[selected])    

    const handleDrop = (event) => {
        event.preventDefault();
        setDropEnter(false);
        const files = Array.from(event.dataTransfer.files);
        const validFiles = files.filter((file) => {
            const validExtensions = [".jpg", ".jpeg", ".png", ".gif",".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".txt","webp"];
            const isValidExtension = validExtensions.some((ext) =>
                file.name.toLowerCase().endsWith(ext)
            );
            const isValidSize = file.size <= 10485760; // 10 MB
            return isValidExtension && isValidSize;
        });

        const remapValidFiles = validFiles.map((adjunto, index) => {            
            const data = {
                id: adjunto?.name,
                nombre: adjunto?.name,
                extension: adjunto?.name?.split('.').pop(),
                tamano: adjunto?.size,
                thumbail:  event.dataTransfer.files[index].type.includes('image') ? URL.createObjectURL(event.dataTransfer.files[index]) : null,
                url: URL.createObjectURL(event.dataTransfer.files[index]),
                upload: true
            }
            return data
        })

        setAdjuntos((prevAdjuntos) => {
            const newAdjuntos = [...prevAdjuntos, ...remapValidFiles];
            const finalAdjuntos = Array.from(new Set(newAdjuntos)); // Eliminar duplicados        
            return finalAdjuntos
        });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
/*
    const handleAdjuntarClick = () => {
        document.getElementById("adjuntos-input").click();
    };
*/
    const handleDragEnter = (event) => {
        event.preventDefault();
        setDropEnter(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDropEnter(false);
        //console.log('leave')
    };
/*
    const handleAdjuntosChange = (event) => {
        //const files = Array.from(event.target.files);
        //setAdjuntos((prevAdjuntos) => [...prevAdjuntos, ...files]);
    };
*/    
/*
    const handleDragEnd = (event) => {
        // Eliminar el adjunto del dataTransfer
        //event.dataTransfer.clearData();
    };
*/
    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }

    /*const handleClickInput = (event) => {
        console.log("si",event.files)
    }*/

    const HeaderForm = ({request}) => {
        const [open, setOpen] = useState({open: false, id: ''})
        return (
            <header className='w-full h-auto relative z-20' 
                onDragOver = {handleNotDragOver}>
                {
                    !preview &&
                    <>
                        <div className='flex justify-between relative w-full'>
                            <div className='w-full h-full grid'>
                                <h1 className='text-lg truncate w-auto pr-2'>{request?.request?.REQ_Descripcion}</h1>
                                <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>
                                <h2 className='text-base font-light leading-tight'>Acción requerida: <strong className='text-green-600'>{request?.request?.ESR_AccionFlujoDatos}</strong></h2>                            
                            </div>
                            <div className='grid text-right leading-tight absolute right-2 top-8'>
                                <Buttons idGroups={idGroups} grupos={grupos} frmname={formulario.name}/>
                                <span className='text-[11px] leading-tight'>{fecha(request?.request?.DRE_FechaEdit, dias)}</span>
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
                                    <span className='text-base font-light leading-tight'>De : {request?.request?.DRE_UsuarioEditAnt}</span>
                                    <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.request?.ESRAnterior_Descripcion}</strong></span>
                                </div>
                            </div>                        
                        </div>
                    </>
                }{
                    preview &&
                        <div className='py-1 px-2 w-[150px] mb-1 flex gap-1 items-center cursor-pointer hover:dark:bg-[#505050] hover:bg-[#e6f2fa]' onClick={() => setPreview(false)}>
                            <ArrowLeftIcon />
                            <span className='text-[0.775rem]'>Volver al formulario</span>        
                        </div>
                }
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-1 max-h-28 overflow-y-auto py-0 pr-2 relative z-10'>
                {
                    adjuntos.map((file, index) => {
                        return (                        
                            <Adjuntos file={file} key={index} selected={selected} setSelected={setSelected} setPreview={setPreview} setAdjuntos={setAdjuntos} open={open} setOpen={setOpen}/>
                        )}
                    )
                }                                      
                </div>
            </header>            
        )
    }

    const DataForm = ({campos}) =>{
        return(
            <section className={`flex-1 overflow-y-auto flex ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''} px-0 py-3`} onDragEnter={handleDragEnter}>
            {
                dropEnter ?
                <div className=' dark:bg-[#071725] bg-[#ebf3fc] opacity-80 border border-dashed dark:border-[#1f4568] border-[#478ecc] hover:pointer-events-auto z-50 flex justify-center align-middle items-center flex-1'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}                        
                    onDragLeave={handleDragLeave}
                    //onDragEnd={handleDragEnd}
                    >
                    <div>
                        <span className='text-[#2c87d2]'> Agregar adjuntos</span>
                    </div>
                </div> :
                    <InputTypes name={formulario.name} campos={campos} />
            }                                                        
            </section>
        )
    }
    
    return(
        <>
            {request?.request?.VFO_Id === form?.VFO_Id &&
                <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`} id={idForm}>
                    <HeaderForm request={request}/>{
                        !preview &&
                            <DataForm campos={campos}/>
                    }{
                        preview && selected!==null &&
                            <DocPreview selected={selected} />
                    }
                </div>
            }
            {request?.request?.VFO_Id !== form?.VFO_Id &&
                <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`} id={idForm}>
                    <div className='w-full h-full flex justify-center align-middle items-center'>
                        <span className='text-[#2c87d2] text-2xl'>No hay datos para mostrar{`${request?.request?.VRE_Id ? ' - R: ' + request?.request?.VRE_Id : ''}`}</span>
                    </div>
                </div>
            }
        </>
    )
}