/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMantainers } from '../../hooks/useMantainers.jsx';
import { useInboxState } from '../../hooks/useInboxState.jsx';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useFilters } from '../../hooks/useFilters.jsx';
import { Suspense, useEffect } from "react";
import RegistroItem from "./maintainer/registroItem.jsx";
//import { mantenedores } from "../../mocks/mantenedores.json";
import Loading from "../../utils/Loading.jsx";
import { Constants } from "../../utils/const.jsx";

export default function ListaRegMantenedores({frmRecord}){
    const { filters, filterRequest } = useFilters()
    const { mantenedores, setMantenedores } = useMantainers()
    const { setAuth } = useAuth()
    const { setInboxState } = useInboxState()
    const { filteredRequest } = filterRequest(mantenedores)
    const { host, fecthParams : params, dateOptions : options } = Constants()

    useEffect(() => {
        const date = new Intl.DateTimeFormat(undefined, options).format(new Date())        
        let url = ''
        let message = date + ' - Error: Registros solicitado id: ' + filters.itemIdSelected + ' no encontrado'
        let msgfinal = ''
        let name = ''
        let error = true

        /*if(mantenedores.filter(item => item.id === filters.itemIdSelected).length > 0){
            message = date + ' - Registros de mantenedor id: ' + filters.itemIdSelected + ' cargados'
            error = false
        }*/

        //if(filters.itemIdSelected === 'mu' && mantenedores.filter(item => item.id === filters.itemIdSelected).length === 0){
        if(filters.itemIdSelected === 'mu'){
            url = host + '/api/mantenedores/usuarios?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de usuarios...'
            msgfinal = date + ' - Mantenedor de usuarios actualizado'
            name = 'usuarios'
            error = false
        }
        //if(filters.itemIdSelected === 'ml' && mantenedores.filter(item => item.id === filters.itemIdSelected).length === 0){
        if(filters.itemIdSelected === 'ml'){
            url = host + '/api/mantenedores/listas-desplegable?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de listas desplegable...'
            msgfinal = date + ' - Mantenedor de listas desplegable actualizado'
            name = 'listas desplegable'
            error = false
        }
        //if(filters.itemIdSelected === 'mi' && mantenedores.filter(item => item.id === filters.itemIdSelected).length === 0){
        if(filters.itemIdSelected === 'mi'){
            url = host + '/api/mantenedores/items-lista-desplegable?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de items de listas desplegable...'
            msgfinal = date + ' - Mantenedor de items de listas desplegable actualizado'
            name = 'items de listas desplegable'
            error = false
        }
        //if(filters.itemIdSelected === 'mp' && mantenedores.filter(item => item.id === filters.itemIdSelected).length === 0){
        if(filters.itemIdSelected === 'mp'){
            url = host + '/api/mantenedores/proveedores?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de proveedores...'
            msgfinal = date + ' - Mantenedor de proveedores actualizado'
            name = 'proveedores'
            error = false
        }
        //if(filters.itemIdSelected === 'mc' && mantenedores.filter(item => item.id === filters.itemIdSelected).length === 0){
        if(filters.itemIdSelected === 'mc'){
            url = host + '/api/mantenedores/comunas?PageNumber=1&RowsOfPage=' + filters.maxRecordLoaded
            message = date + ' - Actualizando registros de mantenedor de comunas...'
            msgfinal = date + ' - Mantenedor de comunas actualizado'
            name = 'comunas'
            error = false
        }
        setInboxState(prevState => ({
            ...prevState,            
            messages: [...prevState.messages, message],
            error: error
        }))
        if(url){
            fetch(url, params)
            .then((response) => response.json())
            .then((data) => {
                if(data.error){
                    if(parseInt(data.error) === 401){
                        setAuth(false)
                    }
                    message = date + ' - Error: Mantenedor de ' + name + ' ' +data.message
                }
                else
                    message = msgfinal;
                
                setMantenedores(prevState => ([...prevState, data]))
                setInboxState(prevState => ({
                    ...prevState,                    
                    messages: [...prevState.messages, message],
                    error: data.error ? true : false
                }))
            })
        }
    }, [filters.itemIdSelected])

    return (       
        <>
        <Suspense fallback={<Loading />}>{
            filteredRequest.length===0 && (
                <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[50vh] w-full !overflow-hidden">
                    <span className='text-[#2c87d2] text-xl w-full'>No se encontraron registros</span>
                </div>            
            )}
            {filteredRequest.map((item, index) => (
               <RegistroItem registro={item} key={item.id ? 'list-' + item?.id : 'unde-' + index} frmRecord={frmRecord}/>
            ))}        
        </Suspense>{
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