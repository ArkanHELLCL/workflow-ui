/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useRequest, useFilters } from '../../../../hooks';
import { Constants } from "../../../../utils/const.jsx";

export default function SenderData() {
    const { request } = useRequest()
    const { filters } = useFilters()
    const [senderPhoto, setSenderPhoto] = useState('/user.png')
    const { host, fecthParams : params } = Constants()    

    useEffect(() => {
        setSenderPhoto('/user.png')        
        let sender
        if(filters.itemIdSelected !== 'bnc')
            sender = request?.request?.DRE_UsuarioEditAntCod ? request?.request?.DRE_UsuarioEditAntCod : request?.request?.UsuarioCreador
        if(sender){
            const senderPhoto = window.localStorage.getItem(sender)
            if(!senderPhoto){
                fetch(host + '/api/usuario/photo/' + sender, params)
                .then(response => {
                    if(response.ok){                
                        return response.blob()
                    }else{
                        return false
                    }
                })
                .then(imgBlob => {                        
                    var reader = new FileReader();            
                    if(imgBlob.size>0){
                        reader.readAsDataURL(imgBlob); 
                        reader.onloadend = function() {                
                            var base64data = reader.result;                    
                            setSenderPhoto(base64data)
                            window.localStorage.setItem(sender, base64data);
                        }
                    }else{
                        setSenderPhoto('/user.png')
                    }
                })
                .catch((err)=> {
                    console.log(err)
                    setSenderPhoto('/user.png')
                })
            }else
                setSenderPhoto(senderPhoto)
        }else
            setSenderPhoto('/user.png')
    }, [request])
    
    return (
        <section className='pb-1 frmheaderto w-full -mt-1 mb-1 h-fit'>
            <div className='flex items-center gap-3'>
                <div className="relative w-fit flex">
                    <div className='hover:cursor-pointer w-14 h-14 flex items-center p-0 m-0 overflow-hidden imgSender' title="Enviar mensaje">
                        <img src = {senderPhoto} />                
                    </div>{
                        request?.request?.Bandeja?.slice(0,2) !== 'bn' &&                
                            <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold dark:bg-green-600 bg-green-500 rounded-full top-0 -right-1"></span>
                        }
                </div>
                <div className='grid'>                                
                    <span className='text-base font-light leading-tight truncate'>De : {request?.request?.DRE_UsuarioEditAnt ? request?.request?.DRE_UsuarioEditAnt : request?.request?.NombreCreador + ' ' + request?.request?.ApellidoCreador}</span>{
                        request?.request?.Bandeja === 'bnc' ?
                                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.request?.ESR_DescripcionRequerimiento ? request?.request?.ESR_DescripcionRequerimiento : 'Pendiente'}</strong></span>
                            :
                                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{parseInt(request?.request?.ESRAnterior_Descripcion)>=0 ? 'Creación' : request?.request?.ESRAnterior_Descripcion}</strong></span>
                        }
                </div>            
                </div>
        </section>
    )
}