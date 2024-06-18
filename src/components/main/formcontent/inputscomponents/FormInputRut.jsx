/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
//import PropTypes from 'prop-types';
//import { IMaskInput, IMask } from 'react-imask';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { Fn } from '../../../../utils/validaRut.jsx';
//import { useEffect } from 'react';
//import { forwardRef } from 'react';

export const FormInputRut = ({ campo, className }) => {
  //const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
  const { control, formState: { errors } } = useFormContext();

  /*
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
        console.log(value[campo.FDI_NombreHTML], name, type)
        const rut = value[campo.FDI_NombreHTML];

        if (rut) {
            const dv = rut.slice(-1);
            const rutSinDv = rut.slice(0, -1);
            const rutCompleto = rutSinDv + '-' + dv;

            setValue(campo.FDI_NombreHTML, rutCompleto, { shouldValidate: true, shouldDirty: true }); 
            
            if (!Fn.validaRut(rut)) {
                console.log(campo.FDI_NombreHTML, 'Rut no válido');
            

                console.log(dv, rutSinDv);
                //setValue(campo.FDI_NombreHTML, rutSinDv + '-' + dv, { shouldValidate: true, shouldDirty: true });            
            }
        }
    })
    return () => subscription.unsubscribe()
    
  }, [watch]);
*/
  return (
    <Controller
        control={control}
        name={campo.FDI_NombreHTML}
        rules={{
            validate: {
              required: (value) => {
                if (!Fn.validaRut(value)) return 'El RUT ingresado no es válido';
                if (!value && campo.FDI_CampoObligatorio) return campo.FDI_ErrorMessage;
              }
            },
            maxLength: 13
          }}
        defaultValue={campo.DFO_Dato}
        render={({ field : {onChange, onBlur} }) => (
            <FormControl
                id={campo.FDI_NombreHTML}
                size='sm'
                className={className}>
                <Input    
                    placeholder={campo.FDI_Descripcion}
                    name={campo.FDI_NombreHTML}
                    //type='text'
                    autoComplete='on'
                    autoFocus={false}
                    error={!!errors[campo?.FDI_NombreHTML]}                    
                    defaultValue={campo.DFO_Dato}
                    variant="outlined"
                    //endDecorator={<CheckCircleOutlined />}
                    slots={{ input: InnerInput }}
                    onChange={onChange}
                    onBlur={onBlur}   
                    slotProps={{ 
                            input: { placeholder: campo.FDI_Placeholder, type: 'text', label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                            root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}
                    sx={{
                        '--Input-minHeight': '56px',
                        '--Input-radius': '6px',
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