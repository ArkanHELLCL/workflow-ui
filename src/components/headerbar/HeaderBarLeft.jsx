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
        let msgfinal = ''
        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
        if(filters?.itemIdSelected === 'be') {
            url = '/api/bandeja-de-entrada'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBE: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de entrada...']
            })) 
            msgfinal = 'Bandeja de entrada actualizada'
        }

        if(filters?.itemIdSelected === 'bs') {
            url = '/api/bandeja-de-salida'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBS: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de salida...']
            })) 
            msgfinal = 'Bandeja de salida actualizada'
        }

        if(filters?.itemIdSelected === 'bf') {
            url = '/api/bandeja-de-finalizados'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBF: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de finalizados...']
            })) 
            msgfinal = 'Bandeja de finalizados actualizada'
        }

        if(filters?.itemIdSelected === 'bo') {
            url = '/api/bandeja-de-otros'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBO: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de otros...']
            })) 
            msgfinal = 'Bandeja de otros actualizada'
        }

        if(filters?.itemIdSelected === 'ba') {
            url = '/api/bandeja-de-archivados'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBA: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de archivados...']
            })) 
            msgfinal = 'Bandeja de archivados actualizada'
        }

        if(filters?.itemIdSelected === 'bnc') {
            url = '/api/bandeja-antiguos-compra'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBNC: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de antiguos compra...']
            })) 
            msgfinal = 'Bandeja de antiguos compra actualizada'
        }

        if(filters?.itemIdSelected === 'bnw') {
            url = '/api/bandeja-antiguos-compra'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBNW: false,
                messages: [...inboxstate.messages, date + ' - Actualizando bandeja de antiguos WorkFlowv1...']
            })) 
            msgfinal = 'Bandeja de antiguos WorkFlowv1 actualizada'
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
        })
        .finally(() => {
            const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
            if(filters?.itemIdSelected === 'be')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBE: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bs')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBS: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bf')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBF: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bo')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBO: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                }))                
            if(filters?.itemIdSelected === 'ba')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBA: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                })) 
            if(filters?.itemIdSelected === 'bnc')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBNC: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bnw')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBNW: true,
                    messages: [...inboxstate.messages, date + ' - ' + msgfinal]
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