/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CachedIcon from '@mui/icons-material/Cached';

export default function HeaderBarLeft() {
    const HandleReload = () => {
        window.location.reload()
    }

    return(
        <div className="flex items-start h-full px-4 text-white relative z-50">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" onClick={HandleReload} title="Recargar">
                <CachedIcon />
            </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" title="Ayuda">
                <HelpOutlineIcon />
            </span>            
        </div>
    )
}