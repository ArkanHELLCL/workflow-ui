/* eslint-disable react/prop-types */
import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
import { Constants } from "../constants/const.jsx";
import { useRequest } from "../hooks/useRequest.jsx";

export function DetalleRequerimiento({defaultTheme}){   
    const { meses } = Constants()
    const { request } = useRequest()
    const [ isOpen, setisOpoen ] = useState(false)
    const handleOpenDetail = () => {         
        setisOpoen(!isOpen)        
    }

    return(        
        <Accordion open={isOpen} icon={<Icon open={isOpen} pos="absolute top-[8px] left-2" />} className="sticky top-0 z-10 dark:bg-[#323130] bg-stone-100 border-b dark:border-[#353535] border-stone-300 max-h-[40vh] overflow-auto">
            <AccordionHeader
            onClick={handleOpenDetail} 
            className={`${defaultTheme.txtc + ' ' + defaultTheme.bgct} ' text-[.7rem] font-bold px-7 truncate py-1 dark:bg-[#444444] hover:dark:bg-[#666666] hover:bg-[#e6f2fa] bg-[#f0f0f0] overflow-hidden`}>
                Detalle
            </AccordionHeader>
            <AccordionBody className="py-0">
                <article className="p-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {request === null ? 
                            <p className="mb-3 text-stone-500 dark:text-stone-400">Debes seleccionar un requerimiento para poder ver sus detalles</p> :
                            <>                
                                <div className="mb-3 text-stone-500 dark:text-stone-400">
                                    <ul className="space-y-2">
                                        <li>Flujo: <strong>{request?.FLU_Descripcion} V.{request?.VFL_Id}</strong></li>
                                        <li>Número: <strong>{request?.VRE_Id}</strong></li>
                                        <li>Creador: <strong>{request?.NombreCreador + ' ' + request?.ApellidoCreador}</strong></li>
                                        <li>Dep. creación: <strong>{request?.DepDescripcionOrigen}</strong></li>
                                        <li>Creación: <strong>{request?.REQ_FechaEdit.slice(8,10) + ' de ' + meses[parseInt(request?.REQ_FechaEdit.slice(5,7))] + ' de ' + request?.REQ_FechaEdit.slice(0,4)}</strong></li>
                                        <li>Modificacón: <strong>{request?.DRE_FechaEdit.slice(8,10) + ' de ' + meses[parseInt(request?.DRE_FechaEdit.slice(5,7))] + ' de ' + request?.DRE_FechaEdit.slice(0,4)}</strong></li>
                                    </ul>
                                </div>
                                <div className="mb-3 text-stone-500 dark:text-stone-400">
                                    <ul className="space-y-2">
                                        <li>Días limite: <strong>{request?.FLD_DiasLimites}</strong></li>
                                        <li>Dias sin responder: <strong>{request?.DRE_DifDias}</strong></li>
                                        <li>Número del formulario: <strong>{request?.VFO_Id}</strong></li>
                                        <li>Paso actual: <strong>{request?.FLD_CodigoPaso}</strong></li>
                                        <li>Editor actual: <strong>{request?.NombreEditor ? request?.NombreEditor + ' ' + request?.ApellidoEditor : 'Esperando a ser tomado'}</strong></li>                            
                                        <li>Dep. actual: <strong>{request?.DepDescripcionActual}</strong></li>
                                        <li>Estado actual: <strong>{request?.ESR_DescripcionFlujoDatos}</strong></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </article> 
            </AccordionBody>
        </Accordion>         
    )
}