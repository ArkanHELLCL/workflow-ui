/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, lazy, useEffect, useId, useState } from "react";
import { useRequest } from '../hooks/useRequest.jsx';
import { Constants } from "../constants/const.jsx";
import { ButtonIcon, DeleteFileIcon, OpenFolderIcon, PrinterIcon, SaveAllIcon, SaveAsIcon, TypeDoc } from './icons.jsx';
import { useSpring, animated } from "@react-spring/web";
import Loading from "./Loading.jsx";
import { formulario } from'../mocks/formulario.json'
import InputTypes from './InputTypes.jsx'
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist'

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListDivider from '@mui/joy/ListDivider';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ConfirmationDialog from './ConfirmationDialog.jsx'

const LazyDocPreview = lazy(() => import('./DocPreview.jsx'))

const Buttons = ({grupos, idGroups, frmname}) => {
    const [postitionTo, setPositionTo] = useState(0)
    const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":""})

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

    function  hanldeOnClick(event,btns){
        if(btns?.dialogo==='confirm'){
            setOpenDialog({
                titulo:btns?.titulo,
                mensaje:btns?.mensaje,
                id:btns.id,
                open:true,
                frmname:frmname,
                action:btns.action,
                type:btns.type
            })
        }
    }
    return(
        <> 
            <div className='flex items-center gap-3 pb-2' id={idGroups}>
            {
                grupos?.map(grp => {
                    corr = corr + 1;
                    keygrp = 'btnGrp-' + corr;
                    return (
                        <animated.div key={keygrp} className='flex' style={buttonsAnimation} id={keygrp}>
                        {
                            grp[0].botones.map(btns =>
                                <button 
                                    key={btns.id} 
                                    className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title={btns.nombre}
                                    //type={btns.type}
                                    //form={frmname}
                                    //formAction={btns.action}
                                    onClick={() => hanldeOnClick(event, btns)}>
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
            </div>{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }            
        </>
    )
}

const fecha = (date, dias) => {
    const newDate = new Date(date)
    return dias[newDate.getDay()] + ' ' + newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes()        
} 

const Adjuntos = ({file, selected, setSelected, setPreview, setAdjuntos}) => {    
    const HandleClickFile = (file) =>{
        setSelected(file)
        if(file.extension === 'docx' || file.extension === 'pptx' ||  file.extension === 'xlsx') return
        setPreview(true)        
    }

    const handleEliminarClick = (file) => {
        setAdjuntos((prevAdjuntos) =>
          prevAdjuntos.filter((a) => a !== file)
        );
    };    

    const handlePreview = (file) => {
        if(file.extension === 'docx' || file.extension === 'pptx' ||  file.extension === 'xlsx') return
        setSelected(file)        
        setPreview(true)
    }

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
                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] p-2 pt-[6px] pb-[6px]" !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 dark:!text-stone-100 !text-stone-500 !font-thin  h-full w-5 right-0 dark:!bg-[#363636] !border-[#b9b9b9] !border dark:!border-[#5f5f5f] hover:!bg-[#cde6f7] z-20 !border-l-0 !items-center !align-middle !justify-center flex peer-hover/adjunto:dark:!border-[#a8a8a8] ${selected?.nombre === file.nombre ? '!bg-[#b1d6f0] dark:!bg-[#666666] dark:hover:!bg-[#666666] dark:!border-[#a8a8a8]':'dark:hover:!bg-[#4a4a4a] !bg-[#fdfdfd]'}`}>
                    <KeyboardArrowDownIcon/>
                    </MenuButton>
                    <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min"> {
                        (file.extension !== 'docx' && file.extension !== 'pptx' &&  file.extension !== 'xlsx') &&       
                            <>                                                    
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => handlePreview(file)} >
                                    <ListItemDecorator></ListItemDecorator>Vista Previa                   
                                </MenuItem>
                                <ListDivider/>
                            </>
                        }
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('abrir ' + file.id)} >
                            <ListItemDecorator><OpenFolderIcon styles='w-[18px] h-[18px] !ml-0'/></ListItemDecorator>Abrir                  
                        </MenuItem>
                        <ListDivider className="!pl-2"/>
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Impresión rápida ' + file.id)} >
                            <ListItemDecorator><PrinterIcon styles="w-[24px] h-[24px] !-ml-1" strokeWidth='2.75'/></ListItemDecorator>Impresión rápida                  
                        </MenuItem>
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >
                            <ListItemDecorator><SaveAsIcon styles="!ml-5"/></ListItemDecorator>Guardar como                  
                        </MenuItem>
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >
                            <ListItemDecorator><SaveAllIcon styles='h-5 w-5 ml-2' strokeWidth={1.75}/></ListItemDecorator>Guardar todos los adjuntos                  
                        </MenuItem>{
                        file?.upload  &&
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={()=>handleEliminarClick(file)} >
                                <ListItemDecorator><DeleteFileIcon styles='h-5 w-5 text-red-600' strokeWidth={2} /></ListItemDecorator>Quitar todos los adjuntos                  
                            </MenuItem>
                        }
                    </Menu>   
                </Dropdown>
            </div>                
                  
        </>
    )
}

export default function Formulario(){
    const { request, setRequest } = useRequest()
    const { dias } = Constants()
    const idForm = useId()
    const idGroups = useId()
    
    const [selected, setSelected] = useState(null)

    const [ form ] = useState(formulario)
    const { REQ_Adjuntos } = formulario;
    const { FOR_Botones } = formulario;
    const { FOR_Campos } = formulario;   
    
    const [adjuntos, setAdjuntos] = useState(REQ_Adjuntos);
    const [campos] = useState(FOR_Campos);
    const [grupos] = useState(FOR_Botones.map(grupo => grupo))
    const [dropEnter, setDropEnter] = useState(false);
    const [preview, setPreview] = useState(false)

    const formWFv3 = JSON.parse(window.localStorage.getItem('formWFv3')) || []

    const {        
        handleSubmit,
        register,
        control,
        formState: { errors, isDirty, dirtyFields },
        setValue,
        watch,
        reset
      } = useForm();

    useFormPersist("formWFv3", {
        watch, 
        setValue,
        storage: window.localStorage//, // default window.sessionStorage
        //exclude: ['baz']
      });        
    
    const onSubmit = (data, event) => {
        const submitter = event?.nativeEvent?.submitter;
        const action = submitter.getAttribute('formaction')
        const title =  submitter.getAttribute('title')        
        console.log(action, title , data)
    }
    
    /*useEffect(()=>{
        reset({...formWFv3});
    }, [formWFv3])*/

    useEffect(()=>{
        isDirty ? console.log("Formulario Modificado",dirtyFields, dirtyFields['PagMes']) : null
    })

    useEffect(() => {
        selected ?
            setRequest({
                ...request,
                "adjuntos": adjuntos,
                "selected": selected,
            }) :
        null
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
        return (
            <header className='w-full h-auto relative z-20' 
                onDragOver = {handleNotDragOver}>
                {
                    !preview &&
                    <>
                        <div className='flex justify-between relative w-full'>
                            <div className='w-full h-full grid'>
                                <h1 className='text-base truncate w-auto pr-2'>{request?.request?.REQ_Descripcion}</h1>
                                <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>
                                <h2 className='text-base font-light leading-tight'>Acción requerida: <strong className='text-green-600'>{request?.request?.ESR_AccionFlujoDatos}</strong></h2>                            
                            </div>
                            <div className='grid text-right leading-tight absolute right-2 top-8'>
                                <Buttons idGroups={idGroups} grupos={grupos} frmname={form.name}/>
                                <span className='text-[11px] leading-tight'>{fecha(request?.request?.DRE_FechaEdit, dias)}</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='pt-3 pl-2'>
                                    <img
                                        className='w-14 h-14 rounded-full' 
                                        src = {form.IdEditor_Foto} />
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
                        <Dropdown>
                            <MenuButton startDecorator={<TrendingFlatIcon className="rotate-180" />} className="hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1" onClick={() => setPreview(false)}>
                            Volver al formulario
                            </MenuButton>
                        </Dropdown>                    
                }
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-1 max-h-28 overflow-y-auto py-0 pr-2 relative z-10'>
                {
                    adjuntos.map((file, index) => {
                        return (                        
                            <Adjuntos file={file} key={index} selected={selected} setSelected={setSelected} setPreview={setPreview} setAdjuntos={setAdjuntos}/>
                        )}
                    )
                }                                      
                </div>
            </header>            
        )
    }
    
    const DataForm = ({campos, errors, dirtyFields, register, control, Controller}) =>{
        return(
            <section className={`flex-1 overflow-auto flex ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''} px-0 py-3 min-w-96`} onDragEnter={handleDragEnter}>
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
                    
                        <form 
                            className='w-full pr-2'
                            onSubmit={handleSubmit(onSubmit)}
                            name={form.name}
                            id={form.name}>
                                <div className='grid grid-cols-12 gap-2'>
                                    <InputTypes campos={campos} formWFv3={formWFv3} errors={errors} dirtyFields={dirtyFields} register={register} control={control} Controller={Controller}/>
                                </div>
                        </form>
                    
            }
            </section>
        )
    }    
    
    return(
        <>
            {request && request?.request?.VFO_Id === form?.VFO_Id &&
                <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`} id={idForm}>
                    <HeaderForm request={request}/>{
                        !preview &&
                        
                            <DataForm campos={campos} errors={errors} dirtyFields={dirtyFields} register={register} control={control} Controller={Controller}/>
                        
                    }{
                        preview && selected!==null &&
                            <Suspense fallback={<Loading />}>
                                <LazyDocPreview selected={selected} />
                            </Suspense>
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