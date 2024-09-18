/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { DownReportIcon } from "../../utils/icons.jsx";

export default function MantenedoresMenu ({styles, delay, setAnimationEnd}) {
    return (
        <Slide in={true} direction='left' timeout={delay} mountOnEnter unmountOnExit addEndListener={(node, done) =>
            node.addEventListener(
              'transitionend',
              (e) => {                
                setAnimationEnd(true);
                //console.log('mantenedoresMenu end')
                done(e);
              },
              false
            )
          }
          onEnter={() => {setAnimationEnd(false)}}>
            <div className={styles + ' flex-col h-full relative'}>
                <ContentMenu title={'Informe'}>                    
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title="Generar y descargar informe con los registros actuales">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <DownReportIcon styles='w-10 h-10' />
                                <span className="!pt-2">Descargar reporte</span>
                                <span>de registros</span>
                            </div>
                        </ListItemButton>
                    </Dropdown>
                </ContentMenu>
            </div>
        </Slide>
    )    
}