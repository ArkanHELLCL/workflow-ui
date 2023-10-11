/* eslint-disable react/prop-types */
import { DarkModeToggle } from "./darkMode.jsx";

export default function Header(){      
    return (
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-center justify-start p-4 transition-color delay-75 gap-10 h-[80px] drop-shadow-lg dark:shadow-[#1a1a1a] shadow-[#dbd9d7] ml-14 relative z-40'>
            <DarkModeToggle />            
        </header>
    )
}