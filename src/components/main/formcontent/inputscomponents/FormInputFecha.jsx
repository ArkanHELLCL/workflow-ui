/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EventIcon from '@mui/icons-material/Event';
import { CssTextField } from './CssTextField.jsx'

export default function FormInputFecha ({ frmRequest, campo, className }) {
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
                        if (!value?.$y && value) return 'Debes ingresar una fecha válida';
                        if (!value && required) return campo.FDI_ErrorMessage;
                      }
                    },
                    maxLength: 13
                  }}
                render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                    
                        <FormControl                    
                            size='sm'
                            className={className}>                            
                                <DatePicker
                                    name={campo.FDI_NombreHTML}                    
                                    disabled={disabled()}
                                    label={campo.FDI_Descripcion}
                                    value={value || null}
                                    inputRef={ref}
                                    onChange={(date) => {
                                        onChange(date);
                                    }}
                                    onBlur={onBlur}
                                    slotProps={{
                                      textField: {
                                          error:!!error,
                                          helperText: error?.message
                                      }
                                    }}
                                    slots={{
                                        openPickerIcon: campo.FDI_TipoCampo.trim().toUpperCase() === 'V' ? NotificationsNoneIcon : EventIcon,
                                        textField: CssTextField
                                    }}
                                />
                            
                        </FormControl>
                )}
            />        
    )
}