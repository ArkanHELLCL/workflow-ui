/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import { CssTextField } from './CssTextField.jsx'

export default function FormInputEmail ({ frmRequest, campo, className }) {
    const { request } = useRequest();    
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}

    const disabled = () => {
        if(!request) return false
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
                  if (!value && required) return campo.FDI_ErrorMessage;
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
                  id={campo.FDI_NombreHTML}                    
                  className={className}>
                  <CssTextField                        
                      placeholder={campo.FDI_Placeholder}
                      name={campo.FDI_NombreHTML}
                      disabled={disabled()}
                      autoComplete='on'
                      autoFocus={false}
                      error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}
                      value={value || ''}
                      variant="outlined"
                      onChange={onChange}
                      onBlur={onBlur}
                      label={campo.FDI_Descripcion}
                      helperText={`${disabled() ? '' : frmRequest.formState.errors[campo.FDI_NombreHTML]?.message ? frmRequest.formState.errors[campo.FDI_NombreHTML]?.message : value?.length ? value?.length + '/'+ campo.FDI_TamanoCampo : '0/'+ campo.FDI_TamanoCampo}`} 
                      inputProps={{
                        maxLength: campo.FDI_TamanoCampo
                      }}
                  />
              </FormControl>
          )}
      />
    )
}