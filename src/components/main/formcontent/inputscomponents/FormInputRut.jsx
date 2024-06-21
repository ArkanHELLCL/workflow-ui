/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { Fn } from '../../../../utils/validaRut.jsx';

const formatearRut = (rutSinFormato) => {
    const caracteresValidos = rutSinFormato.replace(/[^0-9kK]+/g, '');
    const rutInvertido = caracteresValidos.slice(0,11).split('').reverse().join('');
    const lenRut = rutInvertido.length
    let rutFormateado
    if(lenRut<7) return rutSinFormato
    if(lenRut===7) {
      rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{1,3})/,'$1-$2.$3');
    }
    if(lenRut>7 && lenRut<11) {
      rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{3})(\d{1,3})/,'$1-$2.$3.$4');
    }
    if(lenRut>=11) {
      rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{3})(\d{3})(\d{1,3})/,'$1-$2.$3.$4.$5');
    }    
    return rutFormateado?.split('').reverse().join('')
};

export default function FormInputRut ({ campo, className }) {
  const { control, setValue, formState: { errors } } = useFormContext();

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
        defaultValue={formatearRut(campo.DFO_Dato)}
        render={({ field }) => (
            <FormControl
                {...field}
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
                    //defaultValue={campo.DFO_Dato}
                    variant="outlined"
                    //endDecorator={<CheckCircleOutlined />}
                    slots={{ input: InnerInput }}
                    onChange={(e) => field.onChange(()=>setValue(campo.FDI_NombreHTML,formatearRut(e.target.value)))}
                    onBlur={field.onBlur}
                    value={field.value}
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