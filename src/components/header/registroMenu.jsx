/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"

import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import {    
    TableIconSave,
    TableIconBlock,
    TableIconAllow,
    TableIconDel,
    TableIconNext,
    TableIconPrev
    } from "../../utils/icons.jsx";
    import { useSnackbar } from 'notistack';
import { useRecords } from "../../hooks/useRecords.jsx";

export default function RegistroMenu ({styles, openDialog, setOpenDialog, frmRecord}) {
    const { record }   = useRecords()
    async function hanldeOnClick(event){
        event.preventDefault()
        const isValid = await frmRecord.trigger()
        if(isValid){
            //if(btns?.dialogo==='confirm'){
                setOpenDialog({
                    ...openDialog,
                    titulo:'Guardar modificaciones',
                    mensaje:'¿Desaea guardar las modificaciones realizadas?',
                    id:'edit',
                    open:true,
                    frmname:'frmRecord',
                    action:'submit',
                    type:'button'
                })
            //}
        }else{
            enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error" })
        }
    }

    const { enqueueSnackbar } = useSnackbar();

    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 200 },
        delay: 200
    });

    const  menuAppearR = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 250 },
        delay: 200
    });
    return (
        <>
            <animated.div style={menuAppear} styles={styles} className="flex-col h-full">
                <ContentMenu title={'Registro'}>                
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={() => hanldeOnClick(event)} title="Guardar modificaciones realizadas">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <TableIconSave styles='w-9 h-9' />
                                <span className="!pt-2">Guardar</span>
                                <span>cambios</span>
                            </div>
                        </ListItemButton>
                    </Dropdown>{
                    parseInt(record?.record?.estado) === 1 && record.record!== undefined &&
                        <Dropdown>
                            <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('deshanilitar inf')} title="Cambiar el estado del registro a deshabilitado">
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <TableIconBlock styles='w-9 h-9' />
                                    <span className="!pt-2">Deshabilitar</span>
                                    <span>registro</span>
                                </div>
                            </ListItemButton>
                        </Dropdown>
                    }{
                    parseInt(record?.record?.estado) === 0 && record.record!== undefined &&
                        <Dropdown>
                            <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('habilitar inf')} title="Cambiar el estado del registro a habilitado">
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <TableIconAllow styles='w-9 h-9' />
                                    <span className="!pt-2">Habilitar</span>
                                    <span>registro</span>
                                </div>
                            </ListItemButton>
                        </Dropdown>
                    }
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title="Eliminación del registro">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <TableIconDel styles='w-9 h-9' />
                                <span className="!pt-2">Eliminar</span>
                                <span>registro</span>
                            </div>
                        </ListItemButton>
                    </Dropdown>
                </ContentMenu>
            </animated.div>

            <animated.div style={menuAppearR} styles={styles} className="flex-col h-full">
                <ContentMenu title={'Revisar'}>
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('crear reg')} title="Ir al registro anterior">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-7">
                                <TableIconPrev styles='w-9 h-9' />
                                <span className="!pt-2">Registro</span>
                                <span>anterior</span>
                            </div>
                        </ListItemButton>                
                    </Dropdown>
                    <Dropdown>
                        <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title="Ir al registro siguiente">
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <TableIconNext styles='w-9 h-9' />
                                <span className="!pt-2">Registro</span>
                                <span>siguiente</span>
                            </div>
                        </ListItemButton>
                    </Dropdown>                    
                </ContentMenu>
            </animated.div>
        </> 
    )    
}