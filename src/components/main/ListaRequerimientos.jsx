/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Accordions } from './request/accordions.jsx'
import { AccordionItem } from "./request/AccordioItem.jsx";
import Loading from "../../utils/Loading.jsx";

const Accordion = ({acc, moreItems}) => {    
    return(
        <>  
            {acc.length===0 && 
                <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[50vh] w-full !overflow-hidden">
                    <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                </div>            
            }
            {acc.map((item, index) => (
                <Suspense key={index} fallback={<Loading />}>
                    <AccordionItem key={index} item={item}/>
                </Suspense>
            ))}{
                moreItems ? 
                    <div className="!text-xs font-semibold !text-center !text-stone-500 dark:!text-stone-100 flex flex-col py-3 gap-3">
                        <span>Hay más elementos en esta carpeta en el servidor</span>
                        <label htmlFor="btnMore" className="underline font-semibold text-xs text-[#2c87d2] cursor-pointer">Haga click aquí para ver más sobre elementos de esta carpeta</label>
                        <button id="btnMore" className="hidden" onClick={()=>console.log("Ver más")}></button>
                    </div>
                    : null
                }
        </>
    )
}

export default function ListaRequerimientos({filteredRequest, maxRecordLoaded}){    
    const { requerimientoAccordion } = Accordions(filteredRequest)    
    const moreItems = filteredRequest?.length === maxRecordLoaded ? true : false
    
    return (        
        <Accordion acc={requerimientoAccordion} moreItems={moreItems}/>
    )
}