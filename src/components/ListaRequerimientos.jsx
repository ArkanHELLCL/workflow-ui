/* eslint-disable react/prop-types */
import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
import { Requerimiento } from "./Requerimiento.jsx";
import { useFilters } from '../hooks/useFilters.jsx'

import { bandejas } from "../mocks/requerimientos.json";
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";

export function ListaRequerimientos({ defaultTheme }){
    const { filters, filterRequest } = useFilters()  
    const {filteredRequest, requerimientoAccordion} = filterRequest(bandejas)

    const accs=[]
    let acc=[]
    let i;
    for(i=1;i<=requerimientoAccordion.length;i++){
        acc={id:i, open:true};
        accs.push(acc);
    }    
    
    const [isOpen, setIsopen] = useState(accs)
            
    function handleOpenAccordion(id){        
        const idxArray = isOpen.findIndex(item => item.id===id)
        const resultArray = structuredClone(isOpen)
        if(idxArray>=0){        //Cuando existe el elemento en el array            
            resultArray[idxArray].open = !resultArray[idxArray].open            
            setIsopen(resultArray)
        }
    }

    function isOpenAccordion(id){
        const idxArray = isOpen.findIndex(item => item.id===id)
        if(idxArray>=0){ 
            return isOpen[idxArray].open
        }
        return false
    }

    return (                            
        requerimientoAccordion.map((item) => {
            let req = []
            if(filters.filter===1) {                
                req = FilteredRequestbyDate(filters.hoy, item.diaDesde, item.diaHasta, filteredRequest)
            }
            if(filters.filter===2) {                
                req = filteredRequest.filter((req) => req.VRE_Id >= item.diaDesde && req.VRE_Id <= item.diaHasta)
            }      
            if(req.length > 0){
                return(
                    <Accordion open={isOpenAccordion(item.id)} icon={<Icon open={isOpenAccordion(item.id)} pos="top-[8px] left-2" />} className="z-0" key={'acc-'+item.id}>
                        <AccordionHeader 
                            onClick={()=>handleOpenAccordion(item.id)}
                            className={`${defaultTheme.txtc + ' ' + defaultTheme.bgct} ' text-[.7rem] font-bold px-7 truncate dark:bg-[#444444] bg-[#f0f0f0] py-1 hover:dark:bg-[#666666] hover:bg-[#e6f2fa] overflow-hidden`}>
                                {item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + req.length + ')'}
                        </AccordionHeader>
                        <AccordionBody className="py-0">                            
                            <Requerimiento item={req} showDia={item.title === 'Hoy' ? false : true}/>
                        </AccordionBody>
                    </Accordion>                    
                )
            }
        })                          
    )  
}