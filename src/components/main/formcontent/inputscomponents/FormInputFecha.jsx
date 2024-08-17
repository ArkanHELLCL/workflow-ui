/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { InnerInput } from './StyledComponent.jsx';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'

export default function FormInputFecha ({ campo, className }) {
    const { request } = useRequest();  
    const { control, formState: { errors } } = useFormContext();
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
    return (
        <Controller
            control={control}
            name={campo.FDI_NombreHTML}            
           rules={required}
            render={({ field: { onChange, onBlur, value } }) => (
                <FormControl                    
                    size='sm'
                    className={className}>
                    <Input
                        placeholder={campo.FDI_Descripcion}
                        name={campo.FDI_NombreHTML}                    
                        disabled={disabled()}
                        autoComplete='on'
                        autoFocus={false}
                        error={!!errors[campo?.FDI_NombreHTML]}                        
                        value={value || ''}
                        variant="outlined"                        
                        slots={{ input: InnerInput }}
                        onChange={onChange}
                        onBlur={onBlur}                    
                        slotProps={{ 
                                input: { placeholder: campo.FDI_Placeholder, type: 'date', label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
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
}