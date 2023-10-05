/* eslint-disable react/prop-types */
import { HelpIcon, InBoxIcon, ReloadIcon, SearcIcon } from "./icons";
import { user } from '../mocks/usuario.json'
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from "../hooks/ClickAway.jsx";
import { useState } from "react";
import { useId } from "react";

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

function UserBar({menuAppear, reference, chkUser, setUser, openUser}) {
    return(       
        <div className={`${openUser ? 'dark:bg-[#737373] dark:hover:bg-[#737373] bg-[#004578] hover:bg-[#004578]' : 'dark:hover:bg-[#363636] hover:bg-[#005a9e]'} p-3 h-full absolute right-5 flex items-center `}>
            <label htmlFor={chkUser}>
                <span><img src={user.USR_Photo} className={`rounded-full w-[25px] h-[25px] hover:cursor-pointer`}/></span>
            </label>                              
            <input type="checkbox" id={chkUser} className="hidden" onClick={() => setUser(!openUser)} />
            <animated.div style={menuAppear} className={`flex absolute z-[60] overflow-hidden right-0 top-[30px]`} ref={reference}>                
                <div className="h-full w-full dark:bg-[#262626] bg-[#ffffff] dark:border-[#737373] border-[#949494] border">
                    <div className="w-full flex justify-end">
                        <span className="flex border-[2px] dark:border-white border-black p-4 w-fit dark:text-white text-black text-xs">Cerrar sesión</span>
                    </div>
                    <div className="flex justify-center items-center gap-5 h-fit p-4">
                        <div className={`rounded-full w-[100px] h-[100px]`}>
                            <img src={user.USR_Photo} className={`rounded-full h-full w-full`} />
                        </div>
                        <div className="flex flex-col h-fit">
                            <span className="text-xl font-semibold truncate dark:text-white text-[#262626]">{user.USR_Nombre}</span>
                            <span className="text-xs truncate pb-2 dark:text-white text-[#262626]">{user.USR_Mail}</span>
                            <span className="text-xs truncate text-sky-600">{user.PER_Nombre}</span>
                            <span className="text-xs truncate text-sky-600">{user.DEP_Descripcion}</span>
                        </div>
                    </div>
                    <div className="w-full p-4 dark:bg-[#363636] dark:border-[#737373] bg-[#f3f3f3] border-t">
                        <div className="flex items-center gap-3">
                            <span className="relative text-[#313131] dark:text-white">
                                <InBoxIcon styles="w-10 h-10" strokeWidth=".75"/>                                
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 absolute top-[-10px] right-[-20px]">5</span>                                
                            </span>                            
                            <span className="text-[#313131] dark:text-white">Ver mis mensajes privados</span>
                        </div>                        
                    </div>
                </div>
            </animated.div>
        </div>       
    )
}

export default function HeaderBar() {
    const [openUser, setUser] = useState(false);
    let width = 260;
    const menuAppear = useSpring({        
        opacity:1,
        height: `${openUser ? width : 0}` + 'px'        
    });        
    const chkUser = useId();
    const { ref } = ClickAway(setUser);

    return(
        <div className="flex items-center h-full px-4 text-white relative">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer">
                <ReloadIcon />
                </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer">
                <HelpIcon />
            </span>
            <SearchBar />
            <UserBar menuAppear={menuAppear} reference={ref} chkUser={chkUser} setUser={setUser} openUser={openUser}/>
        </div>
    )
}