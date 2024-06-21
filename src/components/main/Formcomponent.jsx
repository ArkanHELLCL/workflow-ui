/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import { useForm, FormProvider } from "react-hook-form"
import {    NoData, 
            Header,
            Files,
            Inputs,
            Preview
        } from './formcontent';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { formulario } from'../../mocks/formulario.json'


export default function Form(){
    const { REQ_Adjuntos } = formulario;
    const { FOR_Campos } = formulario; 

    const { request, setRequest } = useRequest()

    const [dropEnter, setDropEnter] = useState(false);
    const [preview, setPreview] = useState(false)
    const [selected, setSelected] = useState(null)
    const [adjuntos, setAdjuntos] = useState(REQ_Adjuntos);

    const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":""})

    useEffect(() => {
        selected ?
            setRequest({
                ...request,
                "adjuntos": adjuntos,
                "selected": selected,
            }) :
        null
    },[selected, adjuntos])

    const methods = useForm()

    const onSubmit = (data) => {
        // Handle form submission with data        
        console.log(data);
    };

    useEffect(() => {        
        if(openDialog.option){
            formRef.current.requestSubmit()
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } )
        }
        setOpenDialog({...openDialog, option:false})                    
    }
    ,[openDialog.option])
    

    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null)
    return(
        <>
            {
                request && request?.request?.VFO_Id === formulario?.VFO_Id &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`}>
                    <FormProvider {...methods}>
                        <form id={formulario.name} noValidate ref={formRef}
                            className="h-full w-full flex flex-col columns-1"
                            onSubmit={methods.handleSubmit(onSubmit)}   
                            >
                                <Header preview={preview} request={request} formulario={formulario} setOpenDialog={setOpenDialog} setPreview={setPreview}/>                
                                <Files adjuntos={adjuntos} setAdjuntos={setAdjuntos} selected={selected} setSelected={setSelected} setPreview={setPreview}/>{
                                    !preview &&
                                        <Inputs setAdjuntos={setAdjuntos} dropEnter={dropEnter} setDropEnter={setDropEnter} campos={FOR_Campos}/>
                                    }{
                                        preview && selected!==null &&
                                            <Preview selected={selected} />
                                    }
                        </form>
                    </FormProvider>
                </section>
            }{  request?.request?.VFO_Id !== formulario?.VFO_Id &&
                    <NoData request={request}/>
            }{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}