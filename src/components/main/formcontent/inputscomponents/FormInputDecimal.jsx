/* eslint-disable react/prop-types */
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useRequest } from '../../../../hooks/useRequest';
import { useUserData } from '../../../../hooks/useUserData.jsx';
import { CssTextField } from './CssTextField.jsx'

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
            decimalScale={2}
            decimalSeparator=','
            thousandSeparator='.'
            valueIsNumericString
            //prefix="$"
        />
        );
    },
);
NumericFormatAdapter.propTypes = {
    //name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function FormInpuDecimal ({ frmRequest, campo, className }) {
    const { request } = useRequest();
    const { userdata : user } = useUserData();
    const required = campo.FDI_CampoObligatorio === 1 ? {required : campo.FDI_ErrorMessage} : {required : false}

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
          rules={required}                
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
                      helperText={frmRequest.formState.errors[campo.FDI_NombreHTML]?.message} 
                      slotProps={{ input: { inputComponent: NumericFormatAdapter } }}
                      inputProps={{
                        maxLength: campo.FDI_TamanoCampo
                      }}
                  />
              </FormControl>
          )}
      />
  );
}