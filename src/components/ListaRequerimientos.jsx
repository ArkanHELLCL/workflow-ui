/* eslint-disable react/prop-types */
import { useCallback, useRef, useEffect } from "react";
import { useFilters } from '../hooks/useFilters.jsx';

import { bandejas } from "../mocks/requerimientos.json";
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";
import { Accordions } from '../components/accordions.jsx'
import { AccordionItem } from "../components/AccordioItem.jsx";

export function ListaRequerimientos({ defaultTheme }){
    const { filters, filterRequest } = useFilters()  
    const { filteredRequest } = filterRequest(bandejas)
    const { requerimientoAccordion } = Accordions(filteredRequest, filters)
    console.log('ListaRequerimientos')
    
    const reqResult = useCallback((item) => {
        let req = []
        if (filters.filter === 1) {
            req = FilteredRequestbyDate(filters.hoy, item.desde, item.hasta, filteredRequest)
        }
        if(filters.filter===2) {
            req = filteredRequest.filter((req) => req.VRE_Id >= item.desde && req.VRE_Id <= item.hasta)
        }
        if(filters.filter===3) {
            item.pend ? req = filteredRequest.filter((req) => req.IdEditor === undefined) : req = filteredRequest.filter((req) => req.IdEditor !== undefined)
        }
        return req
    }, [filters.filter, filters.hoy, filteredRequest])

    const showDiaRef = useRef(requerimientoAccordion.map((item) => item.title !== 'Hoy'))

    useEffect(() => {
        showDiaRef.current = requerimientoAccordion.map((item) => item.title !== 'Hoy')
    }, [requerimientoAccordion])
        
    return (
        <>
          {requerimientoAccordion.map((item, index) => (
            <AccordionItem key={index} item={item} showDia={showDiaRef.current[index]} defaultTheme={defaultTheme} reqResult={reqResult} index={index}/>
          ))}
        </>
      )
}