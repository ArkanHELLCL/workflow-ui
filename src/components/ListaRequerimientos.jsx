/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, Suspense, useEffect, useState } from "react";
import { useFilters } from '../hooks/useFilters.jsx';
import { bandejas } from "../mocks/requerimientos.json";
import { Accordions } from '../components/accordions.jsx'
import { AccordionItem } from "../components/AccordioItem.jsx";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const Accordion = ({acc, showDiaRef}) => {
    return(
        <>  {acc.length===0 && (
                <div className="text-center flex justify-center h-full align-middle items-center">
                    <span className='text-[#2c87d2] text-xl'>No se encontraron registros</span>
                </div>
            
        )}
            {acc.map((item, index) => (
                <Suspense key={index} fallback={<Loading />}>
                    <AccordionItem key={index} item={item} showDia={showDiaRef.current[index]} />
                </Suspense>
            ))}            
        </>
    )
}

export default function ListaRequerimientos(){
    const { filters, filterRequest, setFilters } = useFilters() 
    const { filteredRequest } = filterRequest(bandejas)
    const { requerimientoAccordion } = Accordions(filteredRequest.slice(0,100), filters)    
    const [acc, setAcc] = useState([])

    useEffect(() => {
        //const acumulate = structuredClone(acc)
        //acumulate.push(requerimientoAccordion)
        setAcc(requerimientoAccordion)
        setFilters({
            ...filters,
            loading: false
        });        
    }, [filters.flujo, filters.orderDes, filters.filter, filters.itemIdSelected, filters.stringSearch, filters.hoy, filters.filterSearch])

    const showDiaRef = useRef(acc.map((item) => item.title !== 'Hoy'))
    useEffect(() => {
        showDiaRef.current = acc.map((item) => item.title !== 'Hoy')
    }, [acc])
    
    return (
        <>
            {filters.loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>                           
                    <Accordion acc={acc} showDiaRef={showDiaRef}  />                     
                </Suspense>
            )}
        </> 
    )
}