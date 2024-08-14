/* eslint-disable react/prop-types */
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { Icon } from "../../utils/icons.jsx";
import { Constants } from "../../utils/const.jsx";
import { useRequest } from "../../hooks/useRequest.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";

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
        <div className='sticky top-0 z-50'>
        {filters.filterSearchResult && 
            <h2 className='pl-7 text-lg py-2 border-t dark:!text-stone-100 !text-stone-500 dark:!border-[#353535] !border-[#d4d4d4] dark:!bg-[#262626] !bg-[#ffffff]'>Resultados</h2>
        }
            <Accordion className="z-0 dark:!bg-[#262626] !bg-[#ffffff]" slotProps={{ transition: { timeout: 350 } }}>
                <AccordionSummary                 
                    className='dark:!text-stone-100 !text-stone-500 dark:!border-[#353535] !border-[#d4d4d4] !text-[.7rem] !font-bold truncate dark:!bg-[#444444] !bg-[#f0f0f0] !py-1 hover:!dark:bg-[#666666] hover:!bg-[#e6f2fa] overflow-hidden !px-2 !h-7 !min-h-7 !m-0 !border-b dark:hover:!bg-[#505050]'
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
                                            <li>Flujo: <span className='font-medium dark:text-stone-300'>{request?.request?.FLU_Descripcion} V.{request?.request?.VFL_Id}</span></li>
                                            <li>Número: <span className='font-medium dark:text-stone-300'>{request?.request?.VRE_Id}</span></li>
                                            <li>Creador: <span className='font-medium dark:text-stone-300'>{request?.request?.NombreCreador + ' ' + request?.request?.ApellidoCreador}</span></li>
                                            <li>Dep. creación: <span className='font-medium dark:text-stone-300'>{request?.request?.DepDescripcionOrigen}</span></li>
                                            <li>Creación: <span className='font-medium dark:text-stone-300'>{request?.request?.REQ_FechaEdit?.slice(8,10) + ' de ' + meses[parseInt(request?.request?.REQ_FechaEdit?.slice(5,7))] + ' de ' + request?.request?.REQ_FechaEdit?.slice(0,4)}</span></li>
                                            <li>Modificacón: <span className='font-medium dark:text-stone-300'>{request?.request?.DRE_FechaEdit?.slice(8,10) + ' de ' + meses[parseInt(request?.request?.DRE_FechaEdit?.slice(5,7))] + ' de ' + request?.request?.DRE_FechaEdit?.slice(0,4)}</span></li>{
                                            request?.request?.ESRAnterior_Descripcion ?                                            
                                                <li>Acción realizada: <span className='font-medium dark:text-stone-300'>{request?.request?.ESRAnterior_Descripcion}</span></li>
                                            : null}
                                        </ul>
                                    </div>
                                    <div className="mb-3 text-stone-500 dark:text-stone-400">
                                        <ul className="space-y-2">{
                                            request?.request?.FLD_DiasLimites ?
                                                <li>Días limite: <span className='font-medium dark:text-stone-300'>{request?.request?.FLD_DiasLimites}</span></li>
                                            : null}{
                                            request?.request?.DRE_DifDias ?                                             
                                                <li>Dias sin responder: <span className='font-medium dark:text-stone-300'>{request?.request?.DRE_DifDias}</span></li>
                                            : null}{
                                            request?.request?.VFO_Id ?                                            
                                                <li>Número del formulario: <span className='font-medium dark:text-stone-300'>{request?.request?.VFO_Id}</span></li>
                                            : null}
                                            <li>Paso actual: <span className='font-medium dark:text-stone-300'>{request?.request?.FLD_CodigoPaso}</span></li>
                                            <li>Editor actual: <span className='font-medium dark:text-stone-300'>{request?.request?.NombreEditor ? request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor : 'Esperando a ser tomado'}</span></li>                            
                                            <li>Dep. actual: <span className='font-medium dark:text-stone-300'>{request?.request?.DepDescripcionActual}</span></li>{
                                            request?.request?.ESR_AccionFlujoDatos ?                                            
                                                <li>Acción a realizar: <span className='font-medium dark:text-stone-300'>{request?.request?.ESR_AccionFlujoDatos}</span></li>
                                            : null}
                                            <li>Estado del Req.: <span className='font-medium dark:text-stone-300'>{request?.request?.ESR_DescripcionRequerimiento ? request?.request?.ESR_DescripcionRequerimiento : 'Pendiente'}</span></li>                                            
                                        </ul>
                                    </div>
                                </>
                            }
                        </div>
                    </article> 
                </AccordionDetails>
            </Accordion>         
        </div>
    )
}