/* eslint-disable react/prop-types */
import IconButton from '@mui/material/IconButton';
import { ExternalMantainerIcon } from '../../../../utils/icons.jsx'

export default function ExternalMantainer({titleMessage, tipo, maintainer, setMaintainer}){
    const handleOnClikc = () =>{
        setMaintainer({state:true, obj:tipo})
    }    

    return (
        <IconButton aria-label={titleMessage} className='h-7 w-7 !rounded-[3px]' onClick={handleOnClikc}> 
            <ExternalMantainerIcon titleMessage={titleMessage}/>
        </IconButton>       
    )
}