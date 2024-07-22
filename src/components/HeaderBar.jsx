/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import SearchBar from './headerbar/searchBar.jsx';
import UserBar from './headerbar/userBar.jsx';

export default function HeaderBar() {
    const [openSearch, setOpenSearch] = useState(false);
    const [open, setOpen] = useState(false)      

    const HandleOpenUser = () => {
        setOpen(false);        
    }

    const HandleReload = () =>{
        /*setFilters(prevState => ({
            ...prevState,                     
            reload: !filters.reload
        }))
        //console.log("si")*/ 
    }

    return(
        <div className="flex items-center h-full px-4 text-white relative z-50">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" onClick={HandleReload} title="Recargar">
                <CachedIcon />
            </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" title="Ayuda">
                <HelpOutlineIcon />
            </span>
            <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch}/>
            <ClickAwayListener onClickAway={HandleOpenUser}>
                <div className='absolute h-full right-0'>
                    <UserBar open={open} setOpen={setOpen}/>
                </div>
            </ClickAwayListener>
        </div>
    )
}