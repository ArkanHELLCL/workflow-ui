/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMantainers, useFilters } from '../../hooks';
import RegistroItem from "./maintainer/registroItem.jsx";

export default function ListaRegMantenedores({frmRecord}){
    const { filters, filterRequest } = useFilters()
    const { mantenedores } = useMantainers()
    const { filteredRequest } = filterRequest(mantenedores)

    return (       
        <>
            {
                filteredRequest.length===0 && (
                    <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[50vh] w-full !overflow-hidden">
                        <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                    </div>            
                )}
                {filteredRequest.map((item, index) => (
                    <RegistroItem registro={item} key={item.id ? 'list-' + item?.id : 'unde-' + index} frmRecord={frmRecord}/>
                ))}        
            {
                filteredRequest.length === filters.maxRecordLoaded ? 
                    <div className="!text-xs font-semibold !text-center !text-stone-500 dark:!text-stone-100 flex flex-col py-3 gap-3">
                        <span>Hay más elementos en esta carpeta en el servidor</span>
                        <label htmlFor="btnMore" className="underline font-semibold text-xs text-[#2c87d2] cursor-pointer">Haga click aquí para ver más sobre elementos de esta carpeta</label>
                        <button id="btnMore" className="hidden" onClick={()=>console.log("Ver más")}></button>
                    </div>
                : null
            }
        </>
    )
}