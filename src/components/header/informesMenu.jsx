/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { 
    GenReportIcon,
    DownReportIcon
    } from "../../utils/icons.jsx";

export default function Informes ({styles, delay}) {
    return (
        <Slide in={true} direction='left' timeout={delay} mountOnEnter unmountOnExit addEndListener={(node, done) =>
            node.addEventListener(
              'transitionend',
              (e) => {
                //console.log('Actually done');
                done(e);
              },
              false
            )
          }>
            <div className={styles + ' flex-col h-full relative'}>
                <ContentMenu title={'Informe del sistema'}>
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('generar inf')} title="Generar informe seleccionado">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <GenReportIcon styles='w-9 h-9'/>
                                <span className="!pt-2">Generar</span>
                                <span>informe</span>
                            </div>
                        </ListItemButton>                
                    </Dropdown>
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title="Decargar informe generado">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <DownReportIcon styles='w-9 h-9' />
                                <span className="!pt-2">Descargar infrome</span>
                                <span>resultado</span>
                            </div>
                        </ListItemButton>                
                    </Dropdown>   
                </ContentMenu>
            </div>
        </Slide>
    )    
}