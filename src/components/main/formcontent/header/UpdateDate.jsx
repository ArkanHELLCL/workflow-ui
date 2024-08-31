/* eslint-disable react/prop-types */
import { useRequest } from '../../../../hooks/useRequest.jsx';
import { Constants } from "../../../../utils/const.jsx";

const fecha = (date, dias) => {
    const newDate = new Date(date)
    return dias[newDate.getDay()] + ' ' + newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes()        
} 

export default function UpdateDate(){
    const { request } = useRequest()
    const { dias } = Constants()

    return(
        <div className='justify-self-end pr-2 frmdate'>
            <span className='text-[11px] leading-tight'>{fecha(request?.request?.DRE_FechaEdit, dias)}</span>
        </div>
    )
}