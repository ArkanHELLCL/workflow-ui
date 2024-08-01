/* eslint-disable react/prop-types */
export default function SenderData({request, formulario}) {
    return (
        <div className='flex items-center gap-3 pb-1 pt-1'>
            <div className="relative">
                <div className='hover:cursor-pointer w-14 h-14 flex items-center p-0 m-0 overflow-hidden' id='imgSender' title="Enviar mensaje">
                    <img src = {formulario.IdSender_Foto} />                
                </div>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold !text-white dark:bg-green-600 bg-green-500 rounded-full top-0 -right-1"></span>
            </div>
            <div className='grid'>                                
                <span className='text-base font-light leading-tight'>De : {request?.request?.DRE_UsuarioEditAnt ? request?.request?.DRE_UsuarioEditAnt!="0" ? request?.request?.DRE_UsuarioEditAnt : request?.request?.NombreEditor ? request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor : request?.request?.NombreCreador + ' ' + request?.request?.ApellidoCreador : request?.request?.NombreCreador + ' ' + request?.request?.ApellidoCreador}</span>
                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.request?.ESRAnterior_Descripcion}</strong></span>
            </div>            
        </div>
    )
}