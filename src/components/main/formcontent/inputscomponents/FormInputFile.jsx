/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import arrayFilesToFileList from '../../../../utils/arrayFilesToFileList';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function FormInputFile({frmRequest, campo, className, setFilesList, filesList}) {
    //const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
    const required = campo.FDI_CampoObligatorio === 1 ? true : false

    const onChangeHandler = (event) => {        
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
        <div className={className + ' flex flex-col h-full w-full'}>
            <Controller
                control={frmRequest.control}
                name={campo.FDI_NombreHTML}
                rules={{
                    validate: {
                      required: (value) => {                        
                        if (value.length === 0 && required) return campo.FDI_ErrorMessage;
                      }
                    }                      
                  }}
                render={({ field: { onChange, onBlur } }) => (                
                    <FormControl                        
                        className={className}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon className='text-blue-600'/>}
                            className={`!h-full !min-h-14 !rounded ${frmRequest.formState.errors[campo.FDI_NombreHTML] ? '!border-red-600':'dark:!border-[#575757] !border-[#E0E3E7] hover:!border-[#B2BAC2]'}`}
                        >
                            <span className={`${frmRequest.formState.errors[campo.FDI_NombreHTML] ? 'text-red-600' : 'dark:text-stone-100 text-stone-900'} !text-base`}>{campo.FDI_Descripcion}</span>
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(value) => {onChange(value); onChangeHandler(value)}}
                                onBlur={onBlur}                            
                                accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview"                            
                            />
                        </Button>
                    </FormControl>
                )}     
            />
            <FormHelperText className="!text-red-600">
                {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
            </FormHelperText>
        </div>
    )
}