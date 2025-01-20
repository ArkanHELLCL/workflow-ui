/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRequest } from '../../../../hooks/useRequest';
import { useUserData } from '../../../../hooks/useUserData.jsx';
import Switch from '@mui/material/Switch';

export default function FormInputSwitch ({frmRequest, campo, className}) {    
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

    return(
        <div className={className + ' flex max-h-14 mx-auto'}>
            <Controller
                control={frmRequest.control}
                name={campo.FDI_NombreHTML}
                rules={required}
                render={({ field: { onChange, onBlur, value } }) => (                
                    <FormControlLabel 
                        control={
                            <Switch
                                disabled={disabled()}
                                checked={value}
                                sx={{
                                    "&.MuiSwitch-root .MuiSwitch-switchBase": {
                                    color: "#999999",                                  
                                    },
                                
                                    "&.MuiSwitch-root .Mui-checked": {
                                    color: "#2c87d2"
                                    },

                                    "&.MuiSwitch-root .MuiSwitch-track": {
                                        backgroundColor: "#575757"                                    
                                    }                                    
                                }}
                            />
                        } 
                        label={campo.FDI_Descripcion} 
                        onChange={onChange} 
                        onBlur={onBlur}                    
                        className={'dark:!text-[#f5f5f4] !text-[#6e6e6e]'} 
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '1rem'
                            }
                        }}/>                
                )}
            />
        </div>
    )
}