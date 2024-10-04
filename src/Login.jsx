/* eslint-disable react-hooks/exhaustive-deps */
import App from './App.jsx'
import { fetchData } from "./utils/fectData.js";
import { useUserData } from "./hooks/useUserData.jsx";
import { useEffect } from 'react';

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

    const userdata = apiData.read()

    useEffect(() => {
        setUserdata(userdata)
        console.log('userdata',userdata)
    },[userdata])

    return(
        !userdata?.error ?
            <App />
        :
            <div className="text-center flex justify-center align-middle items-center h-full w-full !overflow-hidden">
                <span className='text-[#2c87d2] text-xl w-full'>{userdata.message}</span>
            </div>
    )    
}