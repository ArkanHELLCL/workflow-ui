/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import Loading from "../utils/Loading.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { useRecords } from "../hooks/useRecords.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { formulario } from '../mocks/formulario.json'
import { formulario as formmant } from '../mocks/formularioMant.json'
import { CrearMenu, RequerimientoMenu, AdjuntarMenu, AccionesMenu, FormularioMenu, GuardarMenu, MantenedoresMenu, InformesMenu, BandejaMenu, RegistroMenu } from "./header/index.jsx";
import { ButtonIcon } from "../utils/icons.jsx";
import { Button } from "@mui/material";

export default function Header(){
    const { request } = useRequest()
    const { record } = useRecords()
    const { filters } = useFilters()
    const [grupos, setGrupos] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollON, setScrollON] = useState(false);
    const [animationEnd, setAnimationEnd] = useState(true);

    const calcScroll = () => {
        const $header = document.querySelector('header'); 
        if(!$header) return 
        if(!animationEnd) {
            //console.log('calcScroll !animacion :', animationEnd, 'scrolon : ' , scrollON)
            setScrollON(false)
            setScrollPosition(0)
            $header.scrollLeft = 0
            return
        }
        //console.log('calcScroll animacion :', animationEnd, 'scrolon : ' , scrollON)
        const { scrollLeft, scrollWidth, clientWidth } = $header;
        const position = Math.ceil(
            (scrollLeft / (scrollWidth - clientWidth)) * 100
        );
        //console.log('calcScroll', position, scrollLeft, scrollWidth, clientWidth)
        setScrollPosition(position ? position : 0);
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);        
    }

    const handleScroll = () => {
        //const $btnRight = document.getElementById('btn_scrollRightHeader');        
        //console.log($btnRight?.getBoundingClientRect().left , $header.getBoundingClientRect().left)
        //if($btnRight?.getBoundingClientRect().left > $header.getBoundingClientRect().left) return
        //console.log('handleScroll', animationEnd)
        if(animationEnd)
            calcScroll()
    };

    const handleResize = () => {
        //console.log('handleResize')
        calcScroll()       
    };

    useEffect(() => { 
        const $header = document.querySelector('header');               
        if(!$header) return
        //console.log('useEffect-1 animacion :', animationEnd, 'scrolon : ' , scrollON)
        $header.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);        
        return () => {
            $header.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };        
    }, []);

    useEffect(() => {       
        //console.log('useEffect-2 animacion :', animationEnd, 'scrolon : ' , scrollON) 
        calcScroll()
    },[animationEnd])

    useEffect(() => {        
        const $header = document.querySelector('header');         
        if(!$header) return 
        //console.log('useEffect-3 animacion :', animationEnd, 'scrolon : ' , scrollON)
        setScrollON(false)
        setScrollPosition(0)
        calcScroll()
    },[filters.itemIdSelected, request, record, formulario])

    const handleScrollX = (value) => {
        const $header = document.querySelector('header');
        if(!$header) return        
        if (value === -1) $header.scrollLeft -= 200;
        else $header.scrollLeft += 200;        
        //console.log('handleScrollX', scrollPosition)
        calcScroll();        
    }
    
    useEffect(() => {
        let FOR_Botones = null
        if(filters.itemIdSelected.charAt(0) === "b")
            if(request?.request?.VFO_Id)
                FOR_Botones = formulario.filter((item) => parseInt(item.VFO_Id) === parseInt(request?.request?.VFO_Id) && item.Bandeja === request?.request?.Bandeja)[0]?.FOR_Botones
            else
                FOR_Botones = formulario.filter((item) => parseInt(item.VFO_Id) === 0 && item.Bandeja === request?.request?.Bandeja)[0]?.FOR_Botones

        if(filters.itemIdSelected.charAt(0) === "m")
            FOR_Botones = formmant.filter((item) => item.id === filters.itemIdSelected)[0]?.FOR_Botones
        
        setGrupos(FOR_Botones?.map(grupo => grupo))
    },[formulario,request,filters.itemIdSelected,record])

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }

    const banSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "b")
    const mantSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "m")    
    const repoSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "r")
    //const mensSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "j")
    
    return (
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-start justify-start px-2 py-2 transition-all delay-75 drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100 h-full overflow-x-auto'
        onDragOver={handleNotDragOver}
        id="header">
            {scrollON && scrollPosition > 0 &&
                <Button className="!sticky -left-[7px] !-top-[0px] !min-h-[141px] !h-[141px] flex !align-middle !items-center !content-center !w-7 !min-w-7 dark:!bg-[#666666] !bg-[#d4d4d4] opacity-90 !p-0 !rounded-none !-mt-2 z-50 hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !outline !outline-1 !outline-[#b8b5b2] dark:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1]" onClick={()=>handleScrollX(-1)} id="btn_scrollLeftHeader">
                    <ButtonIcon typeButton={'btn_retroceder'} styles='dark:text-green-400 text-green-600 w-8 h-8'strokeWidth='1.3' typeIcon={1}/>
                </Button>
             }
            <Suspense fallback={<Loading />}>
                <CrearMenu styles={'z-50 h-full'} delay={500} setAnimationEnd={setAnimationEnd}/>
                {
                    banSelected &&
                    <>
                        <BandejaMenu styles={'z-40'} delay={600} setAnimationEnd={setAnimationEnd}/>                        
                        <RequerimientoMenu styles={'z-40'} delay={500} setAnimationEnd={setAnimationEnd}/>
                        <AccionesMenu  styles={'z-30'} delay={500} setAnimationEnd={setAnimationEnd}/>
                        <GuardarMenu  styles={'z-20'} delay={600} setAnimationEnd={setAnimationEnd}/>
                        <AdjuntarMenu styles={'z-10'} delay={600} setAnimationEnd={setAnimationEnd}/>
                        <FormularioMenu styles={'z-10'} grupos={grupos} delay={700} setAnimationEnd={setAnimationEnd}/>
                    </>
                }
                {
                    mantSelected &&  
                        <>
                            <MantenedoresMenu styles={'z-40'} delay={500} setAnimationEnd={setAnimationEnd}/>{
                            record &&
                                <RegistroMenu styles={'z-40'} grupos={grupos} delay={550} setAnimationEnd={setAnimationEnd}/>
                            }
                        </>
                }
                {
                    repoSelected &&         
                        <InformesMenu styles={'z-40'} delay={500} setAnimationEnd={setAnimationEnd}/>                    
                }                
            </Suspense>{
                scrollON && scrollPosition < 100 &&
                <>
                    <Button className="!sticky -right-[8px] !-top-[0px] !min-h-[141px] !h-[141px] flex !align-middle !items-center !content-center !w-7 !min-w-7 dark:!bg-[#666666] !bg-[#d4d4d4] opacity-90 !p-0 !rounded-none !-mt-2 z-50 hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !outline !outline-1 !outline-[#b8b5b2] dark:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1]" onClick={()=>handleScrollX(1)} id="btn_scrollRightHeader">
                        <ButtonIcon typeButton={'btn_avanzar'} styles='dark:text-green-400 text-green-600 w-8 h-8'strokeWidth='1.3' typeIcon={1}/>
                    </Button>                   
                </>
            }
        </header>
    )
}