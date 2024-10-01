/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import { useFilters } from '../../hooks/useFilters.jsx';
//import { useFetch } from '../../hooks/useFetch.jsx';
import { fetchData } from "../../utils/fectData.js";
//import { bandejas } from "../../mocks/requerimientos.json";
import { Accordions } from './request/accordions.jsx'
import { AccordionItem } from "./request/AccordioItem.jsx";
import Loading from "../../utils/Loading.jsx";

const Accordion = ({acc, moreItems, frmRequest}) => {    
    return(
        <>  
            {acc.length===0 && 
                <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[70vh] w-full !overflow-hidden">
                    <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                </div>            
            }
            {acc.map((item, index) => (
                <Suspense key={index} fallback={<Loading />}>
                    <AccordionItem key={index} item={item} frmRequest={frmRequest}/>
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
const apiData = fetchData('http://localhost:3100/api/bandeja-de-entrada?PageNumber=1&RowsOfPage=1000', {method: 'GET', headers: {Accept: 'application/json','Content-Type': 'application/json'}})

export default function ListaRequerimientos({frmRequest}){
    const data = apiData.read()
    console.log(data)
    const { filters, filterRequest } = useFilters() 
    //const { filteredRequest } = filterRequest(bandejas)
    const { filteredRequest } = filterRequest(data)
    
    /*const { data, loading, error, handleCancelRequest } = useFetch('http://localhost:3100/api/bandeja-de-entrada?PageNumber=1&RowsOfPage=1000', { 
            method: 'GET', 
            headers: {Accept: 'application/json','Content-Type': 'application/json'}            
      })*/
    
    const { requerimientoAccordion } = Accordions(filteredRequest, filters)
    const [acc, setAcc] = useState([])

    const moreItems = filteredRequest.length === 1000 ? true : false

    //console.log(data, loading, error)
    
    useEffect(() => {
        setAcc(requerimientoAccordion)
    }, [filters.flujo, filters.orderDes, filters.filter, filters.itemIdSelected, filters.stringSearch, filters.hoy, filters.filterSearch])
    
    return (
        <Suspense fallback={<Loading />}>                           
            <Accordion acc={acc} moreItems={moreItems} frmRequest={frmRequest}/>                     
        </Suspense>            
    )
}