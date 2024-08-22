/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import Loading from "../utils/Loading.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { useRecords } from "../hooks/useRecords.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { formulario } from '../mocks/formulario.json'
import ConfirmationDialog from "./main/ConfirmationDialog.jsx";
import { CrearMenu, RequerimientoMenu, AdjuntarMenu, AccionesMenu, FormularioMenu, GuardarMenu, MantenedoresMenu, InformesMenu, BandejaMenu, RegistroMenu } from "./header/index.jsx";
import { ButtonIcon } from "../utils/icons.jsx";
import { Button } from "@mui/material";

export default function Header({openDialog, setOpenDialog}){
    const { request } = useRequest()
    const { record } = useRecords()
    const { filters } = useFilters()
    const [grupos, setGrupos] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollON, setScrollON] = useState(false);    
    const $header = document.querySelector('header');

    const handleScroll = () => {        
        if(!$header) return
        const { scrollLeft, scrollWidth, clientWidth } = $header;
        const position = Math.ceil(
            (scrollLeft / (scrollWidth - clientWidth)) * 100
        );
        setScrollPosition(position);
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);
        console.log('scroll', scrollLeft, scrollWidth, clientWidth, position)
    };

    const handleResize = () => {
        if(!$header) return
        const { scrollWidth, clientWidth } = $header;
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);
        handleScroll();
        console.log('scrollON',scrollON, scrollPosition, scrollWidth, clientWidth)
        
    };

    useEffect(() => {
        if(!$header) return
        const { scrollWidth, clientWidth } = $header;
        setScrollON(parseInt(scrollWidth) > parseInt(clientWidth) ? true : false);
        
            $header.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            handleResize(); // Check scroll status on mount

            return () => {
                $header.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        
    }, [formulario,request]);

    useEffect(() => {
        let FOR_Botones = null
        if(filters.itemIdSelected.charAt(0) === "b")
            if(request?.request?.VFO_Id)
                FOR_Botones = formulario.filter((item) => parseInt(item.VFO_Id) === parseInt(request?.request?.VFO_Id) && item.Bandeja === request?.request?.Bandeja)[0]?.FOR_Botones
            else
                FOR_Botones = formulario.filter((item) => parseInt(item.VFO_Id) === 0 && item.Bandeja === request?.request?.Bandeja)[0]?.FOR_Botones
        
        setGrupos(FOR_Botones?.map(grupo => grupo))
    },[formulario,request])

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }    

    const handleScrollX = (value) => {
        if(!$header) return
        if (value === -1) $header.scrollLeft -= 200;
        else $header.scrollLeft += 200;
    }

    const banSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "b")
    const mantSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "m")    
    const repoSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "r")
    //const mensSelected = filters.itemIdSelected.length>=2 && (filters.itemIdSelected.charAt(0) === "j")
    
    return (        
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-start justify-start px-2 py-2 transition-color delay-75 drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] ml-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100 min-h-[145px] h-[160px] overflow-x-auto'
        onDragOver={handleNotDragOver}
        
        >
            {scrollON && scrollPosition > 0 &&
                <Button className="!sticky -left-2 top-0 h-full flex !align-middle !items-center !content-center !w-7 !min-w-7 dark:!bg-[#666666] !bg-[#b1d6f0] opacity-90 !px-0 !rounded-none  !py-0 min-h-[145px] !-mt-2 z-50"
                onClick={()=>handleScrollX(-1)}>
                    <ButtonIcon typeButton={'btn_retroceder'} styles='text-green-400 w-8 h-8'strokeWidth='1.3' typeIcon={1}/>
                </Button>
             }
            <Suspense fallback={<Loading />}>
                <CrearMenu styles={'z-50 h-full'} delay={500}/>
                {
                    banSelected &&
                    <>
                        <BandejaMenu styles={'z-40'} delay={600}/>                        
                        <RequerimientoMenu styles={'z-40'} delay={500}/>
                        <AccionesMenu  styles={'z-30'} delay={500}/>
                        <GuardarMenu  styles={'z-20'} delay={600}/>
                        <AdjuntarMenu styles={'z-10'} delay={600}/>
                        <FormularioMenu styles={'z-10'} grupos={grupos} delay={700}/>
                    </>
                }
                {
                    mantSelected &&  
                        <>
                            <MantenedoresMenu styles={'z-40'} delay={500}/>{
                            record &&
                                <RegistroMenu styles={'z-40'} delay={500}/>
                            }
                        </>
                }
                {
                    repoSelected &&         
                        <InformesMenu styles={'z-40'} delay={500} />                    
                }                
            </Suspense>{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }{
                scrollON && scrollPosition <100 &&
                <>
                    <Button className="!sticky -right-[8px] top-0 h-full flex !align-middle !items-center !content-center !w-7 !min-w-7 dark:!bg-[#666666] !bg-[#b1d6f0] opacity-90 !px-0 !rounded-none !py-0 min-h-[145px] !-mt-2 z-50"
                    onClick={()=>handleScrollX(1)}>
                        <ButtonIcon typeButton={'btn_avanzar'} styles='text-green-400 w-8 h-8'strokeWidth='1.3' typeIcon={1}/>
                    </Button>                   
                </>
            }
        </header>
    )
}