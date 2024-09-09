/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/joy/Autocomplete';
import FormHelperText from '@mui/material/FormHelperText';
import Box from "@mui/material/Paper";
import { Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
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
import  Sleep  from "../../../../utils/Sleep.jsx";
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import ExternalMantainer from './ExternalMantainer.jsx'

export default function FormInputList ({ frmRequest, campo, className }) {  
  const { request } = useRequest();
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
      <Controller
          control={frmRequest.control}
          name={campo.FDI_NombreHTML}
          rules={required}        
          render={({ field }) => (
              <FormControl                                
                  size='sm'
                  className={className}>
                  <Autocomplete
                      {...field}
                      autoComplete={true}
                      clearOnEscape={true}
                      defaultValue={dataOptions.records?.find((option) => option.id == parseInt(field.value)) || ''}
                      disabled={disabled()}
                      placeholder={campo.FDI_Descripcion}
                      error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}  
                      variant="outlined"
                      slots={{ input: InnerInput }}
                      onChange={(event, newValue) => {                      
                        frmRequest.setValue(campo.FDI_NombreHTML,newValue,{ shouldDirty: false });
                      }}                    
                      onBlur={field.onBlur}                                      
                      value={dataOptions.records?.find((option) => option.id == parseInt(field.value)) || field.value || ''}
                      slotProps={{ 
                              input: { placeholder: campo.FDI_Placeholder, label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                              root : { className : "dark:!bg-transparent dark:!border-[#575757]"},
                              popupIndicator: { className: "dark:hover:!bg-[#444444]" },
                              clearIndicator: { className: "dark:hover:!bg-[#444444]" },
                              option: { className: "dark:!bg-[#575757] dark:hover:!bg-[#444444] hover:bg-[#cde6f7] dark:!text-stone-100 dark:hover:!text-stone-100 !text-base !font-light !pl-2" },
                              listbox: { className: "dark:!bg-[#575757] dark:!border-[#575757] dark:!text-stone-100 !text-white"},
                              inputRoot: { className: "dark:!bg-transparent dark:!border-[#575757] dark:!text-stone-100 dark:!shadow-none" },
                              loadingIndicator: { className: "dark:!bg-transparent dark:!border-[#575757] dark:!text-stone-100 !text-white" },
                      }}
                      sx={{
                          '--Input-minHeight': '56px',
                          '--Input-radius': '6px',
                      }}
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
                      endDecorator={
                          /*loading ? (
                              <CircularProgress size="sm" sx={{ bgcolor: 'transparent' }} />
                          ) : null*/
                          buttonMantainer ? ( <ExternalMantainer titleMessage={'Agregar un nuevo proveedor'} tipo={campo.FDI_TipoCampo} /> ) : null
                      }
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
                  />
                  <FormHelperText className="!text-red-600">
                      {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                  </FormHelperText>                       
              </FormControl>
          )}
      />    
  );
}