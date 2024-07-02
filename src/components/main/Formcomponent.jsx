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
        const inputFileElement = document.getElementById('frmWFInputFile');
        console.log('formcomponent',data, inputFileElement.files);
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

    const inputFileElement = document.getElementById('frmWFInputFile');

    /*function arrayFilesToFileList(filesList) {
        return filesList.reduce(function (dataTransfer, file) {        
            dataTransfer.items.add(file);
            return dataTransfer;
        }, new DataTransfer()).files;
    }*/
    
    const onChange = (event) => {
        let files = [];
        event.type==='change' ? files = Array.from(event.target.files) : files = Array.from(event.dataTransfer.files)
        
        const filesInput = Array.from(inputFileElement.files);
        const filesList = [...files, ...filesInput];

        console.log('files',files, filesInput, filesList)
        
        const validFiles = files.filter((file) => {
            const validExtensions = [".jpg", ".jpeg", ".png", ".gif",".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".txt","webp"];
            const isValidExtension = validExtensions.some((ext) =>
                file.name.toLowerCase().endsWith(ext)
            );
            const isValidSize = file.size <= 10485760; // 10 MB
            return isValidExtension && isValidSize;
        });

        const remapValidFiles = validFiles.map((adjunto, index) => {            
            const data = {
                id: adjunto?.name,
                nombre: adjunto?.name,
                extension: adjunto?.name?.split('.').pop(),
                tamano: adjunto?.size,
                thumbail:  files[index]?.type.includes('image') ? URL.createObjectURL(files[index]) : null,
                url: URL.createObjectURL(files[index]),
                upload: true
            }
            return data
        })

        setAdjuntos((prevAdjuntos) => {
            const newAdjuntos = [...prevAdjuntos, ...remapValidFiles];                        
            const finalAdjuntos = newAdjuntos.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)            
            return finalAdjuntos
        });

        //inputFileElement.files = arrayFilesToFileList(filesList);
    }

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
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={FOR_Campos} onChange={onChange}/>
                                }{
                                    preview && selected!==null &&
                                        <Preview selected={selected} />
                                }
                        <input 
                            type="file" 
                            multiple 
                            hidden 
                            //className="hidden"
                            name="frmWFInputFile" 
                            id="frmWFInputFile" 
                            {...methods.register("frmWFInputFile")}                          
                            accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"
                            onChange={onChange}  />
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