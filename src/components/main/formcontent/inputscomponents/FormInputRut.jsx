/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import { Fn } from '../../../../utils/validaRut.jsx';
import FormatearRut from '../../../../utils/FormatearRut.jsx';
import { CssTextField } from './CssTextField.jsx'

export default function FormInputRut ({ frmRequest, campo, className }) {
    const { request } = useRequest();    

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
                    if (!Fn.validaRut(value) && value) return 'El RUT ingresado no es válido';
                    if (!value && campo.FDI_CampoObligatorio) return campo.FDI_ErrorMessage;
                  }
              },
              maxLength: campo.FDI_TamanoCampo
          }}
          render={({ field }) => (
              <FormControl
                  {...field}
                  id={campo.FDI_NombreHTML}
                  size='sm'
                  className={className}>
                  <CssTextField
                      placeholder={campo.FDI_Descripcion}
                      name={campo.FDI_NombreHTML}
                      disabled={disabled()}                      
                      autoComplete='on'
                      autoFocus={false}
                      error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}                                          
                      variant="outlined"
                      onChange={(e) => field.onChange(()=>frmRequest.setValue(campo.FDI_NombreHTML,FormatearRut(e.target.value)))}
                      onBlur={field.onBlur}
                      value={FormatearRut(field.value) || ''}
                      label={campo.FDI_Descripcion}
                      helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                  />
              </FormControl>
          )}
      />
    )
}