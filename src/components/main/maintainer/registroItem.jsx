/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRecords } from "../../../hooks/useRecords.jsx";
import { BlockIcon, CheckIcon, DelIcon, EditIcon } from "../../../utils/icons.jsx"
import { Constants } from "../../../utils/const.jsx";
import { useFilters } from "../../../hooks/useFilters.jsx";
import { useEffect } from "react";

const { dias } = Constants()
const diaName = (fecha) => {
    const newDate = new Date(fecha)
    return dias[newDate.getDay()]
}

export default function RegistroItem ({registro, ...props}){
    const { record, setRecord } = useRecords()    
    const { filters } = useFilters()
    const regId = filters.itemIdSelected + '-' + registro.Id

    useEffect(() => {
        const el = document.getElementsByClassName('reqselected')[0]
        el?.classList.remove('reqselected')
        setRecord(null)
    },[filters.itemIdSelected])
    
    const handleRegClick = (id) => {        
        const elToRemove = document.getElementById(filters.itemIdSelected + '-' + record?.record.Id)
        elToRemove?.classList.remove('reqselected')
        const elToAdd = document.getElementById(id)
        elToAdd.classList.add('reqselected')        
        setRecord({            
            "record": registro,
          })
    }

    return(
        <article className={` regitem flex relative dark:border-[#353535] border-[#d4d4d4] border-b pl-6 pr-3 py-2 dark:hover:bg-[#383838] hover:bg-[#e6f2fa] cursor-pointer`} onClick={()=>handleRegClick(regId)} {...props} id={regId}>
            <div className="w-3/4">
            <p className={`${record?.record.Id === registro.Id ? 'dark:text-stone-100 text-stone-700' : 'dark:text-stone-200 text-stone-500'} truncate text-base font-thin capitalize leading-snug`}>{registro.subtitulo}</p>
            <p className={`truncate text-base font-thin uppercase leading-snug`}>{registro.titulo}</p>
            <p className={`${record?.record.Id === registro.Id ? 'dark:text-stone-400 text-stone-700' : 'dark:text-stone-500 text-stone-600'} truncate text-[11px] font-base uppercase leading-snug`}>{registro.detalle}</p>
            </div>
            <div className="w-1/4">
            <p className="dark:text-stone-100 text-stone-900 mt-0 flex align-middle justify-end">
                <span className="text-yellow-600 hover:text-yellow-400 leading-snug cursor-pointer" onClick={()=>console.log('click edit reg')} title="Modificar registro"><EditIcon/></span>                        
                <span className="text-red-600 dark:text-red-800 hover:text-red-400 dark:hover:text-red-500 leading-snug cursor-pointer" onClick={()=>console.log('clik act reg')} title="Eliminar registro"><DelIcon/></span>{
                    registro.estado === 1 ? 
                    <span className="text-green-600 dark:text-green-800 hover:text-green-400 dark:hover:text-green-300 leading-snug cursor-pointer" onClick={()=>console.log('clik des reg')} title="Deshabilitar registro"><CheckIcon styles={"w-6 h-6"}/></span> : 
                    <span className="text-purple-600 dark:text-purple-800 hover:text-purple-400 dark:hover:text-purple-500 leading-snug cursor-pointer" onClick={()=>console.log('clik act reg')} title="Habilitar registro"><BlockIcon styles={"w-5 h-5"}/></span>
                }                                
            </p>
            <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">{diaName(registro.modificacion).slice(0,3) + ' ' + registro.modificacion?.slice(8,10) + '-' + registro.modificacion?.slice(5,7) + '-' + registro.modificacion?.slice(0,4)}</p>
            <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">Id:{registro.Id}</p>
            </div>
        </article>
    )
}