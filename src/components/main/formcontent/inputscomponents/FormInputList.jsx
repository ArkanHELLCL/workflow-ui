/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMantainer } from '../../../../hooks/useMantainer.jsx';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import Box from "@mui/material/Paper";
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import meses  from "../../../../mocks/meses.json";
import proveedores  from "../../../../mocks/proveedores.json";
import tipodocumento from "../../../../mocks/tipodocumento.json";
import moneda from "../../../../mocks/moneda.json";
import usuarios from "../../../../mocks/usuarios.json";
import periodos from "../../../../mocks/periodos.json";
import tipodeservicio from "../../../../mocks/tipodeservicio.json";
import tipodepago from "../../../../mocks/tipodepago.json";
import pagotesoreria from "../../../../mocks/pagotesoreria.json";
import regiones from "../../../../mocks/regiones.json";
import bancos from "../../../../mocks/bancos.json";
import tiposdecuenta from "../../../../mocks/tiposdecuenta.json";
import departamentos from "../../../../mocks/departamentos.json";
import sexos from "../../../../mocks/sexos.json";
import perfiles from "../../../../mocks/perfiles.json";
import  Sleep  from "../../../../utils/Sleep.jsx";
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import InputAdornment from '@mui/material/InputAdornment';
import ExternalMantainer from './ExternalMantainer.jsx'
import { CssTextField } from './CssTextField.jsx'

export default function FormInputList ({ frmRequest, campo, className }) {  
  const { request } = useRequest();
  const { mantainer } = useMantainer();
  const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}  

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [dataOptions, setDataOptions] = useState([]);
  const [buttonMantainer, setButtonMantainer] = useState(false);
  const loading = open && options.length === 0;

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

  useEffect(() => {
    if(campo.FDI_TipoCampo==='X1'){
      console.log('mantainer',mantainer)
      if(mantainer?.id === 'mpmant'){
        proveedores.records.push(mantainer?.record)
      }
    }
  },[mantainer])  

  useEffect(() => {
    if(campo.FDI_TipoCampo==='X1'){      
      setDataOptions(proveedores)
      setButtonMantainer(true);
      return
    }
    if(campo.FDI_TipoCampo==='X2'){      
      setDataOptions(regiones)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='X3'){
      setDataOptions(bancos)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='X4'){
      setDataOptions(tiposdecuenta)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='X5'){      
      setDataOptions(departamentos)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='X6'){
      setDataOptions(sexos)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='X7'){      
      setDataOptions(perfiles)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='U'){
      setDataOptions(usuarios)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='PM'){
      setDataOptions(periodos)
      setButtonMantainer(false);
      return
    }
    if(campo.FDI_TipoCampo==='L'){
      setButtonMantainer(false);
      if(campo.LID_Id===16){
        setDataOptions(meses)
        return
      }
      if(campo.LID_Id===17){
        setDataOptions(tipodocumento)
        return
      }
      if(campo.LID_Id===4){
        setDataOptions(moneda)
        return
      }
      if(campo.LID_Id===20){
        setDataOptions(tipodeservicio)
        return
      }
      if(campo.LID_Id===13){
        setDataOptions(tipodepago)
        return
      }
      if(campo.LID_Id===18){
        setDataOptions(pagotesoreria)
        return
      }
    }  
  },[proveedores,regiones,bancos,tiposdecuenta,departamentos,sexos,perfiles,usuarios,periodos,meses,tipodocumento,moneda,tipodeservicio,tipodepago,pagotesoreria])

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
                      <Box component="li" {...props} key={option.id} className='dark:bg-black bg-white px-3 !border-0 !rounded-none'>                        
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
                        error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}
                        label={campo.FDI_Descripcion} 
                        slotProps={{
                          input: {
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                <InputAdornment position="end">
                                  {buttonMantainer ? ( <ExternalMantainer titleMessage={'Agregar un nuevo proveedor'} tipo={campo.FDI_TipoCampo} error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}/> ) : null}
                                </InputAdornment>
                                {params.InputProps.endAdornment}
                              </>
                            ),
                          },
                        }}
                        helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                      />
                    }
                />
            </FormControl>
        )}
    />
  )
}