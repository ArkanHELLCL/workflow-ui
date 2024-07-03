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

export default function Form({methods, openDialog, setOpenDialog}){
    const { REQ_Adjuntos } = formulario;
    const { FOR_Campos } = formulario; 
    const { request, setRequest } = useRequest()
    const [dropEnter, setDropEnter] = useState(false);
    const [preview, setPreview] = useState(false)
    const [selected, setSelected] = useState(null)
    const [adjuntos, setAdjuntos] = useState(REQ_Adjuntos);
    
    useEffect(() => {
        selected ?
            setRequest({
                ...request,
                "adjuntos": adjuntos,
                "selected": selected,
            }) :
        null
    },[selected, adjuntos])

    const onSubmit = (data) => {
        // Handle form submission with data    
        //const inputFileElement = document.getElementById('frmWFInputFile');
        //data.frmWFInputFile.FileList = [...inputFileElement.files];
        //console.log('formcomponent',data, inputFileElement.files);
        console.log('formcomponent',data);
        methods.reset()
        setAdjuntos(REQ_Adjuntos)
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
                request && request?.request?.VFO_Id === formulario?.VFO_Id &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`}>                    
                    <form id={formulario.name} noValidate ref={formRef}
                        className="h-full w-full flex flex-col columns-1"
                        onSubmit={methods.handleSubmit(onSubmit)}   
                        >
                            <Header preview={preview} request={request} formulario={formulario} setOpenDialog={setOpenDialog} setPreview={setPreview}/>                
                            <Files adjuntos={adjuntos} setAdjuntos={setAdjuntos} selected={selected} setSelected={setSelected} setPreview={setPreview}/>{
                                !preview &&
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={FOR_Campos} setAdjuntos={setAdjuntos} methods={methods}/>
                                }{
                                    preview && selected!==null &&
                                        <Preview selected={selected} />
                                }                        
                    </form>
                </section>
            }{  request?.request?.VFO_Id !== formulario?.VFO_Id &&
                    <NoData request={request}/>
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}