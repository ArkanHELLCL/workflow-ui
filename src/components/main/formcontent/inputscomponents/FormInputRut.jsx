/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { Fn } from '../../../../utils/validaRut.jsx';
import FormatearRut from '../../../../utils/FormatearRut.jsx';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'

export default function FormInputRut ({ frmRequest, campo, className }) {
    const { request } = useRequest();

    const disabled = () => {    
      if(request.request.IdEditor === undefined || request.request.IdEditor === null)
          return true
      if(parseInt(request.request?.IdEditor) !== parseInt(user.USR_Id))
          return true    
      if(campo.FDI_EditableSiempre === 1 || campo.FDI_Editable === 1)
          return false
      return true
    }

    return (
      <Controller
          control={frmRequest.control}
          name={campo.FDI_NombreHTML}
          rules={{
              validate: {
                required: (value) => {
                  if (!Fn.validaRut(value)) return 'El RUT ingresado no es válido';
                  if (!value && campo.FDI_CampoObligatorio) return campo.FDI_ErrorMessage;
                }
              },
              maxLength: 13
            }}
          //defaultValue={FormatearRut(campo.DFO_Dato)}
          render={({ field }) => (
              <FormControl
                  {...field}
                  id={campo.FDI_NombreHTML}
                  size='sm'
                  className={className}>
                  <Input    
                      placeholder={campo.FDI_Descripcion}
                      name={campo.FDI_NombreHTML}
                      disabled={disabled()}                      
                      autoComplete='on'
                      autoFocus={false}
                      error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}                                          
                      variant="outlined"                      
                      slots={{ input: InnerInput }}
                      onChange={(e) => field.onChange(()=>frmRequest.setValue(campo.FDI_NombreHTML,FormatearRut(e.target.value)))}
                      onBlur={field.onBlur}
                      value={FormatearRut(field.value) || ''}
                      slotProps={{ 
                              input: { placeholder: campo.FDI_Placeholder, type: 'text', label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                              root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}
                      sx={{
                          '--Input-minHeight': '56px',
                          '--Input-radius': '6px',
                      }}                                
                  />
                  <FormHelperText className="!text-red-600">
                      {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                  </FormHelperText>                       
              </FormControl>
          )}
      />
    );
}