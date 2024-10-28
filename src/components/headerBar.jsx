/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { HeaderBarLeft, SearchBar, HeaderBarRight } from "./headerbarComp";

export default function HeaderBar({openSearch, setOpenSearch, handleNotDragOver, darkmode, setDarkMode}) {
    return (
        <>
            <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="headerbarleft">
                <HeaderBarLeft />          
            </section>
            <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="searchbar">
                <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} />
            </section>
            <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="headerbarright">
                <HeaderBarRight darkmode={darkmode} setDarkMode={setDarkMode}/>
            </section>
        </>
    )
}