/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import { usePreview } from '../../hooks/usePreview.jsx';
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
    const { preview, setPreview } = usePreview()
    const { setAdjuntos } = useAttach()    
    const [dropEnter, setDropEnter] = useState(false);
    const [filesList, setFilesList] = useState([]);
    const [form, setForm] = useState()
    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null) 

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

    const onSubmitRequest = (data) => {
        console.log('formcomponent',data);
        enqueueSnackbar('Los datos han sifo grabados exitosamente! ' + frmRequest.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
        frmRequest.clearErrors()
        frmRequest.reset()
        console.log(frmRequest.formState.isSubmitted)
        setAdjuntos(form.REQ_Adjuntos)
        setFilesList([])
        setPreview({
            state:false,
            obj:null,
            selected:null
        }) 
    };

    /*useEffect(() => {    
        if(openDialog?.option && openDialog?.type === 'submit' && openDialog.frmname === form?.name){
            formRef.current.requestSubmit()            
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" , anchorOrigin : { horizontal: "right", vertical: "bottom"}} )
        }
        setOpenDialog({...openDialog, option:false})
    }
    ,[openDialog?.option])*/

    //console.log('formcomponent',frmRecord.formState.isSubmitting, frmRecord.formState.isSubmitted, frmRecord.formState.isValid, frmRecord.formState.submitCount, frmRecord.formState.isValidating)

    //detectandoo error al submitir el formulario
    
    //frmRequest.formState.isValid && frmRequest.formState.isSubmitted ? 
    //null :
    !frmRequest.formState.isValid && frmRequest.formState.submitCount >= 0 && frmRequest.formState.isSubmitted ?  
        enqueueSnackbar('Debes corregir los errores antes de grabar! ' + frmRequest.formState.submitCount, { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} }) 
        : null 

    return(
        <>
            {
                request && form &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? 'dark:bg-[#1c1c1c]' : ''}`}>                    
                    <form id={form.name} noValidate ref={formRef}
                        className="h-full w-full flex flex-col columns-1"
                        onSubmit={frmRequest.handleSubmit(onSubmitRequest)}   
                        >
                            <Header formulario={form} setOpenDialog={setOpenDialog} />                
                            <Files setFilesList={setFilesList} filesList={filesList}/>{
                                !preview.state && !preview.obj &&
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={form.FOR_Campos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList}/>
                                }{
                                    preview.state && preview?.selected!==null &&
                                        <Preview />
                                }{
                                    preview.state && preview.obj === 'X1' &&
                                        <>                                            
                                            <h2 className="font-thin text-xl">Mantenedor de proveeodres</h2>
                                            <h2 className="font-thin text-base border border-b border-t-0 border-r-0 border-l-0 dark:border-stone-700 pb-2">Ingreso unitario para formulario</h2>
                                            <MPMant frmRecord={frmRecord} singleButton={true} />
                                        </>                                        
                                }
                    </form>
                </section>
            }{  !form &&
                    <NoData />
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}