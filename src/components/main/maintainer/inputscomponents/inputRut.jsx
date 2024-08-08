/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { InnerInput } from '../../formcontent/inputscomponents/StyledComponent.jsx';
import FormatearRut from '../../../../utils/FormatearRut.jsx';
import { Fn } from '../../../../utils/validaRut.jsx';

export default function InputRut ({frmRecord, name, className, isRequired, placeholder, label, errorMessage}) {
    return (
      <Controller
          control={frmRecord.control}
          name={name}
          rules={{
              validate: {
                required: (value) => {
                  if (value && !Fn.validaRut(value)) return 'El RUT ingresado no es válido';
                  if (!value && isRequired) return errorMessage;
                }
              },
              maxLength: 13
            }}          
          render={({ field }) => (
              <FormControl
                  {...field}
                  id={name}
                  size='sm'
                  className={className}>
                  <Input    
                      placeholder={placeholder}
                      name={name}
                      autoComplete='on'
                      autoFocus={false}
                      error={!!frmRecord.formState.errors[name]}                    
                      variant="outlined"
                      slots={{ input: InnerInput }}
                      onChange={(e) => field.onChange(()=>frmRecord.setValue(name,FormatearRut(e.target.value)))}
                      onBlur={field.onBlur}
                      value={FormatearRut(field.value) || ''}
                      slotProps={{ 
                              input: { placeholder: placeholder, type: 'text', label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
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
    );
}