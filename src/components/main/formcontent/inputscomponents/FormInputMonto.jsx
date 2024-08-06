/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'

const NumericFormatAdapter = forwardRef(
    function NumericFormatAdapter(props, ref) {
        const { onChange, ownerState, ...other } = props;
    
        return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
            onChange({
                target: {
                //name: props.name,
                value: values.value,
                },
            });
            }}
            decimalScale={0}
            decimalSeparator=','
            thousandSeparator='.'
            valueIsNumericString
            prefix="$"
        />
        );
    },
);
NumericFormatAdapter.propTypes = {
    //name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function FormInputMonto ({ campo, className }) {
    const { request } = useRequest();
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
    const { control, formState: { errors } } = useFormContext();

    const disabled = () => {    
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
        control={control}
        name={campo.FDI_NombreHTML}
        rules={required}
        //defaultValue={campo.DFO_Dato}
        render={({ field: { onChange, onBlur, value } }) => (
            <FormControl
                id={campo.FDI_NombreHTML}
                size='sm'
                className={className}>
                <Input                                
                    placeholder={campo.FDI_Descripcion}
                    name={campo.FDI_NombreHTML}
                    disabled={disabled()}                    
                    autoComplete='on'
                    autoFocus={false}
                    error={!!errors[campo?.FDI_NombreHTML]}                    
                    //defaultValue={campo.DFO_Dato}
                    value={value}
                    variant="outlined"                    
                    slots={{ input: InnerInput }}
                    onChange={onChange}
                    onBlur={onBlur}                    
                    slotProps={{ 
                        input: { placeholder: campo.FDI_Placeholder, type: 'text', label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300', component:NumericFormatAdapter}, 
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