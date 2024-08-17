/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import { useAttach } from '../../hooks/useAttach.jsx';
import {    NoData, 
            Header,
            Files,
            Inputs,
            Preview
        } from './formcontent';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { formulario } from'../../mocks/formulario.json'

import MPMant from './maintainer/proveedorMant.jsx'

export default function Formcomponent({frmRequest, frmRecord, openDialog, setOpenDialog}){    
    const { request } = useRequest()
    const { setAdjuntos } = useAttach()
    const [dropEnter, setDropEnter] = useState(false);
    const [preview, setPreview] = useState(false)    
    const [filesList, setFilesList] = useState([]);
    const [form, setForm] = useState()    
    const [maintainer, setMaintainer] = useState({state:false, obj:'mp'})
    
    useEffect(() => {        
        setPreview(false)        
    },[request?.request])

    useEffect(() => {        
        let frm
        if(request?.request?.VFO_Id){
            frm = formulario.filter(item => item.VFO_Id === request?.request?.VFO_Id && item.Bandeja === request?.request?.Bandeja)
        }else{
            frm = formulario.filter(item => (item.VFO_Id === 0 && item.FLU_Id === request?.request?.FLU_Id && item.Bandeja === request?.request?.Bandeja))   
        }        
        const adjuntos = frm[0]?.REQ_Adjuntos ? frm[0]?.REQ_Adjuntos : []
        frmRequest.clearErrors()
        setAdjuntos(adjuntos)
        setForm(frm[0])        
    },[formulario, request])

    const onSubmit = (data) => {        
        console.log('formcomponent',data);
        //frmRequest.clearErrors()
        //frmRequest.reset()
        setAdjuntos(form.REQ_Adjuntos)
        setFilesList([])
    };

    useEffect(() => {        
        if(openDialog?.option){
            formRef.current.requestSubmit()
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" , anchorOrigin : { horizontal: "right", vertical: "bottom"}} )
        }
        setOpenDialog({...openDialog, option:false})                    
    }
    ,[openDialog?.option])    

    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null)    
    return(
        <>
            {
                request && form &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`}>                    
                    <form id={form.name} noValidate ref={formRef}
                        className="h-full w-full flex flex-col columns-1"
                        onSubmit={frmRequest.handleSubmit(onSubmit)}   
                        >
                            <Header preview={preview} setPreview={setPreview} maintainer={maintainer} setMaintainer={setMaintainer} formulario={form} setOpenDialog={setOpenDialog} />                
                            <Files setPreview={setPreview} setFilesList={setFilesList} filesList={filesList}/>{
                                !preview && !maintainer.state &&
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={form.FOR_Campos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList} maintainer={maintainer} setMaintainer={setMaintainer}/>
                                }{
                                    preview && request?.selected!==null &&
                                        <Preview />
                                }{
                                    maintainer.state && maintainer.obj === 'X1' &&
                                        <>
                                            <h2 className="font-thin text-xl">Mantenedor de proveeodres</h2>
                                            <MPMant frmRecord={frmRecord}/>
                                        </>                                        
                                }
                    </form>
                </section>
            }{  !form && //request?.request?.VFO_Id !== form?.VFO_Id &&
                    <NoData />
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}