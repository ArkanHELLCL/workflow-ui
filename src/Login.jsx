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
import Loading from './Loading.jsx';
import App from './App.jsx';

//fetch data Login
const param = {usrCod:'lcastillo', usrClave:'123456'}
const apiData = fetchData('http://localhost:3100/api/login', {
    method: 'POST', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'}, 
    body: JSON.stringify(param),
    credentials: 'include'
})

export default function Login(){
    const {setUserdata} = useUserData({})
    const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;  
    const [darkMode, setDarkMode] = useState(darkModeStorage)
    const userdata = apiData.read()

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
                        <Loading darkMode={darkMode} setDarkMode={setDarkMode}/>
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
//<App darkMode={darkMode} setDarkMode={setDarkMode}/>
//