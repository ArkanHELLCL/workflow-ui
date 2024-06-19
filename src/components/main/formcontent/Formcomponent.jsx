/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useRequest } from '../../../hooks/useRequest.jsx';
import { useForm, FormProvider } from "react-hook-form"

import FormNoData from './FormNoData.jsx';
import Header from './Header.jsx';
import Attachments from './Attachments.jsx';
import InputsForm from './InputsForm.jsx';
import DocPreview from './DocPreview.jsx';
import ConfirmationDialog from '../ConfirmationDialog.jsx';
import { formulario } from'../../../mocks/formulario.json'


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
        openDialog.option ? formRef.current.requestSubmit() : null
        setOpenDialog({...openDialog, option:false})
    }
    ,[openDialog.option])

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
                                <Attachments adjuntos={adjuntos} setAdjuntos={setAdjuntos} selected={selected} setSelected={setSelected} setPreview={setPreview}/>{
                                    !preview &&
                                        <InputsForm setAdjuntos={setAdjuntos} dropEnter={dropEnter} setDropEnter={setDropEnter} campos={FOR_Campos}/>
                                    }{
                                        preview && selected!==null &&
                                            <DocPreview selected={selected} />
                                    }
                        </form>
                    </FormProvider>
                </section>
            }{  request?.request?.VFO_Id !== formulario?.VFO_Id &&
                    <FormNoData request={request}/>
            }{
                openDialog.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}