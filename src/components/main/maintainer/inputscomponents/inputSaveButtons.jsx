/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
//import { useSnackbar } from 'notistack';
import { ButtonIcon } from '../../../../utils/icons.jsx';

export default function InputButtons() {    
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

    //const { enqueueSnackbar } = useSnackbar();
    return(
        <div id="buttonsRecord" className='grid text-right leading-tight absolute right-2 top-6 max-w-[70%] overflow-x-auto'> 
            <div className='flex items-center gap-3 pb-2 pt-1 pr-[1px] pl-1' id="grpSaveReq">                
                <Slide in={true} direction='left' timeout={500} mountOnEnter unmountOnExit addEndListener={(node, done) =>
                    node.addEventListener(
                        'transitionend',
                        (e) => {
                        console.log('Actually done');
                        done(e);
                        },
                        false
                    )
                }>
                    <div className='flex'>
                        <button 
                            key='btn_modificar'
                            className='h-9 w-auto dark:bg-[#444444] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                            title='Guardar modificaciones realizadas'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                        </button>                        
                    </div>
                </Slide>
            </div> 
        </div>
        
    )
}