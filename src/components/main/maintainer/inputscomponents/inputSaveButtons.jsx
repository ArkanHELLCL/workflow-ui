/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import { ButtonIcon } from '../../../../utils/icons.jsx';

export default function InputButtons() {    
    return(
        <div id="buttonsRecord" className='frmmantbuttonsact w-full h-full pt-2'>
            <div className='relative leading-tight flex justify-end w-fit ml-auto'>                
                <div className='flex items-center gap-3 pr-2 pl-[1px] pt-[1px]'>
                    <Slide in={true} direction='left' timeout={500} mountOnEnter unmountOnExit >
                        <div className='flex'>
                            <button 
                                key='btn_modificar'
                                id='btn_modificar'
                                className='h-9 w-auto dark:bg-[#444444] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                title='Guardar modificaciones'
                                form='frmWFRecords'
                                type='submit'>
                                    <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                            </button>                        
                        </div>
                    </Slide>
                </div>
            </div> 
        </div>
        
    )
}