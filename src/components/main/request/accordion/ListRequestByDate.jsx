/* eslint-disable no-unused-vars */
import { useFilters, useUserData } from "../../../../hooks";

function FiltroRequerimientos( hoy, filteredRequest, diasDesde, diasHasta ) {
    let anterior = new Date(hoy); 
    let maxdias  = new Date(hoy);    
    
    anterior.setDate(anterior.getDate() - diasDesde);
    if(diasDesde === diasHasta)
        maxdias = anterior
    else
        diasHasta !== null ? maxdias.setDate(maxdias.getDate() - diasHasta) : maxdias = null
    
    return filteredRequest?.filter(
      (item) =>        
        maxdias !== null ?
            new Date(item?.DRE_FechaEdit?.slice(0,10)).getTime() <= anterior.getTime() &&
            new Date(item?.DRE_FechaEdit?.slice(0,10)).getTime() >= maxdias.getTime()
        :
        new Date(item?.DRE_FechaEdit?.slice(0,10)).getTime() <= new Date(anterior).getTime()
    );
}

export function ListRequestByDate(filteredRequest){
    const { userdata } = useUserData()
    const { filters } = useFilters()
    const rangeDays = userdata?.rangeDays

    const requerimientoAccordion = rangeDays.map((item, index) => {        
        return {id:index, title:item.title, desde:item.desde, hasta:item.hasta, open: true, requerimientos: FiltroRequerimientos(filters.hoy,filteredRequest,item.desde,item.hasta), showyear:item.showyear, showdia:item.showdia}
    })

    return requerimientoAccordion
}