/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { theme } from './utils/CustomTheme.jsx';
import { esES } from '@mui/x-date-pickers/locales';
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'
import { fetchData } from "./utils/fectData.js";
import { useUserData } from "./hooks/useUserData.jsx";
import { useEffect, useState } from 'react';
import { useInboxs } from './hooks/useInboxs.jsx';
import { useFilters } from './hooks/useFilters.jsx';
import { useInboxState } from './hooks/useInboxState.jsx';
import { useAuth } from './hooks/useAuth.jsx';
import App from './App.jsx';
import { Constants } from "./utils/const.jsx";

//fetch data Login
const param = {usrCod:'lcastillo', usrClave:'123456'}
const apiData = fetchData('http://localhost:3100/api/login', {
    method: 'POST', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'}, 
    body: JSON.stringify(param),
    credentials: 'include'
})

export default function Login(){
    const { setInboxState } = useInboxState()
    const { setUserdata } = useUserData({})
    const { filters } = useFilters()
    const { setBandejas } = useInboxs()
    const { setAuth } = useAuth()
    const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;  
    const [darkMode, setDarkMode] = useState(darkModeStorage)
    const userdata = apiData.read()
    const { host, fecthParams : params, dateOptions : options } = Constants()

    useEffect(() => {
        if(userdata){
            setAuth(true)
            const Inidate = new Intl.DateTimeFormat(undefined, options).format(new Date())
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingBE: false,
                loadingBS: false,
                loadingBF: false,
                loadingBA: false,
                loadingBO: false,
                loadingBNC: false,
                loadingBNW: false,
                messages: [...prevState.messages, Inidate + ' - Actualizando todas las bandejas...'],
                error: false,
                Warning: false
            }))

            const promises = userdata?.bandejas?.map((item) => (
                fetch(host + item.url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params))
                .then((response) => response.json())
                .then((data) => {
                    if(!data.id)
                        data.id = item.id                    
                    if(data.id === 'be'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de entrada ' + data.message
                        else
                            message = date + ' - Bandeja de entrada actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBE: true,
                            messages: [...prevState.messages, message],
                            error: data.error ? true : false
                        }))
                    }
                    if(data.id === 'bs'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de salida ' + data.message
                        else
                            message = date + ' - Bandeja de salida actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBS: true,
                            messages: [...prevState.messages, message]
                        }))
                    }
                    if(data.id === 'bf'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de finalizados ' + data.message
                        else
                            message = date + ' - Bandeja de finalizados actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBF: true,
                            messages: [...prevState.messages, message]
                        }))
                    }
                    if(data.id === 'ba'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de archivados ' + data.message
                        else
                            message = date + ' - Bandeja de archivados actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBA: true,
                            messages: [...prevState.messages, message]
                        }))
                    }
                    if(data.id === 'bo'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de otros ' + data.message
                        else
                            message = date + ' - Bandeja de otros actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBO: true,
                            messages: [...prevState.messages, message]
                        }))
                    }
                    if(data.id === 'bnc'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de antiguos compras ' + data.message
                        else
                            message = date + ' - Bandeja de antiguos compras actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBNC: true,
                            messages: [...prevState.messages, message],
                        }))
                    }
                    if(data.id === 'bnw'){
                        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())                        
                        let message = ''
                        if(data.error)                            
                            message = date + ' - Error: Bandeja de antiguos WorkFlowv1 ' + data.message
                        else
                            message = date + ' - Bandeja de antiguos WorkFlowv1 actualizada';

                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingBNW: true,
                            messages: [...prevState.messages, message],
                        }))
                    }
                    setBandejas(prevstate => [...prevstate, data])
                    return Promise.resolve(data)
                })                
                .catch((error) => {
                    return Promise.reject(error)
                })
            )            

            Promise.allSettled(promises)
            //all si una falla se detiene
            //allSettled {status: "fulfilled", value: Response}, {status: "rejected", reason: 'Failed to fetch'}, todas aunque fallen
            //race la primera que resuelva y se detiene, ok o no ok
            //any la primera que resuelva ok y se detiene independiente si hay alguna con error, cuando todas son rechazadas devuelve un array de errores            
            //.then((jsons) => jsons.forEach((json) => setBandejas(prevstate => [...prevstate, json[0]])))
            .then((responses) => responses.map((r) => r.value))            
            //.then((jsons) => setBandejas(jsons))
            .then((jsons) => jsons)
            .finally(() => {
                const Enddate = new Intl.DateTimeFormat(undefined, options).format(new Date())
                setInboxState(prevState => ({
                    ...prevState,
                    loadingInboxs: false,
                    messages: [...prevState.messages, Enddate + ' - Todas las bandejas actualizadas.'],
                }))
            })
            .catch((error) =>  console.log('Error 2:', error))        
        }
    }, [userdata])

    useEffect(() => {
        setUserdata(userdata)        
    },[userdata])

    useEffect(() => {
        window.addEventListener('storage', (event) => {
            if (event.key === 'DarkMode') {            
                event.newValue ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
            }
        })    
        darkModeStorage ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')    
      },[])

    return(        
        <ThemeProvider theme={theme(darkMode)}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs} 
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
                adapterLocale="es"
            >
                <SnackbarProvider maxSnack={5} Components={{
                    warning: StyledMaterialDesignContent, 
                    error: StyledMaterialDesignContent, 
                    info: StyledMaterialDesignContent, 
                    success: StyledMaterialDesignContent
                    }
                }>{
                    userdata?.error === 200 ?                        
                        <App darkMode={darkMode} setDarkMode={setDarkMode}/>                        
                    :
                        <div className="text-center flex justify-center align-middle items-center h-full w-full !overflow-hidden">
                            <span className='text-[#2c87d2] text-xl w-full'>{userdata?.message ? userdata?.message : 'Host no disponible'}</span>
                        </div>
                    }
                </SnackbarProvider>
            </LocalizationProvider>
        </ThemeProvider>        
    )
}