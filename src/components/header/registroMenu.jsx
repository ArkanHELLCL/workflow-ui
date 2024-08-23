/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { TableIconSave, TableIconBlock, TableIconAllow, TableIconDel, TableIconNext, TableIconPrev } from "../../utils/icons.jsx";
//import { useSnackbar } from 'notistack';
import { useRecords } from "../../hooks/useRecords.jsx";

export default function RegistroMenu ({styles, delay, setAnimationEnd}) {
    const { record }   = useRecords()
    async function hanldeOnClick(event){
        event.preventDefault()/*
        const isValid = await frmRecord.trigger()
        if(isValid){
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
        }else{
            enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error" , anchorOrigin : { horizontal: "right", vertical: "bottom"}} )
        }*/
    }

    async function hanldeDelClick(event){
        event.preventDefault()           
    }

    //const { enqueueSnackbar } = useSnackbar();
    return (
        <>
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
                    <ContentMenu title={'Registro'}>                
                        <Dropdown>
                            <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={() => hanldeOnClick(event)} title="Guardar modificaciones realizadas">
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <TableIconSave styles='w-10 h-10' />
                                    <span className="!pt-2">Guardar</span>
                                    <span>cambios</span>
                                </div>
                            </ListItemButton>
                        </Dropdown>{
                        parseInt(record?.record?.estado) === 1 && record.record!== undefined &&
                            <Dropdown>
                                <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('deshanilitar inf')} title="Cambiar el estado del registro a deshabilitado">
                                    <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                        <TableIconBlock styles='w-10 h-10' />
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
                                        <TableIconAllow styles='w-10 h-10' />
                                        <span className="!pt-2">Habilitar</span>
                                        <span>registro</span>
                                    </div>
                                </ListItemButton>
                            </Dropdown>
                        }
                        <Dropdown>
                            <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> hanldeDelClick(event)} title="Eliminación del registro">
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <TableIconDel styles='w-10 h-10' />
                                    <span className="!pt-2">Eliminar</span>
                                    <span>registro</span>
                                </div>
                            </ListItemButton>
                        </Dropdown>
                    </ContentMenu>
                </div>
            </Slide>
            <Slide in={true} direction='left' timeout={delay + 100} mountOnEnter unmountOnExit addEndListener={(node, done) =>
            node.addEventListener(
              'transitionend',
              (e) => {                
                setAnimationEnd(true);
                done(e);
              },
              false
            )
          }>
                <div className={styles + ' flex-col h-full relative'}>
                    <ContentMenu title={'Revisar'}>
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
                    </ContentMenu>
                </div>
            </Slide>
        </> 
    )    
}