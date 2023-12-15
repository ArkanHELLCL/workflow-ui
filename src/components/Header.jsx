/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useId, useState } from "react";
import { DarkModeToggle } from "./darkMode.jsx";
import Loading from "./Loading.jsx";
import { 
    AttachIcon,
    ButtonIcon,
    CloseIcon,
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
import { ClickAway } from "../hooks/ClickAway.jsx"; 
import { useRequest } from "../hooks/useRequest.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { formulario } from '../mocks/Formulario.json'

const ContentMenu = ({children, title, styles}) => {    
    return (
        <section className={`flex content-start gap-0 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59] ${styles}`}>
            {children}
            <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                <span>{title}</span>
            </div>
        </section>
    )
}

const IconMenu = ({children, title, submneu, id, request}) => {
    const [open, setOpen] = useState(false);    
    const { ref } = ClickAway(setOpen);

    return (
        <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] px-1 relative" onClick={() => setOpen(!open)}>
            <div className="h-11 w-11 flex items-center justify-center">
                {children}
            </div>
            <div className="flex flex-col leading-tight text-xs items-center relative" ref={ref}>
                {title.map((item, index) => (
                    <span key={index}>{item}</span>
                    ))
                }
                {submneu ? 
                <>
                    <CloseIcon styles='w-4 h-4' />
                    <SubMenu id={id} open={open} request={request}/>
                </>:
                    <span className="h-3">&nbsp;</span>
                }
            </div>            
        </div>
    )
}

const SubMenu = ({id, open, request}) => {    
    const menuAppear = useSpring({             
        opacity:1,        
        height: `${open && id===1 ? 95 : open && id===2 ? 75 : open && id===3 ? 75 : open && id===4 ? 75 : open && id===5 ? 300 : 0}` + 'px',
        config: { duration: 100 }
    });    
    return (
        id===1 ? 
        (
            <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
                <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">                    
                    {
                        flujos.filter(fls => fls.id>0).map((item) =>
                            <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} >
                                <span className="absolute left-3 top-1"><FlowIcon id={item.id} /></span>
                                {item.description}
                            </li>
                        )
                    }
                </ul>
            </animated.div>        
        ) : id===2 ? 
            (
                <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
                    <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">
                        {
                            informes.map((item) =>
                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} >
                                    <span className="absolute left-3 top-1"></span>
                                    {item.description}
                                </li>
                            )
                        }
                    </ul>
                </animated.div>  
            ) : id===3 ? 
                (
                    <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
                        <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">
                            {
                                informes.map((item) =>
                                    <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} >
                                        <span className="absolute left-3 top-1"></span>
                                        {item.description}
                                    </li>
                                )
                            }
                        </ul>
                    </animated.div>  
                ) : id===4 ? 
                    (
                        <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
                            <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">                                
                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={1} >
                                    <span className="absolute left-3 top-1"></span>Enviar mensaje                                          
                                </li>
                                <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={2} >
                                    <span className="absolute left-3 top-1"></span>Revisar mensajes
                                </li>
                            </ul>
                        </animated.div>  
                    ): id===5 ? 
                        (
                            <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
                                <ul className="py-2 border-[#92908f] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">                                
                                {
                                    pasos.map((item) =>
                                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative group/step`} key={item.id} >
                                            <span className={`absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white  rounded-full top-1 left-3 ${item.id === request?.request?.FLD_CodigoPaso ? 'bg-sky-600': 'dark:bg-stone-700 bg-stone-300 group-hover/step:bg-sky-400'} `}>{item.id}</span>
                                            {item.name} - {item.accion}
                                        </li>
                                    )
                                }
                                </ul>
                            </animated.div>  
                        ): null
    )
}

const CrearMenu = ({styles}) => {    
    return (        
        <ContentMenu title={'Crear'} styles={styles}>
            <IconMenu title={['Crear nuevo','requerimiento']} submneu={true} id={1}>                
                <FlowPlusIcon styles='w-10 h-10' strokeWidth='2' />                      
            </IconMenu>            
        </ContentMenu>        
    )    
}

const Requerimiento = ({styles, request}) => {
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
            <ContentMenu title={'Requerimiento'}>
                <IconMenu title={['Generar','informe']} submneu={true} id={2}>
                    <GenReportIcon styles='w-8 h-8'/>
                    <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
                </IconMenu>
                <IconMenu title={['Descargar','informe']} submneu={true} id={3}>
                    <DownReportIcon styles='w-8 h-8' />
                </IconMenu>
                <IconMenu title={['Mensaje']} submneu={true} id={4}>
                    <MessagesIcon styles='w-8 h-8'/>
                    <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
                </IconMenu>
                <IconMenu title={['Pasos del','flujo']} submneu={true} id={5} request={request}>
                    <FlowStepIcon styles='w-10 h-10' />
                </IconMenu>
            </ContentMenu>
        </animated.div>
    )    
}

const Ajuntar = ({styles}) => {
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

    return (
        <animated.div style={menuAppear} className={styles}>
            <label htmlFor={idInput}>
            <ContentMenu title={'Incluir'}>
                <IconMenu title={['Adjuntar','documento']}>
                    <AttachIcon styles='w-8 h-8'/>
                    <input
                        type="file"
                        multiple                        
                        className='hidden'
                        id={idInput}
                        accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"                        
                    />
                </IconMenu>
            </ContentMenu>
            </label>
        </animated.div>
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
                <IconMenu title={['Abrir']}>
                    <OpenFolderIcon styles='h-8 w-8'/>
                </IconMenu>
                <IconMenu title={['Impresión','rápida']}>
                    <PrinterIcon styles='h-11 w-11' strokeWidth="2"/>
                </IconMenu>
                <IconMenu title={['Quitar datos','adjuntos']}>
                    <DeleteFileIcon styles='text-red-500 h-10 w-10' strokeWidth={1} />
                </IconMenu>
            </ContentMenu>
        </animated.div>
    )    
}

const Formulario = ({styles, grupos}) => {
    return(
        grupos?.map((grp, index) => 
            (
                <BtsFormulario styles={styles} keygrp={'btnGrp-' + index} delay={200 + (index*30)} grp={grp} key={index}/>
            )
        )
    )
}

const BtsFormulario = ({styles, keygrp, delay, grp}) => {
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
                    <IconMenu title={[btns.descripcion[0],btns.descripcion[1]]} key={btns.id}>
                        <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                    </IconMenu>                    
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
                <IconMenu title={['Guardar','como']}>
                    <SaveAsIconBig styles='h-7 w-7'/>
                </IconMenu>
                <IconMenu title={['Guardar todos los','datos adjuntos']}>
                    <SaveAllIconBig styles='h-8 w-8'/>
                </IconMenu>            
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
                <IconMenu title={['Crear nuevo','registro']}>
                    <TableIconPlus styles='w-8 h-8' />
                </IconMenu>
                <IconMenu title={['Descargar','informe resultado']}>
                    <DownReportIcon styles='w-8 h-8' />
                </IconMenu>            
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
                <IconMenu title={['Generar','informe']}>
                    <GenReportIcon styles='w-8 h-8'/>
                </IconMenu>
                <IconMenu title={['Descargar','informe resultado']}>
                    <DownReportIcon styles='w-8 h-8' />
                </IconMenu>            
            </ContentMenu>
        </animated.div>
    )    
}

export default function Header(){
   const { request } = useRequest()
   const { filters } = useFilters()
    
   const [grupos, setGrupos] = useState(null);
    
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
    //console.log(filters)
    const mantSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "m")
    const repoSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "r")
    
    return (        
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-start justify-start p-2 transition-color delay-75 h-fit drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] pl-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100'
        onDragOver={handleNotDragOver}>            
            <Suspense fallback={<Loading />}>
                <CrearMenu styles={'z-50'}/>
                {
                    request && 
                    <>
                        <Requerimiento styles={'z-40'} request={request}/>                        
                        {
                            
                            request?.selected &&
                            <>
                                <Acciones  styles={'z-30'}/>
                                <GuardarEquipo  styles={'z-20'}/>                                
                            </>
                        }
                        <Ajuntar styles={'z-10'}/>
                        <Formulario styles={'z-10'} grupos={grupos}/>
                    </>
                }
                {
                    mantSelected &&                     
                        <Mantenedores styles={'z-40'}/>
                }
                {
                    repoSelected &&         
                        <Informes styles={'z-40'} />                    
                }                
                <DarkModeToggle />            
            </Suspense>
        </header>
    )
}