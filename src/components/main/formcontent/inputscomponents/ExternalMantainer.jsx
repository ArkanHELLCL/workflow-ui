/* eslint-disable react/prop-types */
import IconButton from '@mui/material/IconButton';
import { ExternalMantainerIcon } from '../../../../utils/icons.jsx'

export default function ExternalMantainer({titleMessage, tipo}){
    return (
        <IconButton aria-label={titleMessage} className='h-7 w-7 !rounded-[3px]' onClick={()=>console.log('Mostrar mantenedor' , tipo)}> 
            <ExternalMantainerIcon titleMessage={titleMessage}/>
        </IconButton>       
    )

}