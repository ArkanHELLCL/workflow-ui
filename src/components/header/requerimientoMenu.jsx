/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useRequest } from "../../hooks/useRequest.jsx";
import { informes } from "../../mocks/informes.json";
import { pasos } from "../../mocks/pasos.json";
import ContentMenu from "./contentMenu"
import { GenReportIcon, DownReportIcon, MessagesIcon, FlowStepIcon, SendIcon, OpenMenssage } from "../../utils/icons.jsx";
import { useState } from 'react';

const hanldeOnClick = (item) => {
    console.log('Click on ' + item.description)
}

export default function RequerimientoMenu ({styles, delay, setAnimationEnd}) {
    const { request } = useRequest();

    const [anchorGen, setAnchorGen] = useState(null);
    const openGen = Boolean(anchorGen);
    const [anchorDes, setAnchorDes] = useState(null);
    const openDes = Boolean(anchorDes);
    const [anchorMes, setAnchorMes] = useState(null);
    const openMes = Boolean(anchorMes);
    const [anchorPas, setAnchorPas] = useState(null);
    const openPas = Boolean(anchorPas);

    const gen = informes[0].flujos.filter((item) => item.id===request?.request.FLU_Id)[0]?.tipos?.filter((item) => item.tipo === "generacion")[0]?.informes
    const des = informes[0].flujos.filter((item) => item.id===request?.request.FLU_Id)[0]?.tipos?.filter((item) => item.tipo === "descarga")[0]?.informes

    const handleClickGen = (event) => {
        setAnchorGen(event.currentTarget);
    };
    const handleCloseGen = () => {
        setAnchorGen(null);
    };
    const handleClickDes = (event) => {
        setAnchorDes(event.currentTarget);
    };
    const handleCloseDes = () => {
        setAnchorDes(null);
    };
    const handleClickMes = (event) => {
        setAnchorMes(event.currentTarget);
    };
    const handleCloseMes = () => {
        setAnchorMes(null);
    };
    const handleClickPas = (event) => {
        setAnchorPas(event.currentTarget);
    };
    const handleClosePas = () => {
        setAnchorPas(null);
    }
                  
    return (        
        request &&                    
            <Slide in={true} direction='left' timeout={delay} mountOnEnter unmountOnExit addEndListener={(node, done) =>
                node.addEventListener(
                    'transitionend',
                    (e) => {                        
                    setAnimationEnd(true);
                    done(e);
                    },
                    false
                )
                } 
                onEnter={() =>  setAnimationEnd(false)}>
            <div className={styles + ' relative flex-col h-full'}> 
                <ContentMenu title={'Requerimiento'} styles={styles}>{
                    gen &&
                        <>
                            <Button
                                id="geninf-menu"
                                aria-controls={openGen ? 'geninf-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openGen ? 'true' : undefined}
                                onClick={handleClickGen}
                                className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} title="Generar Informe"
                            >
                                <div className="flex flex-col items-center relative">
                                    <GenReportIcon styles='w-10 h-10' strokeWidth='2' />
                                    <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize !pt-2'>Generar</span>
                                    <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>informe</span>
                                    <KeyboardArrowDownIcon />
                                </div>
                            </Button>
                            <Menu
                                anchorEl={anchorGen}
                                open={openGen}
                                onClose={handleCloseGen}
                                MenuListProps={{
                                    'aria-labelledby': 'geninf-button',
                                }}                        
                            >{
                                gen.map((item) =>
                                    <MenuItem className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>                                
                                        {item.description}                            
                                    </MenuItem>
                                )}  
                            </Menu>
                        </>
                    }{
                    des &&
                        <>
                            <Button
                                id="desinf-menu"
                                aria-controls={openDes ? 'desinf-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openDes ? 'true' : undefined}
                                onClick={handleClickDes}
                                className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} title="Descargar informe"
                            >
                                <div className="flex flex-col items-center relative">
                                    <DownReportIcon styles='w-10 h-10' strokeWidth='2' />                         
                                    <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize !pt-2'>Descargar</span>
                                    <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>informe</span>
                                    <KeyboardArrowDownIcon />
                                </div>
                            </Button>
                            <Menu
                                anchorEl={anchorDes}
                                open={openDes}
                                onClose={handleCloseDes}
                                MenuListProps={{
                                    'aria-labelledby': 'desinf-button',
                                }}                        
                            >{
                                des.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>                                
                                        {item.description}                            
                                    </MenuItem>
                                )}  
                            </Menu>
                        </>
                    }
                    <>
                        <Button
                            id="mesreq-menu"
                            aria-controls={openMes ? 'mesreq-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMes ? 'true' : undefined}
                            onClick={handleClickMes}
                            className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} title="Administrar los mensajes del requerimiento"
                        >
                            <div className="flex flex-col items-center relative">
                                <MessagesIcon styles='w-10 h-10' strokeWidth='2' />                         
                                <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize !pt-2'>Mensajes</span>
                                <KeyboardArrowDownIcon />
                            </div>
                        </Button>
                        <Menu
                            anchorEl={anchorMes}
                            open={openMes}
                            onClose={handleCloseMes}
                            MenuListProps={{
                                'aria-labelledby': 'mesreq-button',
                            }}                        
                        >
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  onClick={() => console.log('Enviar mensaje')}>                                
                                <ListItemIcon><SendIcon/></ListItemIcon>
                                <ListItemText>Enviar mensajes</ListItemText>
                            </MenuItem> 
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  onClick={() => console.log('Revisar mensajes')}>                                    
                                <ListItemIcon><OpenMenssage/></ListItemIcon>
                                <ListItemText>Revisar mensajes</ListItemText>
                            </MenuItem>
                        </Menu>                            
                        
                        <Button
                            id="pasflu-menu"
                            aria-controls={openPas ? 'pasflu-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openPas ? 'true' : undefined}
                            onClick={handleClickPas}
                            className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} title="Ver y revisar paso anteriores del requerimiento"
                        >
                            <div className="flex flex-col items-center relative">
                                <FlowStepIcon styles='w-10 h-10' strokeWidth='2' />                         
                                <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>Pasos</span>
                                <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>del flujo</span>
                                <KeyboardArrowDownIcon />
                            </div>
                        </Button>
                        <Menu
                            anchorEl={anchorPas}
                            open={openPas}
                            onClose={handleClosePas}
                            MenuListProps={{
                                'aria-labelledby': 'pasflu-button',
                            }}                        
                        >{
                            pasos.map((item) =>
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow peer/steps`}  key={item.id} onClick={() => console.log('Pado del requerimiento' + item.name)}>                                        
                                    <ListItemIcon><span className={`inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white  rounded-full top-1 left-3 ${item.id === request?.request?.FLD_CodigoPaso ? 'bg-sky-600': 'dark:bg-stone-700 bg-stone-300 peer-hover/steps:bg-sky-400'}`}>{item.id}</span></ListItemIcon>
                                    <ListItemText>{item.name} - {item.accion}</ListItemText>                                        
                                </MenuItem>
                            )}  
                        </Menu>
                    </>
                </ContentMenu>
            </div>
            </Slide>        
    )
}