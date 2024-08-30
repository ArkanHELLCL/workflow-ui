/* eslint-disable react/prop-types */
import { usePreview } from '../../../hooks/usePreview.jsx';
import { useRequest } from '../../../hooks/useRequest.jsx';
import DataRequest from './Datarequest.jsx';
import SenderData from './SenderData.jsx';
import Buttons from "./ButtonsAction.jsx";
import UpdateDate from './UpdateDate.jsx';

import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}
export default function Header({formulario}) {
    const { preview, setPreview } = usePreview();
    const { request } = useRequest()
    const handleOnClick = () => {
        setPreview({
            state:false,
            obj:null,
            selected:preview.selected
        })        
    }
    
    return (
            !preview.state && !preview.obj ? (
                <>
                    <div className='frmtitle w-full' onDragOver={handleNotDragOver}>
                        <h1 className='text-base truncate w-auto pr-2'>{request?.request?.REQ_Descripcion.toUpperCase()}</h1>
                    </div>
                    <div className='frmheader' onDragOver={handleNotDragOver}>
                        <h2 className='text-sm font-light leading-tight'>Flujo: <strong>{request?.request?.FLU_Descripcion}</strong> / Paso : <strong>{request?.request?.FLD_CodigoPaso}</strong></h2>
                        <h2 className='text-sm font-light leading-tight'>Para: <strong>{request?.request?.NombreEditor ? request?.request?.NombreEditor + ' ' + request?.request?.ApellidoEditor : request?.request?.DepDescripcionActual}</strong></h2>
                    </div>
                    <Buttons formulario={formulario}/>
                    <SenderData formulario={formulario} />
                    <UpdateDate />
                </>
            ) :            
            preview.state && (
            <Dropdown>
                <MenuButton startDecorator={<TrendingFlatIcon className="rotate-180" />} className="hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1 prevtitle w-fit" onClick={handleOnClick}>
                Volver al formulario
                </MenuButton>
            </Dropdown>
            
        )
    
    )
}