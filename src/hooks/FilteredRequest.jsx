export function FilteredRequestbyDate(dateFrom, daysTo, daysMax, filteredRequest){    
    const anterior = new Date(dateFrom);
    const maxdias = new Date(dateFrom);
    anterior.setDate(anterior.getDate() - daysTo);
    maxdias.setDate(maxdias.getDate() - daysMax);
    
    let resultRequest =[]
    if(daysMax===-1){
        resultRequest = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10))    
    }else{
        resultRequest = filteredRequest?.filter((item) => item.DRE_FechaEdit?.slice(0,10) <= anterior.toISOString().slice(0,10) && item.DRE_FechaEdit?.slice(0,10) >= maxdias.toISOString().slice(0,10))    
    }        
    return resultRequest
}