/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { DarkModeToggle } from "./darkMode.jsx";
import Loading from "./Loading.jsx";
import { 
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

export default function Header(){
    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }
    return (
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-center justify-start p-2 transition-color delay-75 h-fit drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] pl-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-0 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100'
        onDragOver={handleNotDragOver}>
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <FlowPlusIcon styles='w-10 h-10' strokeWidth='2' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Crear nuevo</span>
                        <span>requerimiento</span>
                    </div>
                </div>
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                    <span>Crear</span>
                </div>
            </section>
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <GenReportIcon styles='w-8 h-8'/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Generar</span>
                        <span>informe</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <DownReportIcon styles='w-8 h-8' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Descargar</span>
                        <span>informe</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <MessagesIcon styles='w-8 h-8' strokeWidth={2}/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Mensajes</span>                        
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <FlowStepIcon styles='w-10 h-10' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Pasos del</span>
                        <span>flujo</span>
                    </div>
                </div>
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center items-center -left-1">
                    <span>Requerimiento</span>
                </div>
            </section>
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <OpenFolderIcon styles='h-8 w-8'/>
                    </div>
                    <div className="leading-tight text-xs items-center">
                        <span>Abrir</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <PrinterIcon styles='h-11 w-11' strokeWidth="2"/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Impresión</span>
                        <span>rápida</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="text-red-500 h-11 w-11 flex items-center justify-center">
                        <DeleteFileIcon styles='h-10 w-10' strokeWidth={1} /> 
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Quitar datos</span>
                        <span>adjuntos</span>
                    </div>
                </div>
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                    <span>Acciones</span>
                </div>
            </section>
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <SaveAsIconBig styles='h-7 w-7'/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Guardar</span>
                        <span>como</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <SaveAllIconBig styles='h-8 w-8'/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Guardar todos los</span>
                        <span>datos adjuntos</span>
                    </div>
                </div>                
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                    <span>Guardar en el equipo</span>
                </div>
            </section>                   
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <TableIconPlus styles='w-8 h-8' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Crear nuevo</span>
                        <span>registro</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <DownReportIcon styles='w-8 h-8' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Descargar</span>
                        <span>informe resultado</span>
                    </div>
                </div>                
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                    <span>Mantenedor del sistema</span>
                </div>
            </section>
            <section className="flex content-start gap-3 shrink px-2 relative pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#5c5a59]">
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <GenReportIcon styles='w-8 h-8'/>
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Generar</span>
                        <span>informe</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0 cursor-pointer hover:bg-[#e1dfdd] dark:hover:bg-[#484644] p-1">
                    <div className="h-11 w-11 flex items-center justify-center">
                        <DownReportIcon styles='w-8 h-8' />
                    </div>
                    <div className="flex flex-col leading-tight text-xs items-center">
                        <span>Descargar</span>
                        <span>informe resultado</span>
                    </div>
                </div>                
                <div className="absolute -bottom-1 leading-tight text-xs w-full text-center -left-1 items-center">
                    <span>Informe del sistema</span>
                </div>
            </section>
            <Suspense fallback={<Loading />}>
                <DarkModeToggle />            
            </Suspense>
        </header>
    )
}