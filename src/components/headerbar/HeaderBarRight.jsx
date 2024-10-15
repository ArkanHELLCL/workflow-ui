/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import UserBar from './userBar.jsx';

export default function HeaderBarRight({darkmode, setDarkMode}) {    
    return(
        <div className="flex items-center h-full pr-2 text-white relative z-50 place-content-end">
            <UserBar darkmode={darkmode} setDarkMode={setDarkMode}/>
        </div>
    )
}