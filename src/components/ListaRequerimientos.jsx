/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import { useFilters } from '../hooks/useFilters.jsx';
import { bandejas } from "../mocks/requerimientos.json";
import { Accordions } from '../components/accordions.jsx'
import { AccordionItem } from "../components/AccordioItem.jsx";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const Accordion = ({acc}) => {
    return(
        <>  
            {acc.length===0 && (
                <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-full w-full !overflow-hidden">
                    <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                </div>            
            )}
            {acc.map((item, index) => (
                <Suspense key={index} fallback={<Loading />}>
                    <AccordionItem key={index} item={item} />
                </Suspense>
            ))}            
        </>
    )
}

export default function ListaRequerimientos(){
    const { filters, filterRequest, setFilters } = useFilters() 
    const { filteredRequest } = filterRequest(bandejas)
    //const { requerimientoAccordion } = Accordions(filteredRequest.slice(0,100), filters)
    const { requerimientoAccordion } = Accordions(filteredRequest, filters)
    const [acc, setAcc] = useState([])

    useEffect(() => {
        setAcc(requerimientoAccordion)
        setFilters({
            ...filters,
            loading: false
        });        
    }, [filters.flujo, filters.orderDes, filters.filter, filters.itemIdSelected, filters.stringSearch, filters.hoy, filters.filterSearch])
    
    return (
        <>
            {filters.loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>                           
                    <Accordion acc={acc}/>                     
                </Suspense>
            )}
        </> 
    )
}