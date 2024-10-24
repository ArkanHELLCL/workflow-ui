/* eslint-disable no-unused-vars */
import { useUserData } from '../../../../hooks/useUserData.jsx';
import { useFilters } from '../../../../hooks/useFilters.jsx';
import getobjItems from '../../../../utils/getObjItems.jsx';

function FiltroRequerimientos( filteredRequest, cod ) {        
    return filteredRequest?.filter(
      (item) => item.Bandeja === cod
    );
}

export function ListRequestSearchResult(maxAccordions, filteredRequest){    
    const { userdata } = useUserData() 
    const { filters } = useFilters()
    const objBandejas = getobjItems(userdata.treeMenu,filters.flujo);

    const requerimientoAccordion = objBandejas.map((item, index) => {        
        return {id:index, title:item.description, open: true, requerimientos: FiltroRequerimientos(filteredRequest,item.id), showyear:item.showyear}
    })    
    return requerimientoAccordion
}