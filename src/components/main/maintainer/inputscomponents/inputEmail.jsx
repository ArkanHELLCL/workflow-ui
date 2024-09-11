/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/material/FormHelperText';

export default function InputEmail ({frmRecord, name, className, isRequired, placeholder, label, errorMessage}) {
    return(
        <Controller
            control={frmRecord.control}
            name={name}
            rules={{
                validate: {
                  required: (value) => {
                    if (!value && isRequired) return errorMessage;
                  },
                  validEmail: (value) => {
                    let currentEmails = value
                    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/i;
                        if (!regex.test(currentEmails.replace(/\s/g, ''))) {
                            return 'El Email ingresado no es válido';
                        }
                    }
                },
              }}            
            render={({ field: { onChange, onBlur, value } }) => (
                <FormControl
                    id={name}
                    size='sm'
                    className={className}>
                    <Input                                
                        placeholder={placeholder}
                        name={name}
                        autoComplete='on'
                        autoFocus={false}
                        error={!!frmRecord.formState.errors[name]}                    
                        value={value || ''}                        
                        variant="outlined"
                        
                        onChange={onChange}
                        onBlur={onBlur}    
                        slotProps={{ 
                                input: { placeholder: placeholder, type: 'text', label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300' }, 
                                root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}
                        sx={{
                            '--Input-minHeight': '56px',
                            '--Input-radius': '6px',
                        }}                                
                    />
                    <FormHelperText className="!text-red-600">
                        {frmRecord.formState.errors[name]?.message}
                    </FormHelperText>                       
                </FormControl>
            )}
        />
    )
}