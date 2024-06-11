/* eslint-disable react/prop-types */
import { Constants } from "../../constants/const.jsx";

const fecha = (date, dias) => {
    const newDate = new Date(date)
    return dias[newDate.getDay()] + ' ' + newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes()        
} 

export default function UpdateDate({request}){
    const { dias } = Constants()

    return(
        <span className='text-[11px] leading-tight'>{fecha(request?.request?.DRE_FechaEdit, dias)}</span>
    )
}