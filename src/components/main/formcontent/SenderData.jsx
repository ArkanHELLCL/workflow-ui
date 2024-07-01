/* eslint-disable react/prop-types */

export default function SenderData({request, formulario}) {
    return (
        <div className='flex items-center gap-3'>
            <div className='pt-3 pl-2 relative hover:cursor-pointer' title="Enviar mensaje">
                <img
                    className='w-14 h-14 rounded-full' 
                    src = {formulario.IdEditor_Foto} />
                    <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold !text-white dark:bg-green-600 bg-green-500 rounded-full top-3 right-0"></span>
            </div>
            <div className='grid'>                                
                <span className='text-base font-light leading-tight'>De : {request?.request?.DRE_UsuarioEditAnt}</span>
                <span className='text-sm font-light leading-tight'>Acción realizada: <strong className='text-[#bf6ac3]'>{request?.request?.ESRAnterior_Descripcion}</strong></span>
            </div>
        </div>
    )
}