/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import { useMemo, useCallback } from "react";
import { useRequest } from "../../../hooks/useRequest.jsx";
import { ArchiveIcon, EditIcon, UserIcon } from "../../../utils/icons.jsx"
import { Constants } from "../../../utils/const.jsx";
import { useFilters } from "../../../hooks/useFilters.jsx";

export const RequerimientoItem = ({ req, showDia }) => {    
    const { dias } = Constants()
    const { request, setRequest } = useRequest()
    const { filters } = useFilters()
    const regId = filters.itemIdSelected + '-' + req.VRE_Id        

    const diaName = (fecha) => {
      const newDate = new Date(fecha)
      return dias[newDate.getDay()]
    }    
  
    const handleEditClick = (e) => {
      e.stopPropagation()
      // handle edit click
    }
  
    const handleUserClick = (e) => {
      e.stopPropagation()
      // handle user click
    }
  
    const handleArchiveClick = (e) => {
      e.stopPropagation()
      // handle archive click
    }
  
    /*const handleRequerimiento = useCallback((req) => {
      setRequest(req)
    }, [req])*/

    /*const handleRequerimiento = useCallback(() => {
      //setRequest(memoizedReq)
      setRequest({
        "request": req,
        "adjuntos": null,
      })
    }, [req])*/

    const handleRequerimiento = (id) => {
      const elToRemove = document.getElementById(filters.itemIdSelected + '-' + request?.request?.VRE_Id)      
      elToRemove?.classList.remove('reqselected')
      const elToAdd = document.getElementById(id)
      elToAdd.classList.add('reqselected')
      setRequest({
        "request": req,
        "adjuntos": null,
      })
    }
  
    return (
      <article className={` reqitem  ${req.IdEditor ? 'reqtomado' : 'reqnotomado'} relative dark:border-[#353535] border-[#d4d4d4] border-b`} key={req.DRE_Id} onClick={() => handleRequerimiento(regId)} id={regId}>
        <div className="w-3/4">
          <p className={`${request?.request.DRE_Id === req.DRE_Id ? 'dark:text-stone-100 text-stone-700' : 'dark:text-stone-200 text-stone-500'} truncate text-base font-thin capitalize leading-snug`}>{req.DRE_UsuarioEditAnt ? req.DRE_UsuarioEditAnt!="0" ? req.DRE_UsuarioEditAnt : req.NombreEditor ? '(EA) - ' + req.NombreEditor + ' ' + req.ApellidoEditor : '(CR) - ' + req.NombreCreador + ' ' + req.ApellidoCreador : '(SF) - ' + req.NombreCreador + ' ' + req.ApellidoCreador}</p>
          <p className={`${req.IdEditor ? 'dark:text-stone-400 text-stone-500' : 'text-sky-600 font-bold'} truncate text-base font-thin uppercase leading-snug`}>{req.REQ_Descripcion}</p>
          <p className={`${request?.request.DRE_Id === req.DRE_Id ? 'dark:text-stone-400 text-stone-700' : 'dark:text-stone-500 text-stone-600'} truncate text-[11px] font-base uppercase leading-snug`}>{req.VFO_Id ? req.DFO_Descripcion : 'Sin formulario creado'}</p>
        </div>
        <div className="w-1/4">
          <p className="dark:text-stone-100 text-stone-900 mt-0 flex align-middle justify-end">
            <span className="text-yellow-600 hover:text-yellow-400 leading-snug cursor-pointer" onClick={handleEditClick} title="Cambiar título del Requerimiento"><EditIcon/></span>
            <span className="text-green-600 dark:hover:text-green-800 hover:text-green-400 leading-snug cursor-pointer" onClick={handleUserClick} title="Cambiar Editor actual"><UserIcon/></span>
            <span className="text-purple-600 dark:text-purple-800 hover:text-purple-400 dark:hover:text-purple-300 leading-snug cursor-pointer" onClick={handleArchiveClick} title="Archivar Requerimiento"><ArchiveIcon/></span>
            <span className={`${(req.FLD_DiasLimites - req.DRE_DifDias < 0) ? 'text-red-500 visible' : (req.FLD_DiasLimites - req.DRE_DifDias <= 5) && (req.FLD_DiasLimites - req.DRE_DifDias >= 0) ? 'text-orange-300 visible' : 'hidden'} text-2xl leading-4 pl-1 font-semibold `}>!</span>
          </p>
          <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">{showDia ? diaName(req.DRE_FechaEdit) + ' ' + req.DRE_FechaEdit.slice(8,10) + '-' + req.DRE_FechaEdit.slice(5,7) : req.DRE_FechaEdit.slice(11,16)}</p>
          <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">N°{req.VRE_Id}</p>
        </div>
      </article>
    )
}