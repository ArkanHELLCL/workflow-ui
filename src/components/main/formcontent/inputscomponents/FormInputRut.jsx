/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { useRequest } from '../../../../hooks/useRequest';
import { useFilters } from '../../../../hooks/useFilters';
import { user } from '../../../../mocks/usuario.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';
import { useMemo } from 'react';
import { Fn } from '../../../../utils/validaRut.jsx';
import FormatearRut from '../../../../utils/FormatearRut.jsx';

const CssTextField = styled((props) => <TextField {...props} />)(({ prefersdarkmode }) => ({
  '& label.Mui-focused': {
    color: '#0b6bcb',
    fontWeight: 400
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
      color: prefersdarkmode ? 'rgb(245 245 244)' : 'rgb(110 110 110)',
      '& fieldset': {
        borderColor: prefersdarkmode ? '#575757' : '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0b6bcb',
      },          
  },
  '& label': {
      color: prefersdarkmode ? '#575757' : '#afafaf',            
  },
  '& ::placeholder': {
      color: prefersdarkmode ? '#575757' : '#afafaf'
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: prefersdarkmode ? 'rgb(245 245 244)' : 'rgb(110 110 110)'
  },
}));


export default function FormInputRut ({ frmRequest, campo, className }) {
    const { request } = useRequest();
    const { filters } = useFilters(); 

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
              //fontWeight:300,
              //fontSize: "1rem",
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
                            prefersdarkmode={prefersDarkMode}  
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
        </ThemeProvider>
    );
}