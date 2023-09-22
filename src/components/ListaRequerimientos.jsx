/* eslint-disable react/prop-types */
import { memo, useMemo, useCallback, useRef, useReducer, useEffect } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
import { Requerimiento } from "./Requerimiento.jsx";
import { useFilters } from '../hooks/useFilters.jsx'

import { bandejas } from "../mocks/requerimientos.json";
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";

const AccordionItem = memo(function AccordionItem({ item, isOpen, onToggle, showDia, defaultTheme, reqResult }) {
    const req = useMemo(() => reqResult(item), [item, reqResult])
  
    if (req.length === 0) {
      return null
    }
  
    return (
      <Accordion open={isOpen} icon={<Icon open={isOpen} pos="top-[8px] left-2" />} className="z-0">
        <AccordionHeader onClick={onToggle} className={`${defaultTheme.txtc + ' ' + defaultTheme.bgct} ' text-[.7rem] font-bold px-7 truncate dark:bg-[#444444] bg-[#f0f0f0] py-1 hover:dark:bg-[#666666] hover:bg-[#e6f2fa] overflow-hidden`}>
          {item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + req.length + ')'}
        </AccordionHeader>
        <AccordionBody className="py-0">
          <Requerimiento item={req} showDia={showDia} />
        </AccordionBody>
      </Accordion>
    )
})

export function ListaRequerimientos({ defaultTheme }){
    const { filters, filterRequest } = useFilters()  
    const {filteredRequest, requerimientoAccordion} = filterRequest(bandejas)

    const [isOpen, dispatch] = useReducer((state, action) => {
        switch (action.type) {
          case 'toggle':
            return {
              ...state,
              [action.index]: !state[action.index]
            }
          default:
            return state
        }
    }, useMemo(() => {
        const accs = {}
        requerimientoAccordion.forEach((item, index) => {
          accs[index] = true
        })
        return accs
    }, [requerimientoAccordion]))
    
    const handleToggleAccordion = useCallback((index) => {
        dispatch({ type: 'toggle', index })
    }, [])
    
    const isOpenAccordion = useCallback((index) => {
        return isOpen[index]
    }, [isOpen])
    
    const reqResult = useCallback((item) => {
        let req = []
        if (filters.filter === 1) {
          req = FilteredRequestbyDate(filters.hoy, item.desde, item.hasta, filteredRequest)
        }
        if(filters.filter===2) {
            req = filteredRequest.filter((req) => req.VRE_Id >= item.desde && req.VRE_Id <= item.hasta)
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
            <AccordionItem key={index} item={item} isOpen={isOpenAccordion(index)} onToggle={() => handleToggleAccordion(index)} showDia={showDiaRef.current[index]} defaultTheme={defaultTheme} reqResult={reqResult}/>
          ))}
        </>
      )
}