/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense } from "react";
import RegistroItem from "./maintainer/registroItem.jsx";
import { useFilters } from '../../hooks/useFilters.jsx';
import { mantenedores } from "../../mocks/mantenedores.json";
import Loading from "../../utils/Loading.jsx";

//const mantenedores = lazy(() => import('../../mocks/mantenedores.json'));

export default function ListaRegMantenedores(){
    const { filterRequest } = useFilters() 
    const { filteredRequest } = filterRequest(mantenedores)   
    //console.log('ListaRegMantenedores')
    return (        
        <Suspense fallback={<Loading />}>{
            filteredRequest.length===0 && (
                <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-full w-full !overflow-hidden">
                    <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                </div>            
            )}
            {filteredRequest.map((item, index) => (
               <RegistroItem registro={item} key={item.id ? 'list-' + item?.id : 'unde-' + index}/>
            ))}        
        </Suspense>            
    )
}