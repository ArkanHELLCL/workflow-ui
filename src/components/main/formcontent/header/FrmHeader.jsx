/* eslint-disable react/prop-types */
import { useRequest } from '../../../../hooks/useRequest.jsx';
export default function FrmHeader({handleNotDragOver}) {
    const { request } = useRequest()
    return(
        <div className='frmheader' onDragOver={handleNotDragOver}>
            <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>
            <h2 className='text-sm font-light leading-tight'>Para: <strong>{request?.request?.NombreEditor ? request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor : request?.request?.DepDescripcionActual}</strong></h2>
        </div>
    )
}