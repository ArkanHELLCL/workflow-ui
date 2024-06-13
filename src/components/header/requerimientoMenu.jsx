/* eslint-disable react/prop-types */
import MenuButton from '@mui/joy/MenuButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

import { useSpring, animated } from "@react-spring/web";
import { informes } from "../../mocks/informes.json";
import { pasos } from "../../mocks/pasos.json";
import ContentMenu from "./contentMenu"
import {     
    GenReportIcon,
    DownReportIcon,
    MessagesIcon,
    FlowStepIcon
    } from "../../utils/icons.jsx";


export default function RequerimientoMenu ({styles, request, openDialog, setOpenDialog}){
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
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
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
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
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
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
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
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !my-0 !py-0 !items-start !pt-1`}>
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