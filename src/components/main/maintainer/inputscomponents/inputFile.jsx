/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormHelperText } from '@mui/material';

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

const onChange = (event, frmRecord, name) => {
    console.log('event',event.target.files)
    frmRecord.setValue(name,event.target.files)
    frmRecord.clearErrors(name)
}

export default function InputFile({frmRecord, name, label, className, isRequired}) {
  return (
    <>
        <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            className={className}
        >
        {label}
        <VisuallyHiddenInput 
            type="file" 
            required
            {...frmRecord.register(name, {required: () => {
                //value.length > 0
                //if(isRequired && filesList.length === 0) return 'Debes adjuntar al menos un archivo'
                if(isRequired && frmRecord.getValues(name).length === 0) return 'Debes adjuntar al menos un archivo'
            }})}
            name={name} 
            
            accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview"
            onChange={() => onChange(event, frmRecord, name)}/>
        </Button>
        <FormHelperText className="!text-red-600">
            {frmRecord.formState.errors[name]?.message}
        </FormHelperText>
    </>
  );
}