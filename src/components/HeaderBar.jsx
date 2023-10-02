import { ReloadIcon, SearcIcon } from "./icons";

function SearchBar() {
    return(
        <div className="h-[24px] flex ml-[270px]">
            <form className="flex relative">
                <span className="absolute top-1 left-4 dark:text-white text-sky-600">
                    <SearcIcon />
                </span>
                <input type="text" className="w-[400px] h-full pl-12 dark:bg-[#262626] dark:focus:bg-[#505050] focus:outline-none focus:ring-1 dark:focus:ring-white focus:ring-[#004578] focus:bg-white bg-[#deecf9] text-black dark:text-[#afafaf]" placeholder="Buscar" 
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Buscar"} />                
            </form>
        </div>
    )
}

export function HeaderBar() {
    return(
        <div className="flex items-center h-full px-4 text-white">
            <ReloadIcon />
            <SearchBar />
        </div>
    )
}