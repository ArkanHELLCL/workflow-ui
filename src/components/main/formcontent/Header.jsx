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
export default function Header({grupos}) {
    return (            
        <>                    
            <ReqTitle handleNotDragOver={handleNotDragOver}/>                   
            <FrmHeader handleNotDragOver={handleNotDragOver}/>
            <Buttons grupos={grupos} className={'frmbuttonsact'}/>
            <SenderData />
            <UpdateDate />
        </>                
    )
}