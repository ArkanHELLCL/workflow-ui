/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function InputSwitch ({frmRecord, name, value, label, className}) {    
    return(
        <Controller
            control={frmRecord.control}
            name={name}            
            defaultValue={value}            
            render={({ field: { onChange, onBlur } }) => (                
                <FormControlLabel 
                    control={<Switch defaultChecked={value} />} 
                    label={label} 
                    onChange={onChange} 
                    onBlur={onBlur} 
                    className={className} />                
            )}
        />
    )
}