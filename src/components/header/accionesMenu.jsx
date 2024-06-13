/* eslint-disable react/prop-types */
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';


import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu"
import {     
    OpenFolderIcon,
    PrinterIcon,
    DeleteFileIcon
    } from "../../utils/icons.jsx";


export default function Acciones ({styles}) {
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
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('abrir doc')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-11">
                            <OpenFolderIcon styles='h-11 w-11'/>
                            <span>Abrir</span>
                        </div>
                    </ListItemButton>                    
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('imprimir doc')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <PrinterIcon styles='h-11 w-11' strokeWidth="2"/>
                            <span>Impresión</span>
                            <span>rápida</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('eliminar adj')}>
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