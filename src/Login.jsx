/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { RequestProvider, RecordsProvider, AttachProvider, PreviewProvider, ReportsProvider, MantainerProvider, ButtonsGroupProvider, MantainersProvider } from './context'
import { useUserData, useInboxs, useFilters, useInboxState, useAuth } from "./hooks";
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { theme } from './utils/CustomTheme.jsx';
import { esES } from '@mui/x-date-pickers/locales';
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'
import { fetchData } from "./utils/fectData.js";
import { Constants } from "./utils/const.jsx";
import "dayjs/locale/es";
import App from './App.jsx';
import getobjItems from './utils/getObjItems.jsx';

//fetch data Login
const param = {usrCod:'lcastillo', usrClave:'123456'}
const apiData = fetchData('http://localhost:3100/api/usuario/login', {
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
        if(userdata.error === 200){
            const objBandejas = getobjItems(userdata.treeMenu,filters.flujo);
            const ban = objBandejas.map(item => '"' + item.id + '":' + !item.load ).join(', ')            
            
            setAuth(true)
            const Inidate = new Intl.DateTimeFormat(undefined, options).format(new Date())
            setInboxState(prevState => ({
                ...prevState,
                loadingInboxs: true,
                loadingInbox: JSON.parse("{" + ban + "}"),
                messages: [...prevState.messages, Inidate + ' - Actualizando todas las bandejas...'],
                error: false,
                Warning: false
            }))
            
            const promises = objBandejas?.filter(item => item.load).map((item) => (
                fetch(host + item.url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params))
                .then((response) => response.json())
                .then((data) => {
                    if(!data.id)
                        data.id = item.id

                    const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
                    let message = ''                   
                    if(data.error){                        
                        message = date + ' - Error: ' + item.description + ' ' + data.message
                        setInboxState(prevState => ({
                            ...prevState,                            
                            loadingInbox: {...prevState.loadingInbox, [item.id]: true},
                            messages: [...prevState.messages, message],
                            error: true
                        }))
                        return Promise.reject(data)
                    }else{
                        message = date + ' - ' + item.description + ' actualizada';
                        setInboxState(prevState => ({
                            ...prevState,
                            loadingInbox: {...prevState.loadingInbox, [item.id]: true},
                            messages: [...prevState.messages, message]
                        }))
                    }
                    
                    setBandejas(prevstate => [...prevstate, data])
                    return Promise.resolve(data)
                })                
                .catch((error) => {
                    //console.log('Error 1:', error)
                    return Promise.reject(error)
                })
            )            
            if(promises)
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
        }else
            setAuth(false)
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
        <RequestProvider>
            <RecordsProvider>
                <ReportsProvider>
                    <AttachProvider>
                        <PreviewProvider>
                            <MantainerProvider>
                                <ButtonsGroupProvider>
                                    <MantainersProvider>
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
                                    </MantainersProvider>
                                </ButtonsGroupProvider>
                            </MantainerProvider>
                        </PreviewProvider>
                    </AttachProvider>
                </ReportsProvider>
            </RecordsProvider>
        </RequestProvider>        
    )
}