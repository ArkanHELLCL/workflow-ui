/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CheckIcon, HelpIcon, IconOpen, MailIcon, ReloadIcon, SearchIcon } from "./icons";
import { user } from '../mocks/usuario.json'
import { useSpring, animated } from "@react-spring/web";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useEffect, useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { InputDebounce } from "./InputDebounce";

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

function SearchBar({openSearch, setOpenSearch, setFilters, filters}) {    
    const menuSearch = useId();
    const [value, setValue] = useState();

    useEffect(() => {
        if(filters.stringSearch==="") setValue('')
    },[filters.stringSearch])

    const HandleOnBlur = (e) => {
        e.target.placeholder = "Buscar"
        e.target.value=""
    }
    const inputId = useId();
    let widthMenuSearch=0;
    let nameItemSelected = null;

    const handleClickAway = () => {
        setOpenSearch(false);
    };    
    
    if(filters.filterSearch === 1){
        widthMenuSearch = 64;
        nameItemSelected = "Buzón actual"
    }
    if(filters.filterSearch === 2){
        widthMenuSearch = 96;
        nameItemSelected = "Todos los buzones"
    }

    const HandleFilterSearch = (id) => {
        setFilters(prevState => ({
            ...prevState,                     
            filterSearch: id            
            //loading: id !== filterSearch ? true : false
        }))
    }
    const referenceWidth = (widthMenuSearch + 12 + 42) 
    const searchAnimation = useSpring({
        transform: `translateX(-${referenceWidth}px)`,
        from: { transform: "translateX(0px)" },
        config: { duration: 100 },
        reverse: !openSearch,
        reset: !openSearch,
    });

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
                loading: true,
                filterSearchResult:false
            }))            
        }        
    }
    
    useEffect(() => {
        document.addEventListener("keyup", QuitarFoco, true);
        return () => {
            document.removeEventListener("keyup", QuitarFoco, true);            
        };
    },[value]);

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }
        
    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="h-[24px] flex absolute left-[305px] z-50" id={menuSearch} onDragOver={handleNotDragOver}>{
                openSearch &&            
                    <animated.div
                        className={`absolute`}
                        style={searchAnimation}>                            
                        <Dropdown>
                            <MenuButton endDecorator={<IconOpen open={true} />} className={`dark:bg-[#323130] bg-[#ffffff] hover:bg-[#c5c5c5] dark:hover:bg-[#505050] !border-0 !text-inherit !rounded-none !min-h-min !m-0 !ps-2.5 !pe-2.5 !pl-3 !py-[1.5px] text-xs !w-[${widthMenuSearch}px] !font-light`}>{nameItemSelected}</MenuButton>
                            <Menu placement="bottom-start" className="dark:bg-[#323130] bg-[#ffffff] border dark:border-[#8a8886] border-[#e1dfdd] !rounded-none !text-xs !leading-6 !font-normal !text-inherit !py-0">
                                <MenuItem onClick={() => HandleFilterSearch(2)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !px-12 !text-inherit`}><span className={`absolute left-5 top-0 text-green-500`}>{filters.filterSearch === 2 ? <CheckIcon /> : null}</span>Todos los buzones</MenuItem>
                                <MenuItem onClick={() => HandleFilterSearch(1)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !px-12 !text-inherit`}><span className={`absolute left-5 top-0 text-green-500`}>{filters.filterSearch === 1 ? <CheckIcon /> : null}</span>Buzón actual</MenuItem>
                            </Menu>
                        </Dropdown>
                    </animated.div>
                }
                
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
        </ClickAwayListener>
    )
}

function UserBar({menuAppear, setOpen, open}) {    
    const handleClickAway = () => {
        setOpen(false);
    };
    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={`${open ? 'dark:bg-[#737373] dark:hover:bg-[#737373] bg-[#004578] hover:bg-[#004578]' : 'dark:hover:bg-[#363636] hover:bg-[#005a9e]'} p-3 h-full absolute right-5 flex items-center z-20 hover:cursor-pointer`} onClick={() => setOpen(!open)} title="Datos del perfil">                           
                <span><img src={user.USR_Photo} className={`rounded-full w-[25px] h-[25px] hover:cursor-pointer`}/></span>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
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
                                    <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full -top-2 -right-2">{user.USR_MsgSinLeer}</span>                               
                                </span>                            
                                <span className="text-[#313131] dark:text-white">Ver mis mensajes privados</span>
                            </div>                        
                        </div>
                    </div>
                </animated.div>            
            </div> 
            </ClickAwayListener>      
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

    /*const HandleOpenUser = () => {
        setOpen(!open);        
    }*/

    const HandleReload = () =>{
        /*setFilters(prevState => ({
            ...prevState,                     
            reload: !filters.reload
        }))
        //console.log("si")*/ 
    }

    //const { ref:refUser } = ClickAway(setOpen);
    return(
        <div className="flex items-center h-full px-4 text-white relative z-50">
            <span className="dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" onClick={HandleReload} title="Recargar">
                <ReloadIcon />
            </span>
            <span className="dark:text-sky-600 text-white dark:hover:bg-[#363636] p-1 hover:bg-[#005a9e] hover:cursor-pointer" title="Ayuda">
                <HelpIcon />
            </span>
            <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} filters={filters} setFilters={setFilters}/>
            <UserBar menuAppear={menuAppear} setOpen={setOpen} open={open}/>
        </div>
    )
}