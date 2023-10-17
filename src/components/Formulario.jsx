import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';

const { REQ_Adjuntos } = formulario;
const { FOR_Botones } = formulario;
const { FOR_Campos } = formulario;

export function Formulario(){
    const { request } = useRequest()
    return(
        <>
        {request &&
            <div className='pl-4'>
                <header className='w-full h-16'>
                    <h1 className='text-lg'>{request?.REQ_Descripcion}</h1>
                    <h2 className='text-base font-light leading-tight'>Acción requerida: <strong>{request?.ESR_AccionFlujoDatos}</strong></h2>
                    <div className='py-2'>
                        <div className='flex items-center gap-3'>
                            <div className='pt-3 pl-2'>
                                <img
                                    className='w-14 h-14 rounded-full' 
                                    src = {formulario.IdEditor_Foto} />
                            </div>
                            <div className='grid'>
                                <span className='text-base font-light leading-tight'>{request?.DRE_UsuarioEditAnt}</span>
                                <span className='text-sm font-light leading-tight'>Acción realizada: {request?.ESRAnterior_Descripcion}</span>                                
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </header>
            </div>
        }
        </>
    )
}