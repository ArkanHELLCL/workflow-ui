/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { DarkModeToggle } from "./darkMode.jsx";
import Loading from "./Loading.jsx";

export default function Header(){      
    return (
        <header className='dark:bg-[#323130] bg-[#f3f2f1] flex items-center justify-start p-4 transition-color delay-75 gap-10 h-[80px] drop-shadow-md drop dark:shadow-[#191919] shadow-[#d2d0ce] ml-14 relative z-40 dark:border-[#191919] border-[#d2d0ce] border-[3px] border-t-0 border-l-0 border-r-0'>
            <Suspense fallback={<Loading />}>
                <DarkModeToggle />            
            </Suspense>
        </header>
    )
}