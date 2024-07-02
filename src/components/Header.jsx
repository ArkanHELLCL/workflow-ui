/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import Loading from "../utils/Loading.jsx";

import { useRequest } from "../hooks/useRequest.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { formulario } from '../mocks/formulario.json'

import ConfirmationDialog from "./main/ConfirmationDialog.jsx";
import {
    CrearMenu,
    RequerimientoMenu,
    AdjuntarMenu,
    AccionesMenu,
    FormularioMenu,
    GuardarMenu,
    MantenedoresMenu,
    InformesMenu
} from "./header/";

export default function Header({openDialog, setOpenDialog}){
   const { request } = useRequest()
   const { filters } = useFilters()
   const [grupos, setGrupos] = useState(null);
   //const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":""})

   useEffect(() => {
        //const { FOR_Botones } = formulario.VFO_Id === request?.request?.VFO_Id;
        let FOR_Botones
        formulario.VFO_Id === request?.request?.VFO_Id ? FOR_Botones = formulario.FOR_Botones : FOR_Botones = null        
        setGrupos(FOR_Botones?.map(grupo => grupo))
    },[formulario,request])

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }    
    const mantSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "m")
    const repoSelected = filters.itemIdSelected.length===2 && (filters.itemIdSelected.charAt(0) === "r")    
    return (        
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-start justify-start px-2 pt-2 pb-0 transition-color delay-75 drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] ml-14 relative dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0 z-10 dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100 min-h-[145px] h-[160px] overflow-hidden'
        onDragOver={handleNotDragOver}>
            <Suspense fallback={<Loading />}>
                <CrearMenu styles={'z-50 h-full'} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                {
                    request && 
                    <>
                        <RequerimientoMenu styles={'z-40 h-full'} request={request} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                        {
                            
                            request?.selected &&
                            <>
                                <AccionesMenu  styles={'z-30 h-full'}/>
                                <GuardarMenu  styles={'z-20 h-full'}/>                                
                            </>
                        }
                        <AdjuntarMenu styles={'z-10 h-full'}/>
                        <FormularioMenu styles={'z-10 h-full'} grupos={grupos} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                    </>
                }
                {
                    mantSelected &&                     
                        <MantenedoresMenu styles={'z-40 h-full'}/>
                }
                {
                    repoSelected &&         
                        <InformesMenu styles={'z-40 h-full'} />                    
                }                
            </Suspense>{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }
        </header>
    )
}