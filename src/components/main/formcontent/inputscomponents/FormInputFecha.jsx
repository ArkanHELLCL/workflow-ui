/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
//import Input from '@mui/joy/Input';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
//import { InnerInput } from './StyledComponent.jsx';
import { useRequest } from '../../../../hooks/useRequest';
import { useFilters } from '../../../../hooks/useFilters';
import { user } from '../../../../mocks/usuario.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';
import { useMemo } from 'react';
import TextField from "@mui/material/TextField";

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
                rules={required}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <FormControl                    
                            size='sm'
                            className={className}>                            
                                <DatePicker
                                    name={campo.FDI_NombreHTML}                    
                                    disabled={disabled()}
                                    label={campo.FDI_Descripcion}
                                    value={value?.$d?.toLocaleDateString("es-CL") || null}
                                    onChange={(date) =>{
                                        onChange(date?.$d.toLocaleDateString("es-CL"));
                                    }}
                                    onBlur={onBlur}
                                    /*renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}
                                        helperText={
                                            !!!!frmRequest.formState.errors[campo?.FDI_NombreHTML] ? "My error message" : params?.inputProps?.placeholder
                                        }
                                        />
                                    )}*/
                                   slotProps={{
                                        textField: {
                                            error:!!error,
                                        },
                                   }}                                    
                                />
                            <FormHelperText className="!text-red-600 !text-xs !font-normal">
                                {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                            </FormHelperText>                       
                        </FormControl>
                    </LocalizationProvider>
                )}
            />
        </ThemeProvider>
    );
}