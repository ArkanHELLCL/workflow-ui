/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import { ButtonIcon } from '../../../utils/icons.jsx';

export default function InputReportButton() {    
    return(
        <div id="buttonsReports" className='flex w-full h-full pt-2'>
            <div className='relative leading-tight flex justify-end w-fit ml-auto'>                
                <div className='flex items-center gap-1 pr-2 pl-[1px] pt-[1px]'>
                    <Slide in={true} direction='left' timeout={500} mountOnEnter unmountOnExit >
                        <div className='flex'>
                            <button 
                                key='btn_generar'
                                id='btn_generar'
                                className='h-9 w-auto dark:bg-[#444444] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                title='Generar informe'
                                form='frmWFReports'
                                type='submit'>
                                    <ButtonIcon typeButton="btn_generar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Generar</span>
                            </button>                        
                        </div>
                    </Slide>
                    <Slide in={true} direction='left' timeout={550} mountOnEnter unmountOnExit >
                        <div className='flex'>
                            <button 
                                key='btn_descargar'
                                id='btn_descargar'
                                className='h-9 w-auto dark:bg-[#444444] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                title='Descargar informe'
                                form='frmWFReports'
                                type='submit'>
                                    <ButtonIcon typeButton="btn_descargar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                    <span className='text-xs font-normal leading-tight w-fit px-2'>Descargar</span>
                            </button>                        
                        </div>
                    </Slide>
                </div>
            </div> 
        </div>
        
    )
}