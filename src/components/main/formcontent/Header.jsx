/* eslint-disable react/prop-types */
import ReqTitle from './header/ReqTitle.jsx';
import FrmHeader from './header/FrmHeader.jsx';
import SenderData from './header/SenderData.jsx';
import Buttons from "./header/ButtonsAction.jsx";
import UpdateDate from './header/UpdateDate.jsx';

const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}
export default function Header({formulario}) {
    return (            
        <>                    
            <ReqTitle handleNotDragOver={handleNotDragOver}/>                   
            <FrmHeader handleNotDragOver={handleNotDragOver}/>
            <Buttons formulario={formulario} className={'frmbuttonsact'}/>
            <SenderData formulario={formulario} />
            <UpdateDate />
        </>                
    )
}