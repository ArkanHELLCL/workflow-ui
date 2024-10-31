/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUserData } from "../hooks/useUserData.jsx";
import { useReports } from "../hooks/useReports.jsx";
import { useInboxState } from '../hooks/useInboxState.jsx';
import Collapse from '@mui/material/Collapse';
import { useFilters } from "../hooks/useFilters.jsx";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { BlockIcon, CheckIcon, QuestionIcon, WarningIcon } from "../utils/icons.jsx";
import EncontrarDescripcionPorId from "../utils/EncontrarDescripcionPorId.jsx";
import Loading from "../utils/Loading.jsx";
import { Button, Menu } from "@mui/material";

export default function Footer() {
    const { report } = useReports()
    const { userdata } = useUserData()
    const { filters } = useFilters()
    const { inboxstate } = useInboxState()
    const [clickPorVencer, setClickPorVencer] = useState(false);
    const [clickVencidos, setClickVencidos] = useState(false);
    const [clickSinTomar, setClickSinTomar] = useState(false);

    const menu = userdata?.treeMenu
    
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
    let tipoABuscar = ''    
    
    filters.itemIdSelected.charAt(0) === "b" ? tipoABuscar = "bandejas" :
    filters.itemIdSelected.charAt(0) === "r" ? tipoABuscar = "reportes" : 
    filters.itemIdSelected.charAt(0) === "m" ? tipoABuscar = "mantenedores" :
    filters.itemIdSelected.charAt(0) === "j" ? tipoABuscar = "mensajes" : tipoABuscar = "bandejas" 
    
    let obj


    if(tipoABuscar === "bandejas" || tipoABuscar === "reportes"){
        obj = menu?.flujos.filter(item => parseInt(item.id) === filters.flujo)[0][tipoABuscar][0]
    }else{
        obj = menu[tipoABuscar][0]
    }

    const descripcion = EncontrarDescripcionPorId(filters.itemIdSelected, obj)?.description;

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <footer className='dark:bg-[#323130] bg-[#f3f2f1] w-full h-[25px] transition-color delay-75 flex items-center p-3 space-x-2 text-xs z-20' onDragOver={handleNotDragOver} id="footerleft">
                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px] truncate">{descripcion !== null ? descripcion : 'Sin menú'}</span>
                {
                    tipoABuscar === "bandejas" && filters.itemIdSelected.length > 1 ? 
                        <>{                        
                            filters.itemIdSelected.slice(0,2) !== 'bn' && filters.itemIdSelected.slice(0,2) !== 'ba' &&
                                <>
                                    <div className="dark:text-orange-300 text-orange-400 flex z-20">
                                        <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickPorVencer()}>
                                            <WarningIcon />
                                        </span>                
                                        <Collapse in={clickPorVencer} direction='left' mountOnEnter unmountOnExit timeout={900} orientation="horizontal">
                                            <div className='overflow-hidden pt-[1px] pr-1'>
                                                <span className="z-10 truncate pt-1">Total de requerimientos por vencer : </span> 
                                            </div>
                                        </Collapse >
                                        <span className="pt-[1px]">{filters.totalPorVencer}</span>
                                    </div>                    
                                    <div className="text-red-500 flex z-20">
                                        <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickVencidos()}>
                                            <WarningIcon />
                                        </span>                
                                        <Collapse in={clickVencidos} direction='left' mountOnEnter unmountOnExit timeout={900} orientation="horizontal">
                                            <div className='overflow-hidden pt-[1px] pr-1'>
                                                <span className="z-10 truncate">Total de requerimientos vencidos :</span> 
                                            </div>
                                        </Collapse>
                                        <span className="pt-[1px]">{filters.totalVencidos}</span>  
                                    </div>                               
                                    <div className="text-sky-500 flex z-20">
                                        <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickSinTomar()}>
                                            <QuestionIcon />
                                        </span>
                                        <Collapse in={clickSinTomar} direction='left' mountOnEnter unmountOnExit timeout={900} orientation="horizontal">
                                            <div className='overflow-hidden pt-[1px] pr-1'>
                                                <span className="z-10 truncate pt-1">Total de requerimientos sin tomar :</span> 
                                            </div>
                                        </Collapse>
                                        <span className="pt-[1px]">{filters.totalSintomar}</span>  
                                    </div>
                                </>
                            }{
                                (filters.totalFiltrados > 0 || filters.stringSearch !== '') &&
                                    <div>
                                        <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total Filtrados : </span>
                                        <span className="text-green-500">{filters.totalFiltrados === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalFiltrados}</span>                
                                    </div> 
                            }
                            <div className="truncate">
                                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total : </span>{
                                    filters.itemIdSelected === 'bn' ?
                                        <span className="text-green-500">{obj.children.filter(item => item.id === 'bn')[0].children.length}</span>                
                                    :
                                        <span className="text-green-500">{filters.totalRequerimientos === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalRequerimientos}</span>
                                }                                                
                            </div> 
                        </>
                        : 
                            filters.itemIdSelected === 'm' || filters.itemIdSelected === 'j' ? (
                                <> {
                                        (filters.totalFiltrados > 0 || filters.stringSearch !== '') && (
                                            <div>
                                                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total Filtrados : </span>
                                                <span className="text-green-500">{filters.totalFiltrados === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalFiltrados}</span>                
                                            </div> 
                                        )
                                    }
                                    <div className="truncate">
                                        <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px] truncate">Total : </span>
                                        <span className="text-green-500">{obj.children.length}</span>                
                                    </div>
                                </>
                            ) : 
                                filters.itemIdSelected.charAt(0) === "m" ? (                            
                                <>
                                    <div className="dark:text-green-300 text-green-400 flex z-20">
                                        <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickPorVencer()}>
                                            <CheckIcon styles={"w-3 h-3"}/>
                                        </span>
                                        <Collapse in={clickPorVencer} direction='left' mountOnEnter unmountOnExit timeout={900} orientation="horizontal">
                                            <div className='overflow-hidden pt-[1px] pr-1'>
                                                <span className="z-10 truncate pt-1">Total de registros habilitados :</span> 
                                            </div>
                                        </Collapse>
                                        <span className="pt-[1px]">{filters.totalPorVencer}</span>
                                    </div>

                                    <div className="text-red-500 flex z-20">
                                        <span className="pt-[3px] pr-1 cursor-pointer" onClick={() => handleClickVencidos()}>
                                            <BlockIcon styles={"w-3 h-3"} />
                                        </span>
                                        <Collapse in={clickVencidos} direction='left' mountOnEnter unmountOnExit timeout={900} orientation="horizontal">
                                            <div className='overflow-hidden pt-[1px] pr-1'>
                                                <span className="z-10 truncate">Total de registros bloqueados :</span> 
                                            </div>
                                        </Collapse>
                                        <span className="pt-[1px]">{filters.totalVencidos}</span>  
                                    </div>
                                    {
                                        (filters.totalFiltrados > 0 || filters.stringSearch !== '') && (
                                            <div>
                                                <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total Filtrados : </span>
                                                <span className="text-green-500">{filters.totalFiltrados === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalFiltrados}</span>                
                                            </div> 
                                        )
                                    }
                                    <div className="truncate">
                                        <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px] truncate">Total : </span>
                                        <span className="text-blue-500">{filters.totalRequerimientos === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalRequerimientos}</span>                
                                    </div> 
                                </>
                            ) : (
                                <>{
                                    (filters.totalFiltrados > 0 || filters.stringSearch !== '') && (
                                        <div>
                                            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px]">Total Filtrados : </span>
                                            <span className="text-green-500">{filters.totalFiltrados === filters.maxRecordLoaded ? filters.maxRecordLoaded + '+' : filters.totalFiltrados}</span>                
                                        </div> 
                                    )
                                }{
                                    report ? (
                                        <div className="truncate">
                                            <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px] truncate">Total : </span>
                                            <span className="text-green-500">{report?.rows?.length}</span>                
                                        </div>    
                                    ): (
                                    <div>
                                        <span className="text-center dark:text-stone-100 text-stone-500 pb-[1px] truncate">Total : </span>
                                        <span className="text-green-500">{filters.itemIdSelected === "r" || filters.itemIdSelected === "b" ? obj.children.length : obj.children.filter((item) => item === filters.itemIdSelected)[0]?.children?.length || filters.itemIdSelected.charAt(0) === "j" ? filters.totalMensajes : 0}</span>                
                                    </div>
                                    )
                                }                                
                                </>
                            )
                        
                    }
            </footer>
            <footer className='dark:bg-[#323130] bg-[#f3f2f1] w-full h-[25px] transition-color delay-75 flex items-center justify-end pl-3 pr-1 space-x-2 text-xs z-20' onDragOver={handleNotDragOver} id="footerright">
                <Button className={`!bg-transparent !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !text-xs !min-h-full !px-2 overflow-auto !max-w-xs`}
                        id="logList-button"
                        aria-controls={open ? "logList" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        title="Mensajes de soliciutes de actualización de registros"
                >
                    <span className="pr-1 truncate">
                        {inboxstate?.messages?.slice(-1)[0]?.split(' - ')[1]}
                    </span>{
                        inboxstate?.loadingInboxs ?                            
                            <span className="text-blue-500 h-4 w-4 truncate"><Loading /> </span>
                        :
                            inboxstate?.error ?
                                <CancelOutlinedIcon className="!h-4 !w-4 text-red-500"/>
                            :
                                inboxstate?.warning ?
                                    <WarningAmberOutlinedIcon className="!h-4 !w-4 dark:text-orange-300 text-orange-400"/>
                                :
                                    <CheckCircleOutlineOutlinedIcon className="!h-4 !w-4 text-green-500"/>
                    }
                </Button>
                <Menu
                    id="logList"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'logList-button',
                    }}                    
                >
                    <ul className="h-36 !max-w-lg">{
                        inboxstate?.messages?.map((item, index) => (
                            <li key={index} className={`px-6 pt-1 text-xs font-semibold ${item.includes('Error') ? 'text-red-600': item.includes('Warning') ? 'dark:text-orange-300 text-orange-400': ''}`}>{item}</li>
                        ))                        
                    }</ul>    
                </Menu>
            </footer>
        </>
    )
}