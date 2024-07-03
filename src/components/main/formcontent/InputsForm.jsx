/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import { Controller } from 'react-hook-form';
import { useEffect } from 'react';
import FormHelperText from '@mui/joy/FormHelperText';
import Inputs from './Inputs.jsx';

export default function InputsForm({setDropEnter, dropEnter, campos, setAdjuntos, methods, setFilesList, filesList}) {
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(true);
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

    function arrayFilesToFileList(filesList) {
        return filesList.reduce(function (dataTransfer, file) {        
            dataTransfer.items.add(file);
            return dataTransfer;
        }, new DataTransfer()).files;
    }

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
        methods.setValue('frmWFInputFile',arrayFilesToFileList(filesList))
        methods.clearErrors('frmWFInputFile')
    },[filesList])

    const required = campos.find(campo => campo.FDI_CampoObligatorio === 1 && campo.FDI_TipoCampo.trim().toUpperCase() === 'A') ? true : false;    

    return (
        <>
            <div id="inpuntsForm" className={`flex-1 overflow-auto flex ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''} px-0 py-0 min-w-96`} onDragEnter={handleDragEnter}>
                {
                    dropEnter ?
                    <div className=' dark:bg-[#071725] bg-[#ebf3fc] opacity-80 border border-dashed dark:border-[#1f4568] border-[#478ecc] hover:pointer-events-auto z-50 flex justify-center align-middle items-center flex-1'
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}                        
                        onDragLeave={handleDragLeave}
                        //onDragEnd={handleDragEnd}
                        >
                        <div>
                            <span className='text-[#2c87d2]'> Agregar adjuntos</span>
                        </div>
                    </div> :
                    <Inputs campos={campos} />
                }
            </div>            
            <input 
                type="file" 
                multiple 
                hidden
                //required={required}
                //value={filesList}
                name="frmWFInputFile" 
                id="frmWFInputFile" 
                //{...methods.register("frmWFInputFile",{required : required})}
                {...methods.register("frmWFInputFile", {validate: (value) => {
                    //value.length > 0
                    if(required && filesList.length === 0) return 'Debes adjuntar al menos un archivo'
                }})}
                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"
                onChange={onChange}  />
                <FormHelperText className="!text-red-600">
                    {methods.formState.errors['frmWFInputFile']?.message}
                </FormHelperText>
        </>
    );
}