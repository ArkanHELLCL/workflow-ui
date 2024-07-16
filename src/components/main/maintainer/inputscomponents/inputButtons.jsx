/* eslint-disable react/prop-types */
import { useSpring, animated } from '@react-spring/web';
import { useSnackbar } from 'notistack';
import { ButtonIcon } from '../../../../utils/icons.jsx';

export default function InputButtons({frmRecord, openDialog, setOpenDialog, isAllowed, setFilesList, setRecord}) {
    const buttonsAnimation1 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',
        //config: { duration: 100 },
        from: {
            transform: `translateX(100px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });

    const buttonsAnimation2 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',   
        //config: { duration: 50 },     
        from: {
            transform: `translateX(400px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });

    const buttonsAnimation3 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',  
        //config: { duration: 10 },      
        from: {
            transform: `translateX(450px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });
    
    async function hanldeOnClick(event){
        event.preventDefault()
        const isValid = await frmRecord.trigger()
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
            enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error" })
        }
    }

    async function hanldeDelClick(event){
        event.preventDefault()
        setOpenDialog({
            ...openDialog,
            titulo:'Eliminar registro',
            mensaje:'¿Desaes elimnar el registro actual?',
            id:'del',
            open:true,
            frmname:'frmWFRecords',
            action:'button',
            type:'button'
        })        
    }

    async function hanldeNewClick(event){
        event.preventDefault()
        frmRecord.reset('', {
            keepValues: false,
        })
        frmRecord.clearErrors()
        setFilesList([])
        setRecord({"record":{"Id":0}})
        const elToRemove = document.getElementsByClassName('reqselected')[0]
        elToRemove?.classList.remove('reqselected')
        setOpenDialog({
            ...openDialog,
            titulo:'Crear  registro',
            mensaje:'¿Desaes crear un nuebo registro?',
            id:'new',
            open:true,
            frmname:'frmWFRecords',
            action:'button',
            type:'button'
        })        
    }

    const { enqueueSnackbar } = useSnackbar();
    return(
        <div id="buttonsRecord" className='grid text-right leading-tight absolute right-2 top-6'> 
            <div className='flex items-center gap-3 pb-2' id="grpReq">
                <animated.div key='grpReq-3' className='flex' style={buttonsAnimation3} id='grpReq-3'>
                {
                    <>
                        <button 
                            key='btn_crear'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Crear nuevo registro'
                            type='button'
                            onClick={() => hanldeNewClick(event)}>
                                <ButtonIcon typeButton="btn_crear" styles='w-7 h-7'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Nuevo</span>
                        </button>
                    </>
                }
                </animated.div>
                
                <animated.div key='grpReq-2' className='flex' style={buttonsAnimation2} id='grpReq-2'>
                {
                    <>
                        <button 
                            key='btn_modificar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Guardar modificaciones realizadas'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                        </button>{
                            isAllowed &&                        
                                <button 
                                    key='btn_bloquear'
                                    className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
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
                                    className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title='Cambiar el estado del registro a habilitado'
                                    type='button'
                                    onClick={() => console.log('habilitar')}>
                                        <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                        <span className='text-xs font-normal leading-tight w-fit px-2'>Habilitar</span>
                                </button>
                            }
                        <button 
                            key='btn_eliminar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Eliminación del registro'
                            type='button'
                            onClick={hanldeDelClick}>
                                <ButtonIcon typeButton="btn_eliminar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Eliminar</span>
                        </button>
                    </>
                }
                </animated.div>

                <animated.div key='grpReq-1' className='flex' style={buttonsAnimation1} id='grpReq-1'>
                {
                    <>
                        <button 
                            key='btn_anterior'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Ir al registro anterior'
                            type='button'
                            onClick={() => console.log('reg. anterior')}>
                                <ButtonIcon typeButton="btn_retroceder" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                            <button 
                            key='btn_siguiente'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Ir al registro siguiente'
                            type='button'
                            onClick={() => console.log('reg. siguiente')}>
                                <ButtonIcon typeButton="btn_avanzar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                    </>
                }
                </animated.div>
            </div> 
        </div>
        
    )
}