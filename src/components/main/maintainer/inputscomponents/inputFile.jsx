/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import arrayFilesToFileList from '../../../../utils/arrayFilesToFileList';
import { useEffect } from 'react';

export default function InputFile({frmRecord, name, label, className, isRequired, setFilesList, filesList, errorMessage}) {    
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
        frmRecord.setValue(name,arrayFilesToFileList(filesList))
        frmRecord.clearErrors(name)
    },[filesList])

    return (
        <FormControl
            size='sm'
            className={className + ' pb-2'}
            >
            <label htmlFor={name} className={`flex items-center justify-center rounded min-h-[54px] w-full cursor-pointer gap-2 dark:text-stone-100 text-stone-450 !text-base !font-light hover:text-[#2c87d2] ${frmRecord.formState.errors[name] ? '!text-red-600' : '' }  outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] hover:bg-[#eff6fc] dark:hover:bg-[#666666]`}>
                <CloudUploadIcon /> <span className='dark:text-stone-100 text-stone-900'>{label}</span>
            </label>
            <input 
                type="file"
                hidden
                {...frmRecord.register(name, {validate: () => {                    
                    if(isRequired && filesList.length === 0) return errorMessage
                }})}
                name={name}
                id={name}            
                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview"
                onChange={() => onChange(event, frmRecord, name)}/>
                <FormHelperText className="!text-red-600">
                    {frmRecord.formState.errors[name]?.message}
                </FormHelperText>
        </FormControl>
    );
}