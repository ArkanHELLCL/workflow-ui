/* eslint-disable react/prop-types */
import { usePreview } from '../../../hooks/usePreview.jsx';
import ReqTitle from './header/ReqTitle.jsx';
import FrmHeader from './header/FrmHeader.jsx';
import SenderData from './header/SenderData.jsx';
import Buttons from "./header/ButtonsAction.jsx";
import UpdateDate from './header/UpdateDate.jsx';

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
                    <ReqTitle handleNotDragOver={handleNotDragOver}/>                   
                    <FrmHeader handleNotDragOver={handleNotDragOver}/>
                    <Buttons formulario={formulario} className={'frmbuttonsact'}/>
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