/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import { useMemo, useCallback } from "react";
import { useRequest } from "../../../hooks/useRequest.jsx";
import { useAttach } from "../../../hooks/useAttach.jsx";
import { usePreview } from "../../../hooks/usePreview.jsx";
import { ArchiveIcon, UnArchiveIcon, EditIcon, UserIcon, CloseRequest, DelIcon } from "../../../utils/icons.jsx"
import { Constants } from "../../../utils/const.jsx";
import { useFilters } from "../../../hooks/useFilters.jsx";
import { useUserData } from "../../../hooks/useUserData.jsx";

export const RequerimientoItem = ({ req, showDia, showYear, frmRequest, frmMessages }) => {    
    const { userdata : user } = useUserData();
    const { dias } = Constants()
    const { request, setRequest } = useRequest()
    const { setAdjuntos } = useAttach()
    const { setPreview } = usePreview()
    const { filters } = useFilters()
    const regId = req.Bandeja + '-' + req.VRE_Id        

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
+      setRequest({
        request: req
      })
      setAdjuntos(null)
      setPreview({
        status: false,
        selected: null,
        obj: null
      })
      frmRequest.reset()
      frmRequest.clearErrors()

      frmMessages.reset()
      frmMessages.clearErrors()
    }
    
    return (
      <article className={`reqitem ${req.IdEditor || req.Nuevo === 0 ? 'reqtomado' : req.Bandeja === 'be' || req.Nuevo === 1 ? 'reqnotomado' : ''} relative dark:border-[#353535] border-[#d4d4d4] border-b`} key={req.DRE_Id} onClick={() => handleRequerimiento(regId)} id={regId}>
        <div className="w-3/4">
          <p className={`${request?.request.DRE_Id === req.DRE_Id ? 'dark:text-stone-100 text-stone-700' : 'dark:text-stone-200 text-stone-950'} truncate text-base font-thin capitalize leading-snug`}>{req.Bandeja === 'be' ? req.DRE_UsuarioEditAnt ? req.DRE_UsuarioEditAnt : req.NombreCreador + ' ' + req.ApellidoCreador : req.NombreEditor ? req.NombreEditor + ' ' + req.ApellidoEditor : req.DepDescripcionActual}</p>
          <p className={`${req.IdEditor ? 'dark:text-stone-400 text-stone-500' : req.Bandeja === 'be' ? 'text-sky-600 font-bold' : 'dark:text-stone-400 text-stone-500'} truncate text-base font-thin uppercase leading-snug`}>{req.REQ_Descripcion}</p>
          <p className={`${request?.request.DRE_Id === req.DRE_Id ? 'dark:text-stone-400 text-stone-400' : 'dark:text-stone-500 text-stone-400'} truncate text-[11px] font-base uppercase leading-snug`}>{req.VFO_Id ? req.DFO_Descripcion : 'Sin formulario creado'}</p>
        </div>
        <div className="w-1/4">
          <p className="dark:text-stone-100 text-stone-900 mt-0 flex align-middle justify-end">{
            parseInt(req.IdEditor) ===  parseInt(user?.USR_Id) && !req.VFO_Id ?
              <span className="text-yellow-600 hover:text-yellow-400 leading-snug cursor-pointer" onClick={handleEditClick} title="Cambiar título del Requerimiento"><EditIcon/></span>
            : null}{
              (parseInt(user?.PER_Id) === 1 || parseInt(user?.PER_Id) === 2) && (req?.Bandeja !== 'bf' && req?.Bandeja?.slice(0,2) !== 'bn' && req?.Bandeja?.slice(0,2) !== 'ba' && req?.Bandeja?.slice(0,1) !== 'j') ?
                <span className="text-green-600 dark:hover:text-green-800 hover:text-green-400 leading-snug cursor-pointer" onClick={handleUserClick} title="Cambiar Editor actual"><UserIcon/></span>
            : null}{
              req?.Bandeja === 'be' ?            
                <span className="text-purple-600 dark:text-purple-800 hover:text-purple-400 dark:hover:text-purple-300 leading-snug cursor-pointer" onClick={handleArchiveClick} title="Archivar Requerimiento"><ArchiveIcon/></span>
            : req?.Bandeja === 'ba' ?
                <span className="text-purple-600 dark:text-purple-800 hover:text-purple-400 dark:hover:text-purple-300 leading-snug cursor-pointer" onClick={handleArchiveClick} title="Desarchivar Requerimiento"><UnArchiveIcon/></span>
            : null}{
              req?.Bandeja !== 'bf' && req?.Bandeja?.slice(0,2) !== 'bn' && req?.Bandeja?.slice(0,2) !== 'ba' ?            
                <span className={`${(req?.FLD_DiasLimites - req?.DRE_DifDias < 0) ? 'text-red-500 visible' : (req?.FLD_DiasLimites - req?.DRE_DifDias <= 5) && (req?.FLD_DiasLimites - req?.DRE_DifDias >= 0) ? 'text-orange-300 visible' : 'hidden'} text-2xl leading-4 pl-1 font-semibold `} title={`${(req?.FLD_DiasLimites - req?.DRE_DifDias < 0) ? 'Requerimiento atrasado' : (req?.FLD_DiasLimites - req?.DRE_DifDias <= 5) && (req?.FLD_DiasLimites - req?.DRE_DifDias >= 0) ? 'Requerimiento a punto de vencer' : '' } `}>!</span>
            : null}{
              req.Bandeja === 'bf' &&
                <span className="text-green-600 dark:text-green-800 hover:text-green-400 dark:hover:text-green-300 leading-snug cursor-pointer" onClick={handleArchiveClick} title="Abrir Requerimiento" ><CloseRequest/></span>
            }{
              req?.Bandeja?.slice(0,1) === 'j' && 
                <span className="text-red-600 dark:text-red-800 hover:text-red-400 dark:hover:text-red-500 leading-snug cursor-pointer" onClick={()=>console.log('clik del men')} title="Eliminar mensaje"><DelIcon/></span>
            }
          </p>
          <p className="dark:text-stone-400 text-stone-400 truncate text-xs text-end">{showDia ? diaName(req?.DRE_FechaEdit) + ' ' + req?.DRE_FechaEdit.slice(8,10) + '-' + req?.DRE_FechaEdit?.slice(5,7) : showYear ? diaName(req?.DRE_FechaEdit).slice(0,3) + ' ' + req?.DRE_FechaEdit?.slice(8,10) + '-' + req?.DRE_FechaEdit?.slice(5,7) + '-' + req?.DRE_FechaEdit?.slice(0,4) : req?.DRE_FechaEdit?.slice(11,16)}</p>
          <p className="dark:text-stone-400 text-stone-400 truncate text-xs text-end">N°{req?.VRE_Id}</p>
        </div>
      </article>
    )
}