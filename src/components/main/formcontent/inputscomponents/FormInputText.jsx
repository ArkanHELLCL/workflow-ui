/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
//import Input from '@mui/joy/Input';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
//import { InnerInput } from './StyledComponent.jsx';
import { useRequest } from '../../../../hooks/useRequest';
import { useFilters } from '../../../../hooks/useFilters';
import { user } from '../../../../mocks/usuario.json'

export default function FormInputText ({ frmRequest, campo, className }) {
    const { request } = useRequest();
    const { filters } = useFilters();   //darkMode
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

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#0b6bcb',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            color: filters.darkMode ? 'rgb(245 245 244)' : 'rgb(12 10 9)',
          '& fieldset': {
            borderColor: filters.darkMode ? '#575757' : '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#0b6bcb',
          },
          
        },
      });
    return (
    <Controller
        control={frmRequest.control}
        name={campo.FDI_NombreHTML}
        rules={required}        
        render={({ field: { onChange, onBlur, value } }) => (
            <FormControl
                id={campo.FDI_NombreHTML}
                size='sm'
                className={className}>
                <CssTextField                                 
                    placeholder={campo.FDI_Descripcion}
                    name={campo.FDI_NombreHTML}                    
                    disabled={disabled()}                    
                    autoComplete='on'
                    autoFocus={false}
                    error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}                                        
                    value={value || ''}
                    variant="outlined"
                    //slots={{ input: InnerInput }}
                    onChange={onChange}
                    onBlur={onBlur}   
                    label={campo.FDI_Descripcion}
                    /*slotProps={{ 
                            input: { placeholder: campo.FDI_Placeholder, type: 'text', label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                            root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}*/
                    /*sx={{
                        '--Input-minHeight': '56px',
                        '--Input-radius': '6px',
                    }}    */                            
                />
                <FormHelperText className="!text-red-600">
                    {frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                </FormHelperText>                       
            </FormControl>
        )}
    />
    );
}