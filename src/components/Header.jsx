/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useId, useState } from "react";
import { DarkModeToggle } from "./darkMode.jsx";
import Loading from "./Loading.jsx";
import { 
    AttachIcon,
    ButtonIcon,
    DeleteFileIcon, 
    DownReportIcon, 
    FlowIcon, 
    FlowPlusIcon, 
    FlowStepIcon, 
    GenReportIcon, 
    MessagesIcon, 
    OpenFolderIcon, 
    PrinterIcon, 
    SaveAllIconBig, 
    SaveAsIconBig, 
    TableIconPlus 
    } from "./icons.jsx";
import { useSpring, animated } from "@react-spring/web";
import { flujos } from "../mocks/flujos.json";
import { informes } from "../mocks/informes.json";
import { pasos } from "../mocks/pasos.json";
import { useRequest } from "../hooks/useRequest.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { formulario } from '../mocks/formulario.json'

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/joy/ListItemButton';
import ConfirmationDialog from "./ConfirmationDialog.jsx";

const ContentMenu = ({children, title, styles}) => {    
    return (        
        <section className={`flex content-start gap-0 shrink px-2 pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59] h-full overflow-hidden relative ${styles}`}>
            {children}
            <div className="absolute bottom-1 leading-tight text-xs w-full text-center text-nowrap truncate justify-center -left-[1px]  px-2">
                <span>{title}</span>
            </div>
        </section>
    )
}

const CrearMenu = ({styles, openDialog, setOpenDialog}) => {
    function  hanldeOnClick(flujo){
        if(flujo?.dialogo==='confirm'){
            setOpenDialog({
                ...openDialog,
                titulo:'Creación de un ' + flujo?.description,
                mensaje:flujo?.mensaje,
                id:'flu-' + flujo.id,                
                frmname:flujo.formname,
                action:flujo.action,
                open:true,
                type:flujo.type
            })
            console.log(openDialog)
        }
    }

    return (     
        <div>
            <ContentMenu title={'Crear'} styles={styles}>
                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                            <FlowPlusIcon styles='w-11 h-11' strokeWidth='2' />                         
                            <span>Crear nuevo</span>
                            <span>requerimiento</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </MenuButton>
                    <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                        flujos.filter(fls => fls.id>0).map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>
                                <ListItemDecorator><FlowIcon id={item.id} /></ListItemDecorator>
                                {item.description}                            
                            </MenuItem>
                        )}      
                    </Menu>
                </Dropdown>
            </ContentMenu>
        </div>   
    )    
}

const Requerimiento = ({styles, request, openDialog, setOpenDialog}) => {
    function hanldeOnClick(flujo){
        if(flujo?.dialogo==='confirm'){
            setOpenDialog({
                ...openDialog,
                titulo:flujo?.titulo,
                mensaje:flujo?.mensaje,
                id:flujo.id,                
                frmname:flujo.formname,
                action:flujo.action,
                open:true,
                type: flujo.type,
            })
        }
    }

    const  menuAppear = useSpring({
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });
    const gen = informes[0].flujos.filter((item) => item.id===request.request.FLU_Id)[0].tipos.filter((item) => item.tipo === "generacion")[0]?.informes
    const des = informes[0].flujos.filter((item) => item.id===request.request.FLU_Id)[0].tipos.filter((item) => item.tipo === "descarga")[0]?.informes

    return (        
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Requerimiento'} styles={styles}>{
                gen &&
                    <Dropdown>
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                                <GenReportIcon styles='w-10 h-10'/>
                                <span className="!pt-2">Generar</span>                            
                                <KeyboardArrowDownIcon/>
                            </div>
                        </MenuButton>
                        <Menu placement="bottom-start" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                            gen.map((item) =>
                                <MenuItem className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>                                
                                    {item.description}                            
                                </MenuItem>
                            )}      
                        </Menu>
                    </Dropdown>
                }{
                des &&
                    <Dropdown>
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                                <DownReportIcon styles='w-10 h-10' />
                                <span className="pt-2">Descargar</span>   
                                <span>informes</span>   
                                <KeyboardArrowDownIcon/>
                            </div>
                        </MenuButton>
                        <Menu placement="bottom-start" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                            des.map((item) =>
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>                                
                                    {item.description}                            
                                </MenuItem>
                            )}      
                        </Menu>
                    </Dropdown>
                }
                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                            <MessagesIcon styles='w-10 h-10'/>
                            <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full -top-[5px] -right-1"></span>
                            <span className="pt-2">Mensajes</span>                            
                            <KeyboardArrowDownIcon/>
                        </div>
                    </MenuButton>
                    <Menu placement="bottom-start" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  onClick={() => console.log('Enviar mensaje')}>                                
                            Enviar mensaje                          
                        </MenuItem> 
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  onClick={() => console.log('Revisar mensajes')}>                                
                            Revisar mensajes                          
                        </MenuItem>   
                    </Menu>
                </Dropdown>

                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                            <FlowStepIcon styles='w-11 h-11' />
                            <span className="pt-0">Pasos</span>   
                            <span>del flujo</span>   
                            <KeyboardArrowDownIcon/>
                        </div>
                    </MenuButton>
                    <Menu placement="bottom-start" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                        pasos.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow peer/steps`}  key={item.id} onClick={() => console.log('Pado del requerimiento' + item.name)}>
                                 <ListItemDecorator>
                                    <span className={`inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white  rounded-full top-1 left-3 ${item.id === request?.request?.FLD_CodigoPaso ? 'bg-sky-600': 'dark:bg-stone-700 bg-stone-300 peer-hover/steps:bg-sky-400'}`}>{item.id}</span>
                                </ListItemDecorator>                                
                                {item.name} - {item.accion}
                            </MenuItem>
                        )}      
                    </Menu>
                </Dropdown>
            </ContentMenu>
        </animated.div>
    )    
}

const Adjuntar = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 250
    });

    /*const handleAdjunto = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const input = document.getElementById('adjuntos-input')
        input.click()
        //console.log('adjuntar')
    }*/

    const idInput = useId()
    const handleClickAdjunto = () =>{
        const  elemento = document.getElementById(idInput);
        elemento.click()
    }

    return (
        <>
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Adjuntar'} styles={styles}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={handleClickAdjunto}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <AttachIcon styles='w-10 h-10'/>                       
                            <span>Adjuntar</span>
                            <span>documento</span>
                        </div>
                    </ListItemButton>
                </Dropdown>
            </ContentMenu>
        </animated.div>
        <form>
            <input
                type="file"
                multiple                        
                className='hidden'
                id={idInput}
                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"                        
            />
        </form>
        </>
    )
}

const Acciones = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });

    return (
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Acciones'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('abrir doc')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-11">
                            <OpenFolderIcon styles='h-11 w-11'/>
                            <span>Abrir</span>
                        </div>
                    </ListItemButton>                    
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('imprimir doc')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <PrinterIcon styles='h-11 w-11' strokeWidth="2"/>
                            <span>Impresión</span>
                            <span>rápida</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('eliminar adj')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <DeleteFileIcon styles='text-red-500 h-10 w-10' strokeWidth={1} />
                            <span>Quitar archivo</span>
                            <span>adjunto</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
            </ContentMenu>
        </animated.div>
    )    
}

const Formulario = ({styles, grupos, openDialog, setOpenDialog}) => {
    return(
        grupos?.map((grp, index) => 
            (
                <BtsFormulario styles={styles} keygrp={'btnGrp-' + index} delay={200 + (index*30)} grp={grp} key={index} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
            )
        )
    )
}

const BtsFormulario = ({styles, keygrp, delay, grp, openDialog, setOpenDialog}) => {
    function hanldeOnClick(btn){
        if(btn?.dialogo==='confirm'){
            setOpenDialog({
                ...openDialog,
                titulo:btn?.titulo,
                mensaje:btn?.mensaje,
                id:btn.id,                
                frmname:btn.formname,
                action:btn.action,
                open:true,
                type: btn.type,
            })
        }
    }

    const menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: delay
    });
    return (
        <animated.div key={keygrp} style={menuAppear} className={styles} id={keygrp}>
            <ContentMenu title={grp[0].descripcion}>{
                grp[0].botones.map(btns =>
                    <Dropdown key={btns.id}>
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={() => hanldeOnClick(btns)} key={btns.id} >
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                                <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                                <span className="!pt-2">{btns.descripcion[0]}</span>
                                <span>{btns.descripcion[1]}</span>
                            </div>
                        </MenuButton>                
                    </Dropdown>
                )}
            </ContentMenu>
        </animated.div>
    )
}

const GuardarEquipo = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 250
    });

    return (
        <animated.div style={menuAppear} styles={styles}>
            <ContentMenu title={'Guardar en el equipo'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar adj')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <SaveAsIconBig styles='h-8 w-8 !mt-2'/>
                            <span className="!pt-2">Guardar</span>
                            <span>como</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar todos')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <SaveAllIconBig styles='h-8 w-8 !mt-2'/>
                            <span className="!pt-2">Guardar todos los</span>
                            <span>datos adjuntos</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
            </ContentMenu>
        </animated.div>
    )    
}

const Mantenedores = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });
    return (
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Mantenedor del sistema'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('crear reg')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-7">
                            <TableIconPlus styles='w-8 h-8' />
                            <span className="!pt-2">Crear nuevo</span>
                            <span>registro</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-6">
                            <DownReportIcon styles='w-9 h-9' />
                            <span className="!pt-2">Descargar infrome</span>
                            <span>resultado</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
            </ContentMenu>
        </animated.div>
    )    
}

const Informes = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });
    return (
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Informe del sistema'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('generar inf')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-6">
                            <GenReportIcon styles='w-9 h-9'/>
                            <span className="!pt-2">Generar</span>
                            <span>informe</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-6">
                            <DownReportIcon styles='w-9 h-9' />
                            <span className="!pt-2">Descargar infrome</span>
                            <span>resultado</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>   
            </ContentMenu>
        </animated.div>
    )    
}

export default function Header(){
   const { request } = useRequest()
   const { filters } = useFilters()
    
   const [grupos, setGrupos] = useState(null);
   const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":""})
    
   useEffect(() => {
        //const { FOR_Botones } = formulario.VFO_Id === request?.request?.VFO_Id;
        let FOR_Botones
        formulario.VFO_Id === request?.request?.VFO_Id ? FOR_Botones = formulario.FOR_Botones : FOR_Botones = null        
        setGrupos(FOR_Botones?.map(grupo => grupo))
    },[formulario,request])

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }    
    const mantSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "m")
    const repoSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "r")    
    return (        
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-start justify-start p-2 transition-color delay-75 drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] ml-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100 h-[180px] overflow-hidden'
        onDragOver={handleNotDragOver}>
            <Suspense fallback={<Loading />}>
                <CrearMenu styles={'z-50 h-full'} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                {
                    request && 
                    <>
                        <Requerimiento styles={'z-40 h-full'} request={request} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                        {
                            
                            request?.selected &&
                            <>
                                <Acciones  styles={'z-30 h-full'}/>
                                <GuardarEquipo  styles={'z-20 h-full'}/>                                
                            </>
                        }
                        <Adjuntar styles={'z-10 h-full'}/>
                        <Formulario styles={'z-10 h-full'} grupos={grupos} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                    </>
                }
                {
                    mantSelected &&                     
                        <Mantenedores styles={'z-40 h-full'}/>
                }
                {
                    repoSelected &&         
                        <Informes styles={'z-40 h-full'} />                    
                }                
                <DarkModeToggle />            
            </Suspense>{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }
        </header>
    )
}