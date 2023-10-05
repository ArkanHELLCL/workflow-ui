import { HelpIcon, PowerIcon, ReloadIcon, SearcIcon } from "./icons";
import { user } from '../mocks/usuario.json'

function SearchBar() {
    return(
        <div className="h-[24px] flex absolute left-[305px]">
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

function UserBar() {
    return(
        <div className="h-full absolute right-5 flex flex-row align-middle">            
            <div className="flex items-center dark:hover:bg-[#363636] p-3 hover:bg-[#005a9e]">
                <span><img src={user.USR_Photo} className=" rounded-full w-[25px] h-[25px]"/></span>            
            </div>
        </div>
    )
}

export default function HeaderBar() {
    return(
        <div className="flex items-center h-full px-4 text-white relative">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e]">
                <ReloadIcon />
                </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e]">
                <HelpIcon />
            </span>
            <span className="dark:text-red-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e]">
                <PowerIcon />
            </span>
            <SearchBar />
            <UserBar />
        </div>
    )
}