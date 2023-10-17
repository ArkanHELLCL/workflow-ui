/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useCallback, useRef, Suspense, useEffect, useState } from "react";
import { useFilters } from '../hooks/useFilters.jsx';
import { bandejas } from "../mocks/requerimientos.json";
import { FilteredRequestbyDate } from "../hooks/FilteredRequest.jsx";
import { Accordions } from '../components/accordions.jsx'
import { AccordionItem } from "../components/AccordioItem.jsx";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const Accordion = ({defaultTheme, acc, showDiaRef, reqResult}) => {
    return(
    <>        
        {acc.map((item, index) => (
            <Suspense key={index} fallback={<Loading />}>
                <AccordionItem key={index} item={item} showDia={showDiaRef.current[index]} defaultTheme={defaultTheme} reqResult={reqResult} />
            </Suspense>
        ))}
    </>
    )
}

export default function ListaRequerimientos({ defaultTheme }){
    const { filters, filterRequest } = useFilters()  
    const { filteredRequest } = filterRequest(bandejas)
    const { requerimientoAccordion } = Accordions(filteredRequest, filters)

    const [req, setReq] = useState([])
    const [acc, setAcc] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setReq(filteredRequest)
        setAcc(requerimientoAccordion)
        setLoading(false);        
    }, [filters])
    
    const reqResult = useCallback((item) => {
        let req2 = []
        if (filters.filter === 1) {
            req2= FilteredRequestbyDate(filters.hoy, item.desde, item.hasta, req)
        }
        if(filters.filter===2) {
            req2 = req.filter((req) => req.VRE_Id >= item.desde && req.VRE_Id <= item.hasta)
        }
        if(filters.filter===3) {
            item.pend ? req2 = req.filter((req) => req.IdEditor === undefined) : req2 = req.filter((req) => req.IdEditor !== undefined)
        }
        if(filters.filter===4) {
            req2 = req.filter((req) => req.FLD_CodigoPaso >= item.desde && req.FLD_CodigoPaso <= item.hasta)
        }
        return req2
    }, [filters.filter, filters.hoy, req])

    const showDiaRef = useRef(acc.map((item) => item.title !== 'Hoy'))
    useEffect(() => {
        showDiaRef.current = acc.map((item) => item.title !== 'Hoy')
    }, [acc])
    
    return (
        <>
            {loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>
                    <Accordion acc={acc} showDiaRef={showDiaRef} defaultTheme={defaultTheme} reqResult={reqResult} />
                </Suspense>
            )}
        </>
    )
}