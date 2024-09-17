/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import arrayFilesToFileList from '../../../../utils/arrayFilesToFileList';
import { useEffect } from 'react';

export default function FormInputFile({frmRequest, campo, className, setFilesList, filesList}) {
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
    const onChange = (event) => {
        let files = [];                
        if(event.type==='change'){
            files = Array.from(event.target.files)            
        }else{
            files = Array.from(event.dataTransfer.files)            
        }                
        setFilesList([...filesList, ...files]);        
        return filesList
    }
    
    useEffect(() => {
        frmRequest.setValue(campo.FDI_NombreHTML,arrayFilesToFileList(filesList))
        frmRequest.clearErrors(campo.FDI_NombreHTML)
    },[filesList])

    return (
        <FormControl
            size='sm'
            className={className + ' pb-2'}
            >
            <label htmlFor={campo.FDI_NombreHTML} className={`flex items-center justify-center min-h-[54px] w-full cursor-pointer gap-2 dark:text-stone-100 text-stone-450 !text-base !font-light hover:text-[#2c87d2] ${frmRequest.formState.errors[campo.FDI_NombreHTML] ? '!text-red-600' : '' }  outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] hover:bg-[#eff6fc] dark:hover:bg-[#666666] rounded-[3px] my-[1px]`}>
                <CloudUploadIcon /> <span className='dark:text-stone-100 text-stone-900'>{campo.FDI_Descripcion}</span>
            </label>
            <input 
                type="file"
                hidden
                {...frmRequest.register(campo.FDI_NombreHTML, {validate: () => {                    
                    if(required && filesList.length === 0) return !!frmRequest.formState.errors[campo?.FDI_NombreHTML]
                }})}
                name={campo.FDI_NombreHTML}
                id={campo.FDI_NombreHTML}            
                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview"
                onChange={() => onChange(event, frmRequest, campo.FDI_NombreHTML)}/>
                <FormHelperText className="!text-red-600">
                    {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                </FormHelperText>
        </FormControl>
    );
}