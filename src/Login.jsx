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
//import Loading from './Loading.jsx';
import { useInboxs } from './hooks/useInboxs.jsx';
import { useFilters } from './hooks/useFilters.jsx';
import App from './App.jsx';

//fetch data Login
const param = {usrCod:'lcastillo', usrClave:'123456'}
const apiData = fetchData('http://localhost:3100/api/login', {
    method: 'POST', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'}, 
    body: JSON.stringify(param),
    credentials: 'include'
})

const host = 'http://localhost:3100'
const params = {
    method: 'GET', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'},
    credentials: 'include'
}

export default function Login(){
    const {setUserdata} = useUserData({})
    const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;  
    const [darkMode, setDarkMode] = useState(darkModeStorage)
    const userdata = apiData.read()

    
    const { bandejas, setBandejas } = useInboxs()
    const { filters } = useFilters()
    const [loadingBE, setLoadingBE] = useState(false)
    const [loadingBS, setLoadingBS] = useState(false)
    const [loadingBF, setLoadingBF] = useState(false)
    const [loadingBA, setLoadingBA] = useState(false)
    const [loadingBO, setLoadingBO] = useState(false)
    const [loadingBNC, setLoadingBNC] = useState(false)
    const [loadingBNW, setLoadingBNW] = useState(false)    

    useEffect(() => {
        if(userdata){
            setLoadingBE(false)
            setLoadingBS(false)
            setLoadingBF(false)
            setLoadingBA(false)
            setLoadingBO(false)
            setLoadingBNC(false)
            setLoadingBNW(false)

            const promises = userdata?.bandejas?.map((item) => (
                fetch(host + item.url + '?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded, params))
                .then((response) => response.json())
                .then((data) => {
                    if(!data.id)
                        data.id = item.id
                    if(data.id === 'be')
                        setLoadingBE(true)                    
                    if(data.id === 'bs')
                        setLoadingBS(true)
                    if(data.id === 'bf')
                        setLoadingBF(true)
                    if(data.id === 'ba')
                        setLoadingBA(true)
                    if(data.id === 'bo')
                        setLoadingBO(true)
                    if(data.id === 'bnc')
                        setLoadingBNC(true)
                    if(data.id === 'bnw')
                        setLoadingBNW(true)                        

                    return Promise.resolve(data)
                })
                .catch((error) => {
                    console.log('Error:', error)
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
            .then((jsons) => setBandejas(jsons))            
            .catch((error) =>  console.log('Error 2:', error))        
        }
    }, [userdata])

    useEffect(() => {
        setUserdata(userdata)
        //console.log('userdata',userdata)
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
//<Loading darkMode={darkMode} setDarkMode={setDarkMode}/>