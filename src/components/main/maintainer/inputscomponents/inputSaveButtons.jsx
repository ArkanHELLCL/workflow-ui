/* eslint-disable react/prop-types */
import { useSpring, animated } from '@react-spring/web';
import { useSnackbar } from 'notistack';
import { ButtonIcon } from '../../../../utils/icons.jsx';

export default function InputButtons({frmRecord, openDialog, setOpenDialog}) {
    const buttonsAnimation1 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',
        from: {
            transform: `translateX(100px)`,
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

    const { enqueueSnackbar } = useSnackbar();
    return(
        <div id="buttonsRecord" className='grid text-right leading-tight absolute right-2 top-6 max-w-[70%] overflow-x-auto'> 
            <div className='flex items-center gap-3 pb-2' id="grpSaveReq">                
                <animated.div key='grpSaveReq' className='flex' style={buttonsAnimation1} id='grpSaveReq'>
                    <button 
                        key='btn_modificar'
                        className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                        title='Guardar modificaciones realizadas'
                        onClick={() => hanldeOnClick(event)}>
                            <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                            <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                    </button>                        
                </animated.div>               
            </div> 
        </div>
        
    )
}