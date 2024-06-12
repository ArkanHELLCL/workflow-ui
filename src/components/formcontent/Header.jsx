/* eslint-disable react/prop-types */
import DataRequest from './Datarequest.jsx';
import SenderData from './SenderData.jsx';
import Buttons from "./ButtonsAction.jsx";

import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}

export default function Header({preview, setPreview, request, formulario, setOpenDialog}) {
    return (
        <div id="headerForm" className='w-full h-auto relative z-20 overflow-hidden' onDragOver={handleNotDragOver}>{
            !preview && (
                <>
                    <div className='flex justify-between relative w-full'>                        
                        <DataRequest request={request} />                                                
                        <Buttons request={request} formulario={formulario} setOpenDialog={setOpenDialog}/>                        
                    </div>
                    <div className='flex justify-between'>
                        <SenderData request={request} formulario={formulario} />
                    </div>
                </>
            )
        }{
            preview && 
                <Dropdown>
                    <MenuButton startDecorator={<TrendingFlatIcon className="rotate-180" />} className="hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1" onClick={() => setPreview(false)}>
                    Volver al formulario
                    </MenuButton>
                </Dropdown>
        }
        </div>
    )
}