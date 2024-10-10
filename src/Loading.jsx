/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useUserData } from "./hooks/useUserData.jsx";
import { useInboxs } from "./hooks/useInboxs.jsx";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Avatar, Box, Grid2, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import LoadingIcon from "./utils//Loading.jsx";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useEffect, useState } from "react";
import App from "./App.jsx";

/*const apiDataBE = fetchData('http://localhost:3100/api/bandeja-de-entrada?PageNumber=1&RowsOfPage=1000', {
    method: 'GET', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'},
    credentials: 'include'
})

const apiDataBS = fetchData('http://localhost:3100/api/bandeja-de-salida?PageNumber=1&RowsOfPage=1000', {
    method: 'GET', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'},
    credentials: 'include'
})*/
const host = 'http://localhost:3100'
const params = {
    method: 'GET', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'},
    credentials: 'include'
}
  
export default function Loading({darkMode, setDarkMode}) {
    const { userdata } = useUserData()
    const { bandejas, setBandejas } = useInboxs()
    const [loadingBE, setLoadingBE] = useState(false)
    const [loadingBS, setLoadingBS] = useState(false)
    const [loadingBF, setLoadingBF] = useState(false)
    const [loadingBA, setLoadingBA] = useState(false)
    const [loadingBO, setLoadingBO] = useState(false)
    const [loadingBNC, setLoadingBNC] = useState(false)
    const [loadingBNW, setLoadingBNW] = useState(false)

    /*useEffect(() => {
        setLoadingBE(false)
        setLoadingBS(false)
        setLoadingBF(false)
        setLoadingBA(false)
        setLoadingBO(false)
        setLoadingBNC(false)
        setLoadingBNW(false)

        userdata?.bandejas.map(item => {
            const api = host + item.url + '?PageNumber=1&RowsOfPage=500'
            
            fetch(api, params)
                .then((response) => response.json())
                .then((data) => {                    
                    setBandejas(prevstate => [...prevstate, data[0]])
                    if(item.id === 'be') {
                        setLoadingBE(true)
                    }
                    if(item.id === 'bs') {
                        setLoadingBS(true)
                    }
                    if(item.id === 'bf') {
                        setLoadingBF(true)                        
                    }
                    if(item.id === 'ba') {
                        setLoadingBA(true)                        
                    }
                    if(item.id === 'bo') {
                        setLoadingBO(true)                        
                    }
                    if(item.id === 'bnc') {
                        setLoadingBNC(true)                        
                    }
                    if(item.id === 'bnw') {
                        setLoadingBNW(true)                        
                    }
                })
                
                .catch((error) => {
                    console.error('Error:', error);
                    if(item.id === 'be') {
                        setLoadingBE(null)                  
                    }
                    if(item.id === 'bs') {
                        setLoadingBS(null)                  
                    }
                    if(item.id === 'bf') {
                        setLoadingBF(null)                  
                    }
                    if(item.id === 'ba') {
                        setLoadingBA(null)                  
                    }
                    if(item.id === 'bo') {
                        setLoadingBO(null)                  
                    }
                    if(item.id === 'bnc') {
                        setLoadingBNC(null)                  
                    }
                    if(item.id === 'bnw') {
                        setLoadingBNW(null)                  
                    }
                });
        })
    }, [userdata])*/

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
                fetch(host + item.url + '?PageNumber=1&RowsOfPage=500', params))
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
            .then((responses) => responses.map((r) => r.value))
            //.then((jsons) => jsons.forEach((json) => setBandejas(prevstate => [...prevstate, json[0]])))
            //.then((jsons) => console.log(jsons))
            .then((jsons) => setBandejas(jsons))
            //.then((jsons) => console.log(jsons))
            .catch((error) =>  console.log('Error 2:', error))        
        }
    }, [userdata])

    

    return (   
        //(loadingBE === false || loadingBS === false || loadingBF === false || loadingBA === false || loadingBO === false || loadingBNC === false || loadingBNW === false) ?     
        bandejas.length === 0 ?
        <div className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative items-center content-center">
            <Box sx={{ flexGrow: 1, maxWidth: 400, margin: "auto" }}>
                <Grid2 item="true" xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2, fontSize:"18px" }} variant="h6" component="div">
                        Cargando registros de:
                    </Typography>
                    <List dense>{
                        userdata?.bandejas.map(item => (
                            <ListItem
                                secondaryAction={
                                    item.id === 'be' && loadingBE ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bs' && loadingBS ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bf' && loadingBF ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'ba' && loadingBA ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bo' && loadingBO ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bnc' && loadingBNC ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bnw' && loadingBNW ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <CheckCircleOutlineOutlinedIcon className="text-green-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'be' && loadingBE === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bs' && loadingBS === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bf' && loadingBF === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'ba' && loadingBA === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bo' && loadingBO === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bnc' && loadingBNC === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                    item.id === 'bnw' && loadingBNW === null ?
                                        <IconButton edge="end" aria-label="cancel">
                                            <ErrorOutlineOutlinedIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>
                                    :
                                        <IconButton edge="end" aria-label="cancel">
                                            <LoadingIcon className="text-red-500 !w-8 !h-8"/>
                                        </IconButton>

                                }
                                key={item.id}
                            >
                                <ListItemAvatar>
                                    <Avatar className="w-3 h-auto">
                                        <InboxOutlinedIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.descripction}
                                />
                            </ListItem>
                        ))
                    }{                        
                        <ListItem className="!items-center !content-center !text-center !flex-col !p-0 !m-0 !h-8">
                            <IconButton edge="end" aria-label="cancelALL">
                                <LoadingIcon />
                            </IconButton>
                        </ListItem>
                    }
                    </List>
                </Grid2>
            </Box>
        </div>
        :
        <App darkMode={darkMode} setDarkMode={setDarkMode}/>
    )
}

//<App darkMode={darkMode} setDarkMode={setDarkMode}/>        