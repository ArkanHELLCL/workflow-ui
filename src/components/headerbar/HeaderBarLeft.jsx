/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters";
import { useInboxState } from '../../hooks/useInboxState';
import { useInboxs } from "../../hooks/useInboxs";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CachedIcon from '@mui/icons-material/Cached';

const host = 'http://localhost:3100'
const params = {
    method: 'GET', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'},
    credentials: 'include'
}
const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false        
};

export default function HeaderBarLeft() {
    const { filters } = useFilters()
    const { inboxstate, setInboxState } = useInboxState()
    const { bandejas, setBandejas } = useInboxs()

    const HandleReload = () => {
        let url = ''
        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
        if(filters?.itemIdSelected === 'be') {
            url = '/api/bandeja-de-entrada'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBE: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de entrada...']
            })) 
        }

        fetch(host + url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params)
        .then((response) => response.json())
        .then((data) => {
            const newBandejas = bandejas.map(item => {
                if(item.id === filters.itemIdSelected)
                    item.registros = data.registros
                return item
            })            
            setBandejas(newBandejas)            
            //return data
        })
        .finally(() => {
            const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
            if(filters?.itemIdSelected === 'be')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBE: true,
                    messages: [...inboxstate.messages, date + ' - Bandeja de entrada actualizada']
                }))
        })
        
    }

    return(
        <div className="flex items-start h-full px-4 text-white relative z-50">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" onClick={HandleReload} title="Recargar">
                <CachedIcon />
            </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" title="Ayuda">
                <HelpOutlineIcon />
            </span>            
        </div>
    )
}