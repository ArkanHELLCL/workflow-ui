/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useMantainer } from '../../../hooks/useMantainer.jsx';
import FormHelperText from '@mui/material/FormHelperText';
import Inputs from './inputs.jsx';
import DropAttach from './DropAttach.jsx';
import arrayFilesToFileList from '../../../utils/arrayFilesToFileList.jsx';
import { useRequest } from '../../../hooks/useRequest.jsx';
import { useAttach } from '../../../hooks/useAttach.jsx';
import { user } from '../../../mocks/usuario.json'
import dayjs from "dayjs";

export default function InputsForm({setDropEnter, dropEnter, campos, frmRequest, setFilesList, filesList}) {
    const { request } = useRequest()
    const { setAdjuntos } = useAttach()
    const { mantainer, setMantainer } = useMantainer()
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        parseInt(request?.request?.IdEditor) === parseInt(user.USR_Id) ? setDropEnter(true) : setDropEnter(false);
        //setDropEnter(true);
    };
    
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(false);
        onChange(event);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };    
    
    const onChange = (event) => {
        let files = [];                
        if(event.type==='change'){
            files = Array.from(event.target.files)            
        }else{
            files = Array.from(event.dataTransfer.files)
        }                
        setFilesList([...filesList, ...files]);
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
        return filesList
    }

    useEffect(() => {        
        frmRequest.setValue('frmWFInputFile',arrayFilesToFileList(filesList))
        frmRequest.clearErrors('frmWFInputFile')
    },[filesList])

    useEffect(() => {        
        setFilesList([])        
        campos.map(campo => {   // || frmRequest.formState.isSubmitSuccessful  || frmRequest.formState.submitCount === 0
            console.log(campo.DFO_Dato, frmRequest.formState.isSubmitSuccessful)
            if(campo.DFO_Dato){
                if(campo.FDI_TipoCampo.trim().toUpperCase() === 'F' || campo.FDI_TipoCampo.trim().toUpperCase() === 'V')
                    frmRequest.setValue(campo.FDI_NombreHTML, campo.DFO_Dato ? new dayjs(campo.DFO_Dato?.trim()) : null)
                else
                    frmRequest.setValue(campo.FDI_NombreHTML, campo.DFO_Dato ? campo.DFO_Dato?.trim() : null)                
            }
        })
        if(mantainer?.id === 'mpmant'){        
            frmRequest.setValue(mantainer?.fieldid, mantainer?.record?.id.toString())
            setMantainer({"id":null,"record":null})
        } 
    },[campos, request, mantainer])

    const required = campos.find(campo => campo.FDI_CampoObligatorio === 1 && campo.FDI_TipoCampo.trim().toUpperCase() === 'A') ? true : false;    

    return (
        <>
            <div id="inpuntsForm" className={`frmbody overflow-auto bg-transparent ${dropEnter ? '' : ''} px-0 py-0 w-full`} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
                {
                    dropEnter ?
                        <DropAttach handleDrop={handleDrop} handleDragOver={handleDragOver} handleDragLeave={handleDragLeave} />
                    :
                        <Inputs frmRequest={frmRequest} campos={campos}/>
                }
            </div>            
            <input 
                type="file" 
                multiple 
                hidden                
                name="frmWFInputFile" 
                id="frmWFInputFile"                 
                {...frmRequest.register("frmWFInputFile", {validate: () => {                    
                    if(required && filesList.length === 0) return 'Debes adjuntar al menos un archivo'
                }})}
                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"
                onChange={onChange}  />
                <FormHelperText className="!text-red-600">
                    {frmRequest.formState.errors['frmWFInputFile']?.message}
                </FormHelperText>
        </>
    );
}