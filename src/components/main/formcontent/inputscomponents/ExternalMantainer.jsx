/* eslint-disable react/prop-types */
import { usePreview } from '../../../../hooks/usePreview.jsx'
import IconButton from '@mui/material/IconButton';
import { ExternalMantainerIcon } from '../../../../utils/icons.jsx'

export default function ExternalMantainer({titleMessage, tipo, error}){
    const { setPreview } = usePreview()
    const handleOnClikc = () =>{
        setPreview({
            state:true, 
            obj:tipo,
            selected: null
        })
    }    

    return (
        <IconButton aria-label={titleMessage} className='h-7 w-7 !rounded-[3px]' onClick={handleOnClikc}> 
            <ExternalMantainerIcon titleMessage={titleMessage} error={error}/>
        </IconButton>       
    )
}