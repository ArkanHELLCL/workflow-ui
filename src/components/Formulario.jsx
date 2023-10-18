import { formulario } from '../mocks/Formulario.json'
import { useRequest } from '../hooks/useRequest';
import { Constants } from "../constants/const.jsx";

const { REQ_Adjuntos } = formulario;
const { FOR_Botones } = formulario;
const { FOR_Campos } = formulario;

export function Formulario(){
    const { request } = useRequest()
    const { dias } = Constants()

    const fecha = (date) => {
        const newDate = new Date(date)
        return dias[newDate.getDay()] + ' ' + newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes()        
      }
    
    return(
        <>
        {request &&
            <div className='pl-4'>
                <header className='w-full h-16'>
                    <div className='flex justify-between relative'>
                        <div>
                            <h1 className='text-lg max-w-[1100px] truncate'>{request?.REQ_Descripcion}</h1>
                            <h2 className='text-base font-light leading-tight'>Acción requerida: <strong>{request?.ESR_AccionFlujoDatos}</strong></h2>
                        </div>
                        <div className='grid text-right leading-tight absolute right-2 top-8'>
                            <div className='flex items-center gap-0 pb-2'>
                                {
                                    FOR_Botones.map((boton, index) => 
                                        <button key={boton.id} className='h-7 w-auto dark:bg-[#444444] border border-[#666666]' title={boton.descripcion}>   
                                            <span className='text-[11px] font-light leading-tight w-fit px-2'>{boton.descripcion}</span>
                                        </button>
                                    )
                                }
                            </div>
                            <span className='text-[11px] leading-tight'>{fecha(request?.DRE_FechaEdit)}</span>
                        </div>
                    </div>
                    <div className='flex justify-between'>
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
                    </div>
                </header>
            </div>
        }
        </>
    )
}