/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import UserBar from './userBar.jsx';

export default function HeaderBarRight() {    
    const [open, setOpen] = useState(false)      

    const HandleOpenUser = () => {
        setOpen(false);        
    }    

    return(
        <div className="flex items-end h-full px-4 text-white relative z-50">
            <ClickAwayListener onClickAway={HandleOpenUser}>
                <div className='absolute h-full right-0'>
                    <UserBar open={open} setOpen={setOpen}/>
                </div>
            </ClickAwayListener>
        </div>
    )
}