/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from '../../../../hooks/useFilters.jsx';
import { useRecords } from '../../../../hooks/useRecords.jsx';
import Slide from '@mui/material/Slide';
import { ButtonIcon } from '../../../../utils/icons.jsx';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export default function InputButtons({isAllowed}) {   
    const { filters } = useFilters()
    const { record } = useRecords()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollON, setScrollON] = useState(false);    
    let $container = document.getElementById('buttonsRecord');

    const handleScroll = () => {        
        if(!$container) return
        const { scrollLeft, scrollWidth, clientWidth } = $container;
        const position = Math.ceil(
            (scrollLeft / (scrollWidth - clientWidth)) * 100
        );
        setScrollPosition(position);
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);        
    };

    const handleResize = () => {
        if(!$container) return
        const { scrollWidth, clientWidth } = $container;
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);
        handleScroll();        
    };

    function handleEventListener () {    
        $container = document.getElementById('buttonsRecord');    
        if(!$container) return        
        const { scrollWidth, clientWidth } = $container;
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);
        
            $container.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            handleResize(); // Check scroll status on mount

            return () => {
                $container.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
    }

    const handleScrollX = (value) => {
        if(!$container) return
        if (value === -1) $container.scrollLeft -= 200;
        else $container.scrollLeft += 200;
    }

    useEffect(() => {        
        const $header = document.querySelector('header');         
        if(!$header) return        
        setScrollON(false)
        setScrollPosition(0)
    },[filters.itemIdSelected, record])

    return(
        <div id="buttonsRecord" className='frmmantbuttonsact w-full h-full pt-2'>
            <div className='relative leading-tight flex justify-end w-fit ml-auto'> 
            {scrollON && scrollPosition > 0 &&
                    <Button className="!sticky left-[1px] !min-h-full !h-[36px] flex !align-middle !items-center !content-center !w-5 !min-w-5 dark:!bg-[#666666] !bg-[#d4d4d4] opacity-90 !p-0 !rounded-none z-50 hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !outline !outline-1 !outline-[#b8b5b2] dark:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1] !mt-[1px]" onClick={()=>handleScrollX(-1)}>
                        <ButtonIcon typeButton={'btn_retroceder'} styles='dark:text-green-400 text-green-600 w-8 h-[38px]'strokeWidth='1.3' typeIcon={1}/>
                    </Button>
                }
                <div className='flex items-center gap-3 pr-2 pl-[1px] pt-[1px]'>
                    <Slide in={true} direction='left' timeout={500} mountOnEnter unmountOnExit addEndListener={(node, done) =>
                                node.addEventListener(
                                'transitionend',
                                (e) => {
                                    handleEventListener();
                                    done(e);
                                },
                                false
                                )
                            }>
                        <div className='flex'>
                        {
                            <>
                                <button 
                                    key='btn_crear'
                                    id='btn_crear'
                                    className='h-9 w-auto dark:bg-[#444444] bg-white flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                    title='Crear nuevo registro'                                    
                                    form='frmWFRecords'
                                    type='submit'>
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
                                    id='btn_modificar'
                                    className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title='Guardar modificaciones'                                    
                                    form='frmWFRecords'
                                    type='submit'>
                                        <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                        <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                                </button>{
                                    isAllowed &&                        
                                        <button 
                                            key='btn_bloquear'
                                            id='btn_bloquear'
                                            className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                            title='Deshabilitar el registro'                                            
                                            form='frmWFRecords'
                                            type='submit'>
                                                <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                                <span className='text-xs font-normal leading-tight w-fit px-2'>Deshabilitar</span>
                                        </button>
                                    }{
                                    isAllowed !== null && !isAllowed &&                                                
                                        <button 
                                            key='btn_habilitar'
                                            id='btn_habilitar'
                                            className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                            title='Habilitar registro'                                            
                                            form='frmWFRecords'
                                            type='submit'>
                                                <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                                <span className='text-xs font-normal leading-tight w-fit px-2'>Habilitar</span>
                                        </button>
                                    }
                                <button 
                                    key='btn_eliminar'
                                    id='btn_eliminar'
                                    className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title='Eliminar el registro'
                                    form='frmWFRecords'
                                    type='submit'>
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
                                    id='btn_anterior'
                                    className='h-9 w-auto dark:bg-[#444444] bg-white border dark:border-[#575757] border-[#b8b5b2] hover:border-[#0078d4] hover:dark:border-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title='Ir al registro anterior'
                                    type='button'
                                    onClick={() => console.log('reg. anterior')}>
                                        <ButtonIcon typeButton="btn_retroceder" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                                </button>
                                <button 
                                    key='btn_siguiente'
                                    id='btn_siguiente'
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
                {
                    scrollON && scrollPosition <100 &&
                    <>
                        <Button className="!sticky right-[2px] !min-h-full !h-[36px] flex !align-middle !items-center !content-center !w-5 !min-w-5 dark:!bg-[#666666] !bg-[#d4d4d4] opacity-90 !p-0 !rounded-none z-50 hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !outline !outline-1 !outline-[#b8b5b2] dark:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1] !mt-[1px]" onClick={()=>handleScrollX(1)}>
                            <ButtonIcon typeButton={'btn_avanzar'} styles='dark:text-green-400 text-green-600 w-8 h-[38px]'strokeWidth='1.3' typeIcon={1}/>
                        </Button>                   
                    </>
                }
            </div> 
        </div>
        
    )
}