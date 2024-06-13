/* eslint-disable react/prop-types */
export default function Datarequest({request}) {    
    return (
        <div id="dataRequest" className='w-full h-full grid'>
            <h1 className='text-base truncate w-auto pr-2'>{request?.request?.REQ_Descripcion}</h1>
            <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>
            <h2 className='text-base font-light leading-tight'>Acción requerida: <strong className='text-green-600'>{request?.request?.ESR_AccionFlujoDatos}</strong></h2>   
        </div>    
    );
}