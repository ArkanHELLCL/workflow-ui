/* eslint-disable react/prop-types */
import { useFilters } from '../../../../hooks/useFilters';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import { esES } from '@mui/x-data-grid/locales';

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
            prefix="#"
        />
        );
    },
);

NumericFormatAdapter.propTypes = {
    //name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
const CssTextField = styled((props) => <TextField {...props} />)(({ prefersdarkmode }) => ({
    '& label.Mui-focused': {
      color: '#0b6bcb',
      fontWeight: 400
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        color: prefersdarkmode ? 'rgb(245 245 244)' : 'rgb(110 110 110)',
        '& fieldset': {
          borderColor: prefersdarkmode ? '#575757' : '#E0E3E7',
        },
        '&:hover fieldset': {
          borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0b6bcb',
        },          
    },
    '& label': {
        color: prefersdarkmode ? '#575757' : '#afafaf',            
    },
    '& ::placeholder': {
        color: prefersdarkmode ? '#575757' : '#afafaf'
    },
    '& .MuiInputBase-input.Mui-disabled': {
      WebkitTextFillColor: prefersdarkmode ? 'rgb(245 245 244)' : 'rgb(110 110 110)'
    },
}));

export default function FormInputNumber ({ frmRequest, campo, className }) {
    const { request } = useRequest();
    const { filters } = useFilters(); 
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}

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
        <ThemeProvider theme={theme}>
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
                            prefersdarkmode={prefersDarkMode}
                            placeholder={campo.FDI_Placeholder}
                            name={campo.FDI_NombreHTML}
                            disabled={disabled()}
                            autoComplete='on'
                            autoFocus={false}
                            error={!!frmRequest.formState.errors[campo?.FDI_NombreHTML]}
                            value={value || ''}
                            variant="outlined"
                            onChange={onChange}
                            onBlur={onBlur}
                            label={campo.FDI_Descripcion}
                            helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message}
                            slotProps={{ input: { inputComponent: NumericFormatAdapter } }}
                        />
                    </FormControl>
                )}
            />
        </ThemeProvider>
  );
}