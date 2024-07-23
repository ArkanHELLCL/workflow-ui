/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function InputSwitch ({frmRecord, name, label, className}) {    
    return(
        <div className={className + ' flex max-h-14'}>
            <Controller
                control={frmRecord.control}
                name={name}            
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
                                }}
                            />
                        } 
                        label={label} 
                        onChange={onChange} 
                        onBlur={onBlur}                    
                        className={'dark:!text-stone-100 !text-stone-950'} />                
                )}
            />
        </div>
    )
}