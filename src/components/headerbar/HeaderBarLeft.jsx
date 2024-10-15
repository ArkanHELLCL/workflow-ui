/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters";
import { useInboxState } from '../../hooks/useInboxState';
import { useInboxs } from "../../hooks/useInboxs";
import { useAuth } from "../../hooks/useAuth";
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

function errroMessages(id, setInboxState, message){
    setInboxState(prevState => ({
        ...prevState,
        error: true,                    
    })) 
    let msgfinal = ''
    if(id === 'be')
        msgfinal = 'Error: Bandeja de entrada ' + message
    if(id === 'bs')
        msgfinal = 'Error: Bandeja de salida ' + message
    if(id === 'bf')
        msgfinal = 'Error: Bandeja de finalizados ' + message
    if(id === 'bo')
        msgfinal = 'Error: Bandeja de otros ' + message
    if(id === 'ba')
        msgfinal = 'Error: Bandeja de archivados ' + message
    if(id === 'bnc')
        msgfinal = 'Error: Bandeja de antiguos compra ' + message
    if(id === 'bnw')
        msgfinal = 'Error: Bandeja de antiguos WorkFlowv1 ' + message

    return msgfinal
}

export default function HeaderBarLeft() {
    const { filters } = useFilters()
    const { setInboxState } = useInboxState()
    const { bandejas, setBandejas } = useInboxs()
    const { setAuth } = useAuth()

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
                messages: [...prevState.messages, date + ' - Actualizando bandeja de entrada...'],
                error: false,
                Warning: false
            })) 
            msgfinal = 'Bandeja de entrada actualizada'
        }

        if(filters?.itemIdSelected === 'bs') {
            url = '/api/bandeja-de-salida'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBS: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de salida...']
            })) 
            msgfinal = 'Bandeja de salida actualizada'
        }

        if(filters?.itemIdSelected === 'bf') {
            url = '/api/bandeja-de-finalizados'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBF: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de finalizados...'],                
            })) 
            msgfinal = 'Bandeja de finalizados actualizada'
        }

        if(filters?.itemIdSelected === 'bo') {
            url = '/api/bandeja-de-otros'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBO: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de otros...']
            })) 
            msgfinal = 'Bandeja de otros actualizada'
        }

        if(filters?.itemIdSelected === 'ba') {
            url = '/api/bandeja-de-archivados'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBA: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de archivados...']
            })) 
            msgfinal = 'Bandeja de archivados actualizada'
        }

        if(filters?.itemIdSelected === 'bnc') {
            url = '/api/bandeja-antiguos-compra'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBNC: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de antiguos compra...']
            })) 
            msgfinal = 'Bandeja de antiguos compra actualizada'
        }

        if(filters?.itemIdSelected === 'bnw') {
            url = '/api/bandeja-antiguos-workflowv1'
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBNW: false,
                messages: [...prevState.messages, date + ' - Actualizando bandeja de antiguos WorkFlowv1...']
            })) 
            msgfinal = 'Bandeja de antiguos WorkFlowv1 actualizada'
        }

        fetch(host + url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params)
        .then((response) => response.json())
        .then((data) => {
            if(data.error){
                if(parseInt(data.error) === 401){
                    setAuth(false)
                }
                msgfinal = errroMessages(filters.itemIdSelected, setInboxState, data.message)
            }
            const newBandejas = bandejas.map(item => {
                if(item.id === filters.itemIdSelected)
                    item.registros = data.registros
                return item
            })            
            setBandejas(newBandejas)            
        })
        .catch((error) => {
            msgfinal = errroMessages(filters.itemIdSelected, setInboxState, error.message)
        })
        .finally(() => {
            const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
            if(filters?.itemIdSelected === 'be')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBE: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bs')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBS: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bf')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBF: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bo')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBO: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                }))                
            if(filters?.itemIdSelected === 'ba')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBA: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                })) 
            if(filters?.itemIdSelected === 'bnc')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBNC: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
                }))
            if(filters?.itemIdSelected === 'bnw')
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingBNW: true,
                    messages: [...prevState.messages, date + ' - ' + msgfinal]
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