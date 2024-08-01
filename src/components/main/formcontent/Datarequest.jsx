/* eslint-disable react/prop-types */
import { user } from "../../../mocks/usuario.json";
export default function Datarequest({request}) {    
    return (
        <div id="dataRequest" className='w-full h-full grid'>
            <h1 className='text-base truncate w-auto pr-2'>{request?.request?.REQ_Descripcion.toUpperCase()}</h1>
            <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>{
            parseInt(request?.request?.IdEditor) === parseInt(user.USR_Id) ?
                <h2 className='text-sm font-light leading-tight'>Para: <strong>{request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor}</strong></h2>
            :            
                <h2 className='text-sm font-light leading-tight'>Para: <strong>{request?.request?.NombreEditor ? request?.request?.DRE_UsuarioEditAnt : request?.request?.DepDescripcionActual}</strong></h2>
        }
            <h2 className='text-sm font-light leading-tight'>Acción requerida: <strong className='text-green-600'>{request?.request?.NombreEditor ? request?.request?.ESR_AccionFlujoDatos : 'Tomar'}</strong></h2>   
        </div>    
    );
}