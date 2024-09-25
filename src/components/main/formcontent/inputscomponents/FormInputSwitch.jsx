/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function FormInputSwitch ({frmRequest, campo, className}) {    
    return(
        <div className={className + ' flex max-h-14 mx-auto'}>
            <Controller
                control={frmRequest.control}
                name={campo.FDI_NombreHTML}            
                render={({ field: { onChange, onBlur, value } }) => (                
                    <FormControlLabel 
                        control={
                            <Switch 
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
                                        },
                                        "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
                                            fontSize: '1rem !important'
                                        }
                                }}
                            />
                        } 
                        label={campo.FDI_Descripcion} 
                        onChange={onChange} 
                        onBlur={onBlur}                    
                        className={'dark:!text-stone-100 !text-stone-950 !text-base'} />                
                )}
            />
        </div>
    )
}