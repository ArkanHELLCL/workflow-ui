/* eslint-disable react/prop-types */
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { Icon } from "./icons.jsx";
import { Constants } from "../constants/const.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { useFilters } from "../hooks/useFilters.jsx";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    //borderBottom: `1px solid ${theme.palette.divider}`,
    /*borderBottom: `1px solid inherit`,
    '&:not(:last-child)': {
      borderTop: 0,
    },
    '&::before': {
      display: 'none',
    },*/
}));
  
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<Icon />}
      {...props}
    />
  ))(({ theme }) => ({
    borderBottom: `1px solid transparent`,
    '&:not(:last-child)': {
      borderTop: 0,
    },
    '&::before': {
      display: 'none',
    },
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(90deg)',
      color:'inherit'
    },
    '& .MuiAccordionSummary-content': {
        margin:'0px',
        marginLeft: theme.spacing(1),      
    },    
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    backgroundColor:'transparent',
    '& .Mui-expanded' : {
        backgroundColor:'transparent'
    }
}));

export default function DetalleRequerimiento(){   
    const { meses } = Constants()
    const { request } = useRequest()
    const { filters } = useFilters()
    return(
        <>
        {filters.filterSearchResult && 
            <h2 className='pl-7 text-lg py-2 border-t dark:!text-stone-100 !text-stone-500 dark:!border-[#353535] !border-[#d4d4d4]'>Resultados</h2>}
        {filters.totalRequerimientos > 0 &&
        <Accordion className="z-0 !bg-transparent" slotProps={{ transition: { timeout: 350 } }}>
            <AccordionSummary                 
                className='dark:!text-stone-100 !text-stone-500 dark:!border-[#353535] !border-[#d4d4d4] !text-[.7rem] !font-bold truncate dark:!bg-[#444444] !bg-[#f0f0f0] !py-1 hover:!dark:bg-[#666666] hover:!bg-[#e6f2fa] overflow-hidden !px-2 !h-7 !min-h-7 !m-0 !border-b'
                >Detalle
            </AccordionSummary>
            <AccordionDetails className="py-0">
                <article className="p-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {request === null ? 
                            <p className="mb-3 text-stone-500 dark:text-stone-400">Debes seleccionar un requerimiento para poder ver sus detalles</p> :
                            <>                
                                <div className="mb-3 text-stone-500 dark:text-stone-400">
                                    <ul className="space-y-2">
                                        <li>Flujo: <strong>{request?.request?.FLU_Descripcion} V.{request?.request?.VFL_Id}</strong></li>
                                        <li>Número: <strong>{request?.request?.VRE_Id}</strong></li>
                                        <li>Creador: <strong>{request?.request?.NombreCreador + ' ' + request?.request?.ApellidoCreador}</strong></li>
                                        <li>Dep. creación: <strong>{request?.request?.DepDescripcionOrigen}</strong></li>
                                        <li>Creación: <strong>{request?.request?.REQ_FechaEdit.slice(8,10) + ' de ' + meses[parseInt(request?.request?.REQ_FechaEdit.slice(5,7))] + ' de ' + request?.request?.REQ_FechaEdit.slice(0,4)}</strong></li>
                                        <li>Modificacón: <strong>{request?.request?.DRE_FechaEdit.slice(8,10) + ' de ' + meses[parseInt(request?.request?.DRE_FechaEdit.slice(5,7))] + ' de ' + request?.request?.DRE_FechaEdit.slice(0,4)}</strong></li>
                                        <li>Acción realizada: <strong>{request?.request?.ESRAnterior_Descripcion}</strong></li>
                                    </ul>
                                </div>
                                <div className="mb-3 text-stone-500 dark:text-stone-400">
                                    <ul className="space-y-2">
                                        <li>Días limite: <strong>{request?.request?.FLD_DiasLimites}</strong></li>
                                        <li>Dias sin responder: <strong>{request?.request?.DRE_DifDias}</strong></li>
                                        <li>Número del formulario: <strong>{request?.request?.VFO_Id}</strong></li>
                                        <li>Paso actual: <strong>{request?.request?.FLD_CodigoPaso}</strong></li>
                                        <li>Editor actual: <strong>{request?.request?.NombreEditor ? request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor : 'Esperando a ser tomado'}</strong></li>                            
                                        <li>Dep. actual: <strong>{request?.request?.DepDescripcionActual}</strong></li>
                                        <li>Acción a realizar: <strong>{request?.request?.ESR_AccionFlujoDatos}</strong></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </article> 
            </AccordionDetails>
        </Accordion>         }
        </>
    )
}