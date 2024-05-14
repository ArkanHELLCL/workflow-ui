/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, Suspense, useEffect, useState } from "react";
import { useFilters } from '../hooks/useFilters.jsx';
import { bandejas } from "../mocks/requerimientos.json";
//import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";
import { Accordions } from '../components/accordions.jsx'
import { AccordionItem } from "../components/AccordioItem.jsx";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const Accordion = ({defaultTheme, acc, showDiaRef}) => {
    //const reqs = reqResult.slice(0,50)
    //console.log(acc)
    return(
        <>
            {acc.map((item, index) => (
                <Suspense key={index} fallback={<Loading />}>
                    <AccordionItem key={index} item={item} showDia={showDiaRef.current[index]} defaultTheme={defaultTheme} />
                </Suspense>
            ))}            
        </>
    )
}

export default function ListaRequerimientos({ defaultTheme, loadReq}){
    const { filters, filterRequest, setFilters } = useFilters() 
    const { filteredRequest } = filterRequest(bandejas)
    let firstReq
    let lastReq

    loadReq.page === 1 ? firstReq = 0 : firstReq = (loadReq.page * loadReq.pageSize) - loadReq.pageSize + 1
    loadReq.page === 1 ? lastReq = loadReq.pageSize : lastReq = (loadReq.page * loadReq.pageSize)

    //console.log('ListaRequerimientos',firstReq, lastReq, loadReq.page, loadReq.pageSize)
    const extractReq = filteredRequest.slice(firstReq, lastReq)

    const { requerimientoAccordion } = Accordions(extractReq, filters)    

    //const [req, setReq] = useState([])
    const [acc, setAcc] = useState([])

    useEffect(() => {
        //setReq(filteredRequest.slice(0, 100))
        //setReq(filteredRequest)
        const acumulate = structuredClone(acc)
        acumulate.push(requerimientoAccordion)
        //setAcc(acumulate)
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
                    <Accordion acc={acc} showDiaRef={showDiaRef} defaultTheme={defaultTheme} />                     
                </Suspense>
            )}
        </> 
    )
}