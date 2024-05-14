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
        <>
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
    const { requerimientoAccordion } = Accordions(filteredRequest, filters)    
    const [acc, setAcc] = useState([])

    useEffect(() => {
        const acumulate = structuredClone(acc)
        acumulate.push(requerimientoAccordion)
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
                    <Accordion acc={acc} showDiaRef={showDiaRef} />                     
                </Suspense>
            )}
        </> 
    )
}