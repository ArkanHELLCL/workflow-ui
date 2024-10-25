/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters";
import { useInboxState } from '../../hooks/useInboxState';
import { useInboxs } from "../../hooks/useInboxs";
import { useAuth } from "../../hooks/useAuth";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { Constants } from "../../utils/const";
import { useUserData } from "../../hooks/useUserData.jsx";
import getobjItems from '../../utils/getObjItems.jsx';

export default function HeaderBarLeft() {
    const { filters } = useFilters()
    const { setInboxState } = useInboxState()
    const { bandejas, setBandejas } = useInboxs()
    const { setAuth } = useAuth()
    const { userdata } = useUserData({})
    const { host, fecthParams : params, dateOptions : options } = Constants()

    const objBandeja = getobjItems(userdata.treeMenu,filters.flujo);    

    const HandleReload = () => {        
        let msgfinal = ''
        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())        
        const { description, url } = objBandeja.filter(item => item.id===filters.itemIdSelected)[0]

        setInboxState(prevState => ({
            ...prevState,
            loadingInboxs: true,
            loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: false},
            messages: [...prevState.messages, date + ' - Actualizando ' + description + '...'],
            error: false,
            Warning: false
        }))

        if(url)
            fetch(host + url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params)
            .then((response) => response.json())
            .then((data) => {
                if(data.error){
                    if(parseInt(data.error) === 401){
                        setAuth(false)
                    }                    
                    msgfinal = date + ' - Error: ' + description + ' ' + data.message
                    setInboxState(prevState => ({
                        ...prevState,
                        loadingInboxs: false,
                        loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},
                        messages: [...prevState.messages, msgfinal],
                        error: true
                    }))
                }else{
                    const newBandejas = bandejas.map(item => {
                        if(item.id === filters.itemIdSelected)
                            item.registros = data.registros
                        return item
                    })
                    msgfinal = date + ' - ' + description + ' actualizada' 
                    setInboxState(prevState => ({
                        ...prevState,
                        loadingInboxs: false,
                        loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},
                        messages: [...prevState.messages, msgfinal],
                        error: false
                    }))
                    setBandejas(newBandejas)
                }
            })
            .catch((error) => {                
                msgfinal = date + ' - Error: ' + description + ' ' + error.message
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    loadingInbox: {...prevState.loadingInbox, [filters.itemIdSelected]: true},
                    messages: [...prevState.messages, msgfinal],
                    error: true
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