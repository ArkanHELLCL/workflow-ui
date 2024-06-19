/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { useEffect, useState } from 'react';
import  meses  from "../../../../mocks/meses.json";
import  proveedores  from "../../../../mocks/proveedores.json";

function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

export const FormInputList = ({ campo, className }) => {
  const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
  const { control, setValue, formState: { errors } } = useFormContext();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  let dataOptions = [];
  campo.FDI_TipoCampo==='X1' ? dataOptions = structuredClone(proveedores) : campo.LID_Id===16 && campo.FDI_TipoCampo==='L' ? dataOptions = structuredClone(meses) : dataOptions = [];

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        /*if(campo.LID_Id===16 && campo.FDI_TipoCampo==='L') //Meses
          {setOptions([...meses.records])}
        if(campo.FDI_TipoCampo==='X1')
          {setOptions([...proveedores.records])}*/
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

  /*useEffect(() => {
    reset({
      PagMes: meses.records.find((option) => option.id == meses.selected.id),
    })
  }, [reset])*/

  return (
    <Controller
        control={control}
        name={campo.FDI_NombreHTML}
        rules={required}
        defaultValue={dataOptions.records.find((option) => option.id == dataOptions.selected.id)}        
        render={({ field }) => (
            <FormControl                
                id={campo.FDI_NombreHTML}
                size='sm'
                className={className}>
                <Autocomplete
                    {...field}
                    placeholder={campo.FDI_Descripcion}
                    //name={campo.FDI_NombreHTML}
                    error={!!errors[campo?.FDI_NombreHTML]}                    
                    //defaultValue={meses.records.find((option) => option.id == meses.selected.id)}
                    //value={meses.records.find((option) => option.id == meses.selected.id)}
                    variant="outlined"
                    slots={{ input: InnerInput }}
                    onChange={(event, newValue) => {
                      setValue(campo.FDI_NombreHTML,newValue);
                    }}
                    //onChange={field.onChange}
                    onBlur={field.onBlur}                    
                    slotProps={{ 
                            input: { placeholder: campo.FDI_Placeholder, label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                            root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}
                    sx={{
                        '--Input-minHeight': '56px',
                        '--Input-radius': '6px',
                    }}
                    //autoComplete={true}
                    //autoSelect={true}
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
                        loading ? (
                            <CircularProgress size="sm" sx={{ bgcolor: 'transparent' }} />
                        ) : null
                    }
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option.id}>
                          {option.label}
                        </li>
                      );
                    }}
                />
                <FormHelperText className="!text-red-600">
                    {errors[campo.FDI_NombreHTML]?.message}
                </FormHelperText>                       
            </FormControl>
        )}
    />
  );
};