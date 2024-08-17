/* eslint-disable react/prop-types */
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { usePreview } from "../../hooks/usePreview.jsx";
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu"
import {     
    OpenFolderIcon,
    PrinterIcon,
    DeleteFileIcon
    } from "../../utils/icons.jsx";

const AnimateMenuActions = ({styles}) => {
    const  menuAppear = useSpring({        
        to:{
            transform:'translateX(0px)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translateX(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });
    return (
        <animated.div style={menuAppear} styles={styles} className="flex-col h-full">
            <ContentMenu title={'Acciones'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('abrir doc')} title='Abrir documento adjunto'>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                            <OpenFolderIcon styles='h-11 w-11'/>
                            <span>Abrir</span>
                        </div>
                    </ListItemButton>                    
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('imprimir doc')} title='Enviar adjunto a la impresora'>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                            <PrinterIcon styles='h-11 w-11' strokeWidth="2"/>
                            <span>Impresión</span>
                            <span>rápida</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('eliminar adj')} title='Eliminar adjunto del listado'>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
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

export default function Acciones ({styles}) {
    const { preview } = usePreview()    

    return (        
        preview?.selected && 
            <AnimateMenuActions styles={styles}/>
    )    
}