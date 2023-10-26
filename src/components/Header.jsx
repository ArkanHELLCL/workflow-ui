/* eslint-disable react/prop-types */
import { Suspense, useState } from "react";
import { DarkModeToggle } from "./darkMode.jsx";
import Loading from "./Loading.jsx";
import { 
    CloseIcon,
        DeleteFileIcon, 
        DownReportIcon, 
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
import { ClickAway } from "../hooks/ClickAway.jsx";    

const ContentMenu = ({children, title}) => {
    return (
        <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
            {children}
            <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                <span>{title}</span>
            </div>
        </section>
    )
}

const IconMenu = ({children, title, submneu, id}) => {
    const [open, setOpen] = useState(false);    

    return (
        <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-0 relative" onClick={() => setOpen(!open)}>
            <div className="h-11 w-11 flex items-center justify-center">
                {children}
            </div>
            <div className="flex flex-col leading-tight text-xs items-center relative">
                {title.map((item, index) => (
                    <span key={index}>{item}</span>
                    ))
                }
                {submneu && 
                <>
                    <CloseIcon styles='w-4 h-4' />
                    <SubMenu id={id} open={open}/>
                </>}
            </div>            
        </div>
    )
}

const SubMenu = ({id, open}) => {    
    const menuAppear = useSpring({             
        opacity:1,        
        height: `${open ? 115 : 0}` + 'px',
        config: { duration: 100 }
    });
    
     return (
        id===1 &&     
        <animated.div style={menuAppear} className={`absolute left-0 top-11 overflow-hidden z-20`}>
            <ul className="py-2 border-[#e1dfdd] dark:border-[#8a8886] bg-[#ffffff] dark:bg-[#323130] border">                    
                {
                    flujos.filter(fls => fls.id>0).map((item) =>
                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-10 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key={item.id} >{item.description}</li>
                    )
                }
            </ul>
        </animated.div>        
    ) 
     
}

const CrearMenu = () => {
    return (
        <ContentMenu title={'Crear'}>
            <IconMenu title={['Crear nuevo','requerimiento']} submneu={true} id={1}>                
                <FlowPlusIcon styles='w-10 h-10' strokeWidth='2' />                      
            </IconMenu>            
        </ContentMenu>
    )    
}

const Requerimiento = () => {
    return (
        <ContentMenu title={'Requerimiento'}>
            <IconMenu title={['Generar','informe']} submneu={true}>
                <GenReportIcon styles='w-8 h-8'/>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
            </IconMenu>
            <IconMenu title={['Descargar','informe']} submneu={true}>
                <DownReportIcon styles='w-8 h-8' />
            </IconMenu>
            <IconMenu title={['Mensaje']} submneu={true}>
                <MessagesIcon styles='w-8 h-8'/>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
            </IconMenu>
            <IconMenu title={['Pasos del','flujo']} submneu={true}>
                <FlowStepIcon styles='w-10 h-10' />
            </IconMenu>
        </ContentMenu>
    )    
}

const Acciones = () => {
    return (
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
    )    
}

const GuardarEquipo = () => {
    return (
        <ContentMenu title={'Guardar en el equipo'}>
            <IconMenu title={['Guardar','como']}>
                <SaveAsIconBig styles='h-7 w-7'/>
            </IconMenu>
            <IconMenu title={['Guardar todos los','datos adjuntos']}>
                <SaveAllIconBig styles='h-8 w-8'/>
            </IconMenu>            
        </ContentMenu>
    )    
}

const Mantenedores = () => {
    return (
        <ContentMenu title={'Mantenedor del sistema'}>
            <IconMenu title={['Crear nuevo','registro']}>
                <TableIconPlus styles='w-8 h-8' />
            </IconMenu>
            <IconMenu title={['Descargar','informe resultado']}>
                <DownReportIcon styles='w-8 h-8' />
            </IconMenu>            
        </ContentMenu>
    )    
}

const Informes = () => {
    return (
        <ContentMenu title={'Informe del sistema'}>
            <IconMenu title={['Generar','informe']}>
                <GenReportIcon styles='w-8 h-8'/>
            </IconMenu>
            <IconMenu title={['Descargar','informe resultado']}>
                <DownReportIcon styles='w-8 h-8' />
            </IconMenu>            
        </ContentMenu>
    )    
}

export default function Header(){
    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }    

    return (
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-center justify-start p-2 transition-color delay-75 h-fit drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] pl-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100'
        onDragOver={handleNotDragOver}>
            <Suspense fallback={<Loading />}>
                <CrearMenu />
                <Requerimiento />
                <Acciones />
                <GuardarEquipo />                 
                <Mantenedores />
                <Informes />            
                <DarkModeToggle />            
            </Suspense>
        </header>
    )
}