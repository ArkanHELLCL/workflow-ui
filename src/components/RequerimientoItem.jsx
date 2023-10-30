/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMemo, useCallback } from "react";
import { useRequest } from "../hooks/useRequest.jsx";
import { ArchiveIcon, EditIcon, UserIcon } from "./icons"
import { Constants } from "../constants/const.jsx";

export const RequerimientoItem = ({ req, showDia }) => {    
    const { dias } = Constants()
    const { request, setRequest } = useRequest()

    const memoizedReq = useMemo(() => req, [req])
    
    const diaName = useMemo(() => {
      const newDate = new Date(req.DRE_FechaEdit)
      return dias[newDate.getDay()]
    }, [dias, req.DRE_FechaEdit])
  
    const isReqSelected = useMemo(() => request?.request?.DRE_Id === req.DRE_Id, [request, req.DRE_Id])
  
    const handleEditClick = useCallback((e) => {
      e.stopPropagation()
      // handle edit click
    }, [])
  
    const handleUserClick = useCallback((e) => {
      e.stopPropagation()
      // handle user click
    }, [])
  
    const handleArchiveClick = useCallback((e) => {
      e.stopPropagation()
      // handle archive click
    }, [])
  
    /*const handleRequerimiento = useCallback((req) => {
      setRequest(req)
    }, [req])*/

    const handleRequerimiento = useCallback(() => {
      //setRequest(memoizedReq)
      setRequest({
        "request": memoizedReq,
        "adjuntos": null,
      })
    }, [memoizedReq, setRequest])
  
    return (
      <article className={`${isReqSelected ? 'reqselected' : 'requnselected'} reqitem  ${req.IdEditor ? 'reqtomado' : 'reqnotomado'} relative`} key={req.DRE_Id} onClick={() => handleRequerimiento()}>
        <div className="w-3/4">
          <p className="dark:text-stone-200 text-stone-500 truncate text-lg font-normal">{req.DRE_UsuarioEditAnt ? req.DRE_UsuarioEditAnt!="0" ? req.DRE_UsuarioEditAnt : req.NombreEditor ? '(EA) - ' + req.NombreEditor + ' ' + req.ApellidoEditor : '(CR) - ' + req.NombreCreador + ' ' + req.ApellidoCreador : '(SF) - ' + req.NombreCreador + ' ' + req.ApellidoCreador}</p>
          <p className={`${req.IdEditor ? 'dark:text-stone-200 text-stone-500' : 'text-sky-600 font-bold'} truncate text-xs font-normal`}>{req.REQ_Descripcion}</p>
          <p className="dark:text-stone-400 text-stone-400 truncate text-xs font-medium">{req.VFO_Id ? req.DFO_Descripcion : 'Sin formulario creado'}</p>
        </div>
        <div className="w-1/4">
          <p className="dark:text-stone-100 text-stone-900 mt-2 flex align-middle justify-end">
            <span className="text-yellow-600 hover:text-yellow-400" onClick={handleEditClick}><EditIcon/></span>
            <span className="text-green-600 dark:hover:text-green-800 hover:text-green-400" onClick={handleUserClick}><UserIcon/></span>
            <span className="text-purple-600 dark:text-purple-800 hover:text-purple-400 dark:hover:text-purple-300" onClick={handleArchiveClick}><ArchiveIcon/></span>
            <span className={`${(req.FLD_DiasLimites - req.DRE_DifDias < 0) ? 'text-red-500 visible' : (req.FLD_DiasLimites - req.DRE_DifDias <= 5) && (req.FLD_DiasLimites - req.DRE_DifDias >= 0) ? 'text-orange-300 visible' : 'hidden'} text-2xl leading-4 pl-1 font-semibold`}>!</span>
          </p>
          <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">{showDia ? diaName + ' ' + req.DRE_FechaEdit.slice(8,10) + '-' + req.DRE_FechaEdit.slice(5,7) : req.DRE_FechaEdit.slice(11,16)}</p>
          <p className="dark:text-gray-100 text-gray-900 truncate text-xs text-end">N°{req.VRE_Id}</p>
        </div>
      </article>
    )
}