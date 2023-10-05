/* eslint-disable react/prop-types */
import { memo, useMemo, useState, lazy, Suspense } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
//import { Requerimiento } from "./Requerimiento.jsx";
const Requerimiento = lazy(() => import('./Requerimiento.jsx'))
import { useFilters } from '../hooks/useFilters.jsx';
import Loading from './Loading.jsx';

export const AccordionItem = memo(function AccordionItem({ item, showDia, defaultTheme, reqResult, index }) {
    const req = useMemo(() => reqResult(item), [item, reqResult])
    const { filters } = useFilters()

    //ByDate(11)
    const [isOpenbyDate1, setIsOpenbyDate1] = useState(true)
    const [isOpenbyDate2, setIsOpenbyDate2] = useState(true)
    const [isOpenbyDate3, setIsOpenbyDate3] = useState(true)
    const [isOpenbyDate4, setIsOpenbyDate4] = useState(true)
    const [isOpenbyDate5, setIsOpenbyDate5] = useState(true)
    const [isOpenbyDate6, setIsOpenbyDate6] = useState(true)
    const [isOpenbyDate7, setIsOpenbyDate7] = useState(true)
    const [isOpenbyDate8, setIsOpenbyDate8] = useState(true)
    const [isOpenbyDate9, setIsOpenbyDate9] = useState(true)
    const [isOpenbyDate10, setIsOpenbyDate10] = useState(true)
    const [isOpenbyDate11, setIsOpenbyDate11] = useState(true)

    //ByNumber(5)
    const [isOpenbyNumber1, setIsOpenbyNumber1] = useState(true)
    const [isOpenbyNumber2, setIsOpenbyNumber2] = useState(true)
    const [isOpenbyNumber3, setIsOpenbyNumber3] = useState(true)
    const [isOpenbyNumber4, setIsOpenbyNumber4] = useState(true)
    const [isOpenbyNumber5, setIsOpenbyNumber5] = useState(true)

    //ByPending
    const [isOpenbyPending1, setIsOpenbyPending1] = useState(true)
    const [isOpenbyPending2, setIsOpenbyPending2] = useState(true)

    //ByStep(5)
    const [isOpenbyStep1, setIsOpenbyStep1] = useState(true)
    const [isOpenbyStep2, setIsOpenbyStep2] = useState(true)
    const [isOpenbyStep3, setIsOpenbyStep3] = useState(true)
    const [isOpenbyStep4, setIsOpenbyStep4] = useState(true)
    const [isOpenbyStep5, setIsOpenbyStep5] = useState(true)


    function handleToggleAccordion(index){        
        switch (index) {
            case 0:
                if(filters.filter===1) setIsOpenbyDate1(!isOpenbyDate1)
                if(filters.filter===2) setIsOpenbyNumber1(!isOpenbyNumber1)
                if(filters.filter===3) setIsOpenbyPending1(!isOpenbyPending1)
                if(filters.filter===4) setIsOpenbyStep1(!isOpenbyStep1)
                break;
            case 1:
                if(filters.filter===1) setIsOpenbyDate2(!isOpenbyDate2)
                if(filters.filter===2) setIsOpenbyNumber2(!isOpenbyNumber2)
                if(filters.filter===3) setIsOpenbyPending2(!isOpenbyPending2)
                if(filters.filter===4) setIsOpenbyStep2(!isOpenbyStep2)
                break;
            case 2:
                if(filters.filter===1) setIsOpenbyDate3(!isOpenbyDate3)
                if(filters.filter===2) setIsOpenbyNumber3(!isOpenbyNumber3)
                if(filters.filter===4) setIsOpenbyStep3(!isOpenbyStep3)
                break;
            case 3:
                if(filters.filter===1) setIsOpenbyDate4(!isOpenbyDate4)
                if(filters.filter===2) setIsOpenbyNumber4(!isOpenbyNumber4)
                if(filters.filter===4) setIsOpenbyStep4(!isOpenbyStep4)
                break;
            case 4:
                if(filters.filter===1) setIsOpenbyDate5(!isOpenbyDate5)
                if(filters.filter===2) setIsOpenbyNumber5(!isOpenbyNumber5)
                if(filters.filter===4) setIsOpenbyStep5(!isOpenbyStep5)
                break;
            case 5:
                setIsOpenbyDate6(!isOpenbyDate6)
                break;
            case 6:
                setIsOpenbyDate7(!isOpenbyDate7)
                break;
            case 7:
                setIsOpenbyDate8(!isOpenbyDate8)
                break;
            case 8:
                setIsOpenbyDate9(!isOpenbyDate9)
                break;
            case 9:
                setIsOpenbyDate10(!isOpenbyDate10)
                break;
            case 10:
                setIsOpenbyDate11(!isOpenbyDate11)
                break;            
        }
    }

    function isOpenAccordion(index){        
        switch (index) {
            case 0:
                if(filters.filter===1) return isOpenbyDate1
                if(filters.filter===2) return isOpenbyNumber1
                if(filters.filter===3) return isOpenbyPending1
                if(filters.filter===4) return isOpenbyStep1
                break;
            case 1:
                if(filters.filter===1) return isOpenbyDate2
                if(filters.filter===2) return isOpenbyNumber2
                if(filters.filter===3) return isOpenbyPending2
                if(filters.filter===4) return isOpenbyStep2
                break;
            case 2:
                if(filters.filter===1) return isOpenbyDate3
                if(filters.filter===2) return isOpenbyNumber3
                if(filters.filter===4) return isOpenbyStep3
                break;
            case 3:
                if(filters.filter===1) return isOpenbyDate4
                if(filters.filter===2) return isOpenbyNumber4
                if(filters.filter===4) return isOpenbyStep4
                break;
            case 4:
                if(filters.filter===1) return isOpenbyDate5
                if(filters.filter===2) return isOpenbyNumber5
                if(filters.filter===4) return isOpenbyStep5
                break;
            case 5:
                return isOpenbyDate6
            case 6:
                return isOpenbyDate7
            case 7:
                return isOpenbyDate8
            case 8:
                return isOpenbyDate9
            case 9:
                return isOpenbyDate10
            case 10:
                return isOpenbyDate11
        }
    }
  
    if (req.length === 0) {
      return null
    }
  
    return (        
        <Accordion open={isOpenAccordion(index)} icon={<Icon open={isOpenAccordion(index)} pos="absolute top-[8px] left-2" />} className="z-0">
            <AccordionHeader onClick={()=>handleToggleAccordion(index)} className={`${defaultTheme.txtc + ' ' + defaultTheme.bgct} ' text-[.7rem] font-bold px-7 truncate dark:bg-[#444444] bg-[#f0f0f0] py-1 hover:dark:bg-[#666666] hover:bg-[#e6f2fa] overflow-hidden`}>
                {item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + req.length + ')'}
            </AccordionHeader>
            <AccordionBody className="py-0">
                {
                    isOpenAccordion(index) ? <Suspense fallback={<Loading />}><Requerimiento item={req} showDia={showDia} /></Suspense> : <span>Sin Informacion</span>
                }
            </AccordionBody>
        </Accordion>         
    )
})