/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from "@mui/material/Paper";
import { Controller } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import meses  from "../../../../mocks/meses.json";
import proveedores  from "../../../../mocks/proveedores.json";
import tipodocumento from "../../../../mocks/tipodocumento.json";
import moneda from "../../../../mocks/moneda.json";
import usuarios from "../../../../mocks/usuarios.json";
import periodos from "../../../../mocks/periodos.json";
import tipodeservicio from "../../../../mocks/tipodeservicio.json";
import tipodepago from "../../../../mocks/tipodepago.json";
import pagotesoreria from "../../../../mocks/pagotesoreria.json";
import  Sleep  from "../../../../utils/Sleep.jsx";
import { useRequest } from '../../../../hooks/useRequest';
import { useFilters } from '../../../../hooks/useFilters';
import { user } from '../../../../mocks/usuario.json'
import InputAdornment from '@mui/material/InputAdornment';
import ExternalMantainer from './ExternalMantainer.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';
import { styled } from '@mui/material/styles';

const CssTextField = styled((props) => <TextField {...props} />)(({ prefersdarkmode }) => ({
  '& label.Mui-focused': {
    color: '#0b6bcb',
    fontWeight: 400
  },
  
  '& .MuiOutlinedInput-root': {
      color: prefersdarkmode ? 'rgb(245 245 244)' : 'rgb(110 110 110)',      
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0b6bcb',
      },      
  },
  
  
}));

export default function FormInputList ({ frmRequest, campo, className }) {  
  const { request } = useRequest();
  const { filters } = useFilters(); 
  const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}  

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

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
              //fontWeight:300,
              //fontSize: "1rem",
              lineHeight: "1.5rem"
            },
          },
        },
      esES),
      [prefersDarkMode],
    );
  
  let dataOptions = [];
  let buttonMantainer = false;
  if(campo.FDI_TipoCampo==='X1'){
    dataOptions = structuredClone(proveedores)
    buttonMantainer = true;
  }
  if(campo.FDI_TipoCampo==='U')
    dataOptions = structuredClone(usuarios)
  if(campo.FDI_TipoCampo==='PM')
    dataOptions = structuredClone(periodos)
  if(campo.FDI_TipoCampo==='L'){
    if(campo.LID_Id===16)
      dataOptions = structuredClone(meses)
    if(campo.LID_Id===17)
      dataOptions = structuredClone(tipodocumento)
    if(campo.LID_Id===4)
      dataOptions = structuredClone(moneda)
    if(campo.LID_Id===20)
      dataOptions = structuredClone(tipodeservicio)
    if(campo.LID_Id===13)
      dataOptions = structuredClone(tipodepago)
    if(campo.LID_Id===18)
      dataOptions = structuredClone(pagotesoreria)
  }  

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await Sleep(1e2); // For demo purposes.

      if (active) {        
        setOptions([...dataOptions.records]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  /*const onChange = (event, newValue) => {
    console.log('onChange',newValue)  
    setValue(campo.FDI_NombreHTML,newValue);
  }*/

  return (
    <ThemeProvider theme={theme}>
        <Controller
            control={frmRequest.control}
            name={campo.FDI_NombreHTML}
            rules={required}        
            render={({ field }) => (
                <FormControl                  
                    className={className}>
                    <Autocomplete
                        {...field}
                        autoComplete={true}
                        clearOnEscape={true}
                        defaultValue={dataOptions.records?.find((option) => option.id == parseInt(field.value)) || ''}
                        disabled={disabled()}
                        placeholder={campo.FDI_Descripcion}
                        variant="outlined"                      
                        onChange={(event, newValue) => {                      
                          frmRequest.setValue(campo.FDI_NombreHTML,newValue,{ shouldDirty: false });
                        }}                    
                        onBlur={field.onBlur}                                      
                        value={dataOptions.records?.find((option) => option.id == parseInt(field.value)) || field.value || ''}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        getOptionLabel={(option) => option.label || ''}
                        options={options}
                        loading={loading}
                        
                        renderOption={(props, option) => 
                          <Box component="li" {...props} key={option.id}>                        
                              {option.label}
                          </Box>                      
                        }
                        clearText={'Limpiar'}
                        closeText={'Cerrar'}
                        loadingText={'Cargando...'}
                        noOptionsText={'No hay opciones'}
                        openText={'Abrir'}                      
                        renderInput={(params) => 
                          <CssTextField 
                            {...params} 
                            label={campo.FDI_Descripcion} 
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                endAdornment: (
                                  <>
                                    <InputAdornment position="end">
                                      {buttonMantainer ? ( <ExternalMantainer titleMessage={'Agregar un nuevo proveedor'} tipo={campo.FDI_TipoCampo} /> ) : null}
                                    </InputAdornment>
                                    {params.InputProps.endAdornment}
                                  </>
                                ),
                              },
                            }}
                            helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}/>}
                            //error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}
                    />
                </FormControl>
            )}
        />
    </ThemeProvider>
  );
}