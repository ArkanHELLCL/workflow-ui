/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
//import { useSnackbar } from 'notistack';
import { ButtonIcon } from '../../../../utils/icons.jsx';

export default function InputButtons({isAllowed}) {        
    async function hanldeOnClick(event){
        event.preventDefault()
        /*const isValid = await frmRecord.trigger()
        if(isValid){
            setOpenDialog({
                ...openDialog,
                titulo:'Guardar modificaciones',
                mensaje:'¿Desaea guardar las modificaciones realizadas?',
                id:'edit',
                open:true,
                frmname:'frmWFRecords',
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

    async function hanldeNewClick(event){
        event.preventDefault()                    
    }

    //const { enqueueSnackbar } = useSnackbar();
    return(
        <div id="buttonsRecord" className='grid text-right leading-tight absolute right-2 top-6 max-w-[60%] overflow-x-auto'> 
            <div className='flex items-center gap-3 pb-2 pt-1 pr-[1px] pl-1' id="grpReq">
                <Slide in={true} direction='left' timeout={500} mountOnEnter unmountOnExit >
                    <div className='flex'>
                    {
                        <>
                            <button 
                                key='btn_crear'
                                className='h-9 w-auto dark:bg-[#444444] bg-white flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                title='Crear nuevo registro'
                                type='button'
                                onClick={() => hanldeNewClick(event)}>
                                    <ButtonIcon typeButton="btn_crear" styles='w-7 h-7'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Nuevo</span>
                            </button>
                        </>
                    }
                    </div>
                </Slide>
                <Slide in={true} direction='left' timeout={600} mountOnEnter unmountOnExit >
                    <div className='flex'>
                    {
                        <>
                            <button 
                                key='btn_modificar'
                                className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                title='Guardar modificaciones realizadas'
                                onClick={() => hanldeOnClick(event)}>
                                    <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                            </button>{
                                isAllowed &&                        
                                    <button 
                                        key='btn_bloquear'
                                        className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                        title='Cambiar el estado del registro a deshabilitado'
                                        type='button'
                                        onClick={() => console.log('deshabiloitar')}>
                                            <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                            <span className='text-xs font-normal leading-tight w-fit px-2'>Deshabilitar</span>
                                    </button>
                                }{
                                isAllowed !== null && !isAllowed &&                                                
                                    <button 
                                        key='btn_habilitar'
                                        className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                        title='Cambiar el estado del registro a habilitado'
                                        type='button'
                                        onClick={() => console.log('habilitar')}>
                                            <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                            <span className='text-xs font-normal leading-tight w-fit px-2'>Habilitar</span>
                                    </button>
                                }
                            <button 
                                key='btn_eliminar'
                                className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                title='Eliminación del registro'
                                type='button'
                                onClick={hanldeDelClick}>
                                    <ButtonIcon typeButton="btn_eliminar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Eliminar</span>
                            </button>
                        </>
                    }
                    </div>
                </Slide>
                <Slide in={true} direction='left' timeout={700} mountOnEnter unmountOnExit >
                    <div className='flex'>
                    {
                        <>
                            <button 
                                key='btn_anterior'
                                className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                title='Ir al registro anterior'
                                type='button'
                                onClick={() => console.log('reg. anterior')}>
                                    <ButtonIcon typeButton="btn_retroceder" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                            </button>
                                <button 
                                key='btn_siguiente'
                                className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                title='Ir al registro siguiente'
                                type='button'
                                onClick={() => console.log('reg. siguiente')}>
                                    <ButtonIcon typeButton="btn_avanzar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                            </button>
                        </>
                    }
                    </div>
                </Slide>
            </div> 
        </div>
        
    )
}