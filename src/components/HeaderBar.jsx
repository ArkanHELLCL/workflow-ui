/* eslint-disable react/prop-types */
import { CheckIcon, HelpIcon, Icon, MailIcon, ReloadIcon, SearchIcon } from "./icons";
import { user } from '../mocks/usuario.json'
import { useSpring, animated } from "@react-spring/web";
import { ClickAway } from "../hooks/ClickAway.jsx";
import { useEffect, useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { InputDebounce } from "./InputDebounce";

function SearchBar({openSearch, setOpenSearch, filterSearch, setFilters}) {    
    const menuSearch = useId();
    const [openMenuSearch, setopenMenuSearch] = useState(false);
    const [value, setValue] = useState();

    const HandleOnBlur = (e) => {
        e.target.placeholder = "Buscar"
        e.target.value=""
        setopenMenuSearch(false)        
    }
    const inputId = useId();
    let widthMenuSearch=0;
    let nameItemSelected = null;

    const { ref:refSearch } = ClickAway(setOpenSearch);
    
    if(filterSearch === 1){
        widthMenuSearch = 68;
        nameItemSelected = "Buzón actual"
    }
    if(filterSearch === 2){
        widthMenuSearch = 96;
        nameItemSelected = "Todos los buzones"
    }

    const HandleFilterSearch = (id) => {
        setFilters(prevState => ({
            ...prevState,                     
            filterSearch: id,
            loading: true
        }))
        setopenMenuSearch(false)
    }
    const referenceWidth = (widthMenuSearch + 12 + 20) - 1; //+ pl + pr
    const searchAnimation = useSpring({
        transform: `translateX(-${referenceWidth}px)`,
        from: { transform: "translateX(0px)" },
        config: { duration: 100 },
        reverse: !openSearch,
        reset: !openSearch,
    });
    const width = 70;

    const menuAppear = useSpring({        
        opacity:1,
        height: `${openMenuSearch ? width : 0}` + 'px',        
    });

    useEffect(() => {        
        if(!openSearch) {
            setopenMenuSearch(false)
        }
    }, [openSearch])

    const HandleSubmit = (e) => {
        e.preventDefault();
    }

    function QuitarFoco(e){
        const elemento = document.getElementById(inputId);        
        if (e.key === "Escape" && elemento.value !== "") {            
            elemento.blur();
            setValue("")
            setFilters(prevState => ({
                ...prevState,                     
                stringSearch: "",
                loading: true
            }))            
        }        
    }
    
    useEffect(() => {
        document.addEventListener("keyup", QuitarFoco, true);
        return () => {
            document.removeEventListener("keyup", QuitarFoco, true);            
        };
    },[value]);
    
    return(
        <div className="h-[24px] flex absolute left-[305px] z-50" id={menuSearch} ref={refSearch}>{
            openSearch &&            
                <animated.div
                    className={`bg-[#363636] h-full absolute w-[${widthMenuSearch}px]`}
                    style={searchAnimation} 
                    >
                        <span className={`pl-3 pr-5 relative text-xs w-[${widthMenuSearch}px]`}>
                            {nameItemSelected}
                            <span  onClick={() => setopenMenuSearch(!openMenuSearch)}>
                            <Icon open={true} pos="absolute top-[3px] right-1"/>
                            </span>
                        </span>
                </animated.div>
            }
            <animated.div style={menuAppear} className={`absolute dark:bg-[#323130] bg-[#ffffff] top-[25px] py-0 w-50 h-fit overflow-hidden z-50 ${filterSearch === 1 ? '-left-[100px]' : '-left-[128px]'}`}>
                <div className="h-full border dark:border-[#8a8886] border-[#e1dfdd]">
                    <ul className="py-2" >
                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key="is-1" onClick={() => HandleFilterSearch(2)}><span className={`absolute left-5 top-0 text-green-500`}>{filterSearch === 2 ? <CheckIcon /> : null}</span>Todos los buzones</li>
                        <li className={`hover:bg-[#c5c5c5] dark:hover:bg-[#505050] px-12 hover:cursor-pointer truncate text-xs leading-6 font-normal relative`} key="is-2" onClick={() => HandleFilterSearch(1)}><span className={`absolute left-5 top-0 text-green-500`}>{filterSearch === 1 ? <CheckIcon /> : null}</span>Buzón actual</li>
                    </ul>
                </div>
            </animated.div> 
            <form className="flex relative" onSubmit={HandleSubmit}>
                <span className="absolute top-1 left-4 dark:text-[#ababab] text-sky-600">
                    <SearchIcon />
                </span>                
                <InputDebounce 
                    type="text" 
                    name="search" 
                    classname="w-[400px] h-full pl-12 dark:bg-[#262626] dark:focus:bg-[#505050] focus:outline-none focus:ring-1 dark:focus:ring-white focus:ring-[#004578] focus:bg-white bg-[#deecf9] text-black dark:text-[#afafaf]" 
                    placehold="Buscar"
                    onfocus={(e) => e.target.placeholder = ""}
                    onblur={(e) => HandleOnBlur(e)} 
                    onclick={() => setOpenSearch(true)}
                    _id={inputId}
                    setFilters={setFilters}
                    value={value}
                    setValue={setValue}
                />
            </form>
        </div>
    )
}

function UserBar({menuAppear, reference, chkUser, setOpen, open}) {    
    return(       
        <div className={`${open ? 'dark:bg-[#737373] dark:hover:bg-[#737373] bg-[#004578] hover:bg-[#004578]' : 'dark:hover:bg-[#363636] hover:bg-[#005a9e]'} p-3 h-full absolute right-5 flex items-center `} ref={reference} title="Datos del perfil">
            <label htmlFor={chkUser}>
                <span><img src={user.USR_Photo} className={`rounded-full w-[25px] h-[25px] hover:cursor-pointer`}/></span>
                <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></div>
            </label>                              
            <input type="checkbox" id={chkUser} className="hidden" onClick={() => setOpen(!open)} />
            <animated.div style={menuAppear} className={`flex absolute z-[60] overflow-hidden right-0 top-[30px]`}>                
                <div className="h-full w-full dark:bg-[#262626] bg-[#ffffff] dark:border-[#737373] border-[#949494] border">
                    <div className="w-full flex justify-end">
                        <span className="flex border-[2px] dark:border-white border-black p-4 w-fit dark:text-white text-black text-xs hover:cursor-pointer dark:hover:bg-[#363636] hover:bg-[#d2d2d2]">Cerrar sesión</span>
                    </div>
                    <div className="flex justify-center items-center gap-5 h-fit p-4">
                        <div className={`rounded-full w-[100px] h-[100px]`}>
                            <img src={user.USR_Photo} className={`rounded-full h-full w-full`} />
                        </div>
                        <div className="flex flex-col h-fit max-w-[260px]">
                            <span className="text-xl font-semibold truncate dark:text-white text-[#262626]">{user.USR_Nombre}</span>
                            <span className="text-xs truncate pb-2 dark:text-white text-[#262626]">{user.USR_Mail}</span>
                            <span className="text-xs truncate text-sky-600">{user.PER_Nombre}</span>
                            <span className="text-xs truncate text-sky-600">{user.DEP_Descripcion}</span>
                        </div>
                    </div>
                    <div className="w-full p-4 dark:bg-[#363636] dark:border-[#737373] hover:bg-[#d2d2d2] bg-[#f3f3f3] border-t border-[#d9d9d9] hover:dark:bg-[#505050] hover:cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="relative text-[#313131] dark:text-white">
                                <MailIcon strokeWidth=".75" styles="w-10 h-10" /> 
                                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full -top-2 -right-2">{user.USR_MsgSinLeer}</div>                               
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
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const { filters, setFilters } = useFilters();

    let height = 260;
    const menuAppear = useSpring({        
        opacity:1,
        height: `${open ? height : 0}` + 'px'        
    });        
    const chkUser = useId();    

    const HandleOpenUser = () => {
        setOpen(!open);        
    }

    const HandleReload = () =>{
        /*setFilters(prevState => ({
            ...prevState,                     
            reload: !filters.reload
        }))
        console.log("si")*/ 
    }

    const { ref:refUser } = ClickAway(setOpen);
    return(
        <div className="flex items-center h-full px-4 text-white relative">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" onClick={HandleReload} title="Recargar">
                <ReloadIcon />
            </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" title="Ayuda">
                <HelpIcon />
            </span>
            <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} filterSearch={filters.filterSearch} setFilters={setFilters}/>
            <UserBar menuAppear={menuAppear} reference={refUser} chkUser={chkUser} setOpen={HandleOpenUser} open={open}/>
        </div>
    )
}