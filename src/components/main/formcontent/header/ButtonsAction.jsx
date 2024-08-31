/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import { ButtonIcon } from '../../../../utils/icons.jsx';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Buttons({formulario}){
    const { FOR_Botones } = formulario;
    const grupos = FOR_Botones?.map(grupo => grupo)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollON, setScrollON] = useState(false);    
    let $container = document.getElementById('buttonsRequest');

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
        $container = document.getElementById('buttonsRequest');    
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

    return(
        <div id="buttonsRequest" className='frmbuttonsact w-full h-full'>
            <div className='relative leading-tight flex justify-end w-fit ml-auto'>
                {scrollON && scrollPosition > 0 &&
                    <Button className="!sticky left-[1px] !min-h-full !h-[36px] flex !align-middle !items-center !content-center !w-5 !min-w-5 dark:!bg-[#666666] !bg-[#d4d4d4] opacity-90 !p-0 !rounded-none z-50 hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !outline !outline-1 !outline-[#b8b5b2] dark:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1] !mt-[1px]" onClick={()=>handleScrollX(-1)}>
                        <ButtonIcon typeButton={'btn_retroceder'} styles='dark:text-green-400 text-green-600 w-8 h-[38px]'strokeWidth='1.3' typeIcon={1}/>
                    </Button>
                }
                <div className='flex items-center gap-3 pr-2 pl-[1px] pt-[1px]'>
                {
                    grupos?.map(grp => {
                        return (
                            <Slide key={grp[0].id} in={true} direction='left' timeout={500} mountOnEnter unmountOnExit addEndListener={(node, done) =>
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
                                    grp[0].botones.map(btns =>
                                        <button 
                                            key={btns.id} 
                                            className='h-9 w-auto dark:bg-[#444444] bg-white flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                            title={btns.nombre}
                                            id={btns.id} 
                                            type={btns.type}
                                            >
                                                <ButtonIcon typeButton={btns.id} styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>{
                                                    btns.nombre &&
                                                    <span className='text-xs font-normal leading-tight w-fit px-2'>{btns.nombre}</span>
                                                }
                                        </button>
                                    )
                                }
                                </div>
                            </Slide>
                        )
                    })
                }
                </div>{
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