/* eslint-disable react/prop-types */
import { useRequest } from '../../../../hooks/useRequest.jsx';
export default function ReqTitle({handleNotDragOver}){
    const { request } = useRequest()
    return (
        <div className='frmtitle w-full' onDragOver={handleNotDragOver}>
            <h1 className='text-base truncate w-auto pr-2'>{request?.request?.REQ_Descripcion.toUpperCase()}</h1>
        </div>
    )
}