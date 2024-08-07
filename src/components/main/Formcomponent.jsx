/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import {    NoData, 
            Header,
            Files,
            Inputs,
            Preview
        } from './formcontent';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { formulario } from'../../mocks/formulario.json'

export default function Formcomponent({frmRequest, openDialog, setOpenDialog}){    
    const { request, setRequest } = useRequest()
    const [dropEnter, setDropEnter] = useState(false);
    const [preview, setPreview] = useState(false)
    const [selected, setSelected] = useState(null)    
    const [adjuntos, setAdjuntos] = useState([]);
    const [filesList, setFilesList] = useState([]);
    const [form, setForm] = useState()    
    
    useEffect(() => {
        selected ?
            setRequest({
                ...request,
                "adjuntos": adjuntos,
                "selected": selected,
            }) :
        null
    },[selected, adjuntos])

    useEffect(() => {        
        let frm
        if(request?.request?.VFO_Id){
            frm = formulario.filter(item => item.VFO_Id === request?.request?.VFO_Id)
        }else{
            frm = formulario.filter(item => (item.VFO_Id === 0 && item.FLU_Id === request?.request?.FLU_Id))   
        }        
        const adjuntos = frm[0]?.REQ_Adjuntos ? frm[0]?.REQ_Adjuntos : []        
        setAdjuntos(adjuntos)
        setForm(frm[0])
    },[formulario, request])

    const onSubmit = (data) => {        
        console.log('formcomponent',data);
        frmRequest.reset()
        frmRequest.clearErrors()        
        setAdjuntos(form.REQ_Adjuntos)
        setFilesList([])
    };

    useEffect(() => {        
        if(openDialog?.option){
            formRef.current.requestSubmit()
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } )
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
                            <Header preview={preview} request={request} formulario={form} setOpenDialog={setOpenDialog} setPreview={setPreview}/>                
                            <Files adjuntos={adjuntos} setAdjuntos={setAdjuntos} selected={selected} setSelected={setSelected} setPreview={setPreview} setFilesList={setFilesList} filesList={filesList}/>{
                                !preview &&
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={form.FOR_Campos} setAdjuntos={setAdjuntos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList}/>
                                }{
                                    preview && selected!==null &&
                                        <Preview selected={selected} />
                                }                        
                    </form>
                </section>
            }{  request?.request?.VFO_Id !== form?.VFO_Id &&
                    <NoData request={request}/>
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}