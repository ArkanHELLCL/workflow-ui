/* eslint-disable react/prop-types */
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import { styled } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { forwardRef, useId } from 'react';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'

  const StyledInput = styled(BaseTextareaAutosize)(
    {
        border: 'none', // remove the native input border
        minWidth: 0, // remove the native input width
        outline: 0, // remove the native input outline
        padding: 0, // remove the native input padding
        paddingTop: '1.5em',
        flex: 1,
        color: 'inherit',
        backgroundColor: 'transparent',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontStyle: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        textOverflow: 'ellipsis',
        '&::placeholder': {
          opacity: 0,
          transition: '0.1s ease-out',
        },
        '&:focus::placeholder': {
          opacity: 1,
        },
        '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
          top: '0.5rem',
          fontSize: '0.75rem',
        },
        '&:focus ~ label': {
          color: 'var(--Input-focusedHighlight)',
        },
        '&:-webkit-autofill': {
          alignSelf: 'stretch', // to fill the height of the root slot
        },
        '&:-webkit-autofill:not(* + &)': {
          marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
          paddingInlineStart: 'var(--Input-paddingInline)',
          borderTopLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
          borderBottomLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
        },
    }
  );

  const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Input-minHeight) - 1em) / 2)',
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  }));

const TextArea = forwardRef(function InnerInput(props, ref) {
    const id = useId();
    return (
        <>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id} className='!font-thin'>{props.label}</StyledLabel>
        </>
    );
  });

export default function FormInputTextArea ({ campo, className }) {
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
                    value={value || ''}
                    variant="outlined"                    
                    slots={{ input: TextArea }}
                    onChange={onChange}
                    onBlur={onBlur}                    
                    slotProps={{ 
                            input: { placeholder: campo.FDI_Placeholder, label: campo.FDI_Descripcion, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
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