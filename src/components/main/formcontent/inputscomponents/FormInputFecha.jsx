/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
//import Input from '@mui/joy/Input';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
//import { InnerInput } from './StyledComponent.jsx';
import { useRequest } from '../../../../hooks/useRequest';
import { useFilters } from '../../../../hooks/useFilters';
import { user } from '../../../../mocks/usuario.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';
import { useMemo } from 'react';

export default function FormInputFecha ({ frmRequest, campo, className }) {
    const { request } = useRequest();  
    const { filters } = useFilters(); 
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
    
    const disabled = () => {    
        if(request.request.IdEditor === undefined || request.request.IdEditor === null)
            return true
        if(parseInt(request.request?.IdEditor) !== parseInt(user.USR_Id))
            return true    
        if(campo.FDI_EditableSiempre === 1 || campo.FDI_Editable === 1)
            return false
        return true
    }
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
            },
            typography: {
              allVariants: {
                fontFamily: "Segoe UI Web (West European) ,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
                textTransform: 'none',              
                fontWeight:300,
                fontSize: "1rem",
                lineHeight: "1.5rem"
              },
            },
          },
        esES),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <Controller
                control={frmRequest.control}
                name={campo.FDI_NombreHTML}            
                //rules={required}
                rules={{
                    validate: {
                      required: (value) => {
                        console.log(value);
                        if (!value?.$y && value) return 'Debes ingresar una fecha válida';
                        if (!value && required) return campo.FDI_ErrorMessage;
                      }
                    },
                    maxLength: 13
                  }}
                render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                            helperText: error?.message,
                                            "&  .MuiFormHelperText-root": { 
                                                fontSize: '0.75rem',
                                                lineHeight: '1rem',
                                            }
                                        },                                        
                                    }}
                                />
                            
                        </FormControl>
                    </LocalizationProvider>
                )}
            />
        </ThemeProvider>
    );
}