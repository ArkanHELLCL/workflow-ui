/* eslint-disable react/prop-types */
import Dropdown from '@mui/joy/Dropdown';
import Slide from '@mui/material/Slide';
import ListItemButton from '@mui/joy/ListItemButton';
import { usePreview } from "../../hooks/usePreview.jsx";
import ContentMenu from "./contentMenu"
import { OpenFolderIcon, PrinterIcon, DeleteFileIcon } from "../../utils/icons.jsx";

export default function Acciones ({styles, delay}) {
    const { preview } = usePreview()    

    return (        
        preview?.selected && 
        <Slide in={true} direction='left' timeout={delay} mountOnEnter unmountOnExit >
            <div className={styles + ' flex-col h-full relative'}>
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
            </div>
        </Slide>
    )    
}