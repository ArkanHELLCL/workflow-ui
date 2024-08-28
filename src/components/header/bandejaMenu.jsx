/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Dropdown from '@mui/joy/Dropdown';
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu"
import {DownReportIcon, TableIconNext, TableIconPrev} from "../../utils/icons.jsx";
import { ListItemButton } from '@mui/material';
import { useRequest } from '../../hooks/useRequest';

export default function BandejaMenu ({styles, delay, setAnimationEnd}) {
    const { request } = useRequest();

    return (
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
            <div className={styles + ' flex-col h-full relative'}>
                <ContentMenu title={'Bandeja'} styles={styles} className="flex-col h-full">
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title='Generar y descargar informe con los registro actuales'>
                            <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                                <DownReportIcon styles='w-10 h-10' />
                                <span className="!pt-2">Descargar reporte</span>
                                <span>de registros</span>
                            </div>
                        </ListItemButton>
                    </Dropdown>{
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
                            <div className='flex'>
                                <Dropdown>
                                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('crear reg')} title="Ir al registro anterior">
                                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-7">
                                            <TableIconPrev styles='w-10 h-10' />
                                            <span className="!pt-2">Registro</span>
                                            <span>anterior</span>
                                        </div>
                                    </ListItemButton>                
                                </Dropdown>
                                <Dropdown>
                                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title="Ir al registro siguiente">
                                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                            <TableIconNext styles='w-10 h-10' />
                                            <span className="!pt-2">Registro</span>
                                            <span>siguiente</span>
                                        </div>
                                    </ListItemButton>
                                </Dropdown> 
                            </div>
                        </Slide>
                    }
                </ContentMenu>
            </div>
        </Slide>
    )    
}