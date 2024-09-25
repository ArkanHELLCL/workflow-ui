/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useRequest } from '../../../../hooks/useRequest';
import { user } from '../../../../mocks/usuario.json'
import { CssTextField } from './CssTextField.jsx'

const NumericFormatAdapter = forwardRef(
    function NumericFormatAdapter(props, ref) {
        const { onChange, ownerState, ...other } = props;
    
        return (
        <PatternFormat
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
            //decimalScale={0}            
            valueIsNumericString={true}
            //prefix="(+56) "
            format="(+56) # #### ####"
            mask="_"
        />
        );
    },
);

NumericFormatAdapter.propTypes = {
    //name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function FormInputPhone ({ frmRequest, campo, className }) {
    const { request } = useRequest();    
    //const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}
    const required = campo.FDI_CampoObligatorio === 1 ? true : false

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
    return (        
      <Controller
          control={frmRequest.control}
          name={campo.FDI_NombreHTML}
          rules={{
            validate: {
                required: (value) => {                    
                  if (value.length<9 && required) return 'Debes ingresar un número de teléfono válido';                  
                }
            },
            maxLength: campo.FDI_TamanoCampo
        }}
          render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                  id={campo.FDI_NombreHTML}
                  size='sm'
                  className={className}>                    
                  <CssTextField                            
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
                      helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message } 
                      slotProps={{ input: { inputComponent: NumericFormatAdapter } }}                            
                  />
              </FormControl>
          )}
      />
  )
}