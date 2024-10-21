/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRequest } from '../../hooks/useRequest.jsx';
import { useEffect, useState } from 'react';
import SenderData from './formcontent/header/SenderData.jsx';
import UpdateDate from './formcontent/header/UpdateDate.jsx';
import { Button, Slide } from '@mui/material';
import { ButtonIcon } from '../../utils/icons.jsx';
import { formulario as formularioMant } from '../../mocks/formularioMant.json';
import { useButtonsGroup } from '../../hooks/useButtonsGroup.jsx';

function ButtonsActions({grupos}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollON, setScrollON] = useState(false);    
    let $container = document.getElementById('buttonsMessages');
    

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
        $container = document.getElementById('buttonsMessages');    
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
        <div id="buttonsMessages" className={`frmbuttonsact w-full h-full' `}>
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
                                            form={btns.formulario}
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

function MessageBody({body}) {
    return(
        <div id="MessageBody" className={`frmbody overflow-auto bg-transparent px-0 py-0 w-full`} >
            {body}
        </div>
    )
}

export default function FormMessages({frmMessages}){
    const { request } = useRequest()    
    const { filters } = useFilters()
    const [campos, setCampos] = useState([])
    const { grupos, setGrupos } = useButtonsGroup()

    useEffect(() => {
        const campos = formularioMant.filter(item => item.id === filters.itemIdSelected)[0]?.FOR_Campos        
        const grp = formularioMant.filter((item) => item.id === filters.itemIdSelected)[0]?.FOR_Botones                
        setGrupos(grp)
        setCampos(campos)

        frmMessages.clearErrors()
    },[filters.itemIdSelected, formularioMant, request])

    useEffect(() => {
        frmMessages.clearErrors()
    }, [])
    
    return(        
        request  &&
        <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
            <div className="h-full w-full dataMessages">
                <SenderData />
                <UpdateDate />
                <ButtonsActions grupos={grupos}/>
                <MessageBody body={request?.request?.REQ_Descripcion} frmMessages={frmMessages}/>
            </div>
        </section>        
    )
}