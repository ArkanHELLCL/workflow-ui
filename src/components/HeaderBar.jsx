/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { user } from '../mocks/usuario.json'
import { useSpring, animated } from "@react-spring/web";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useEffect, useId, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { InputDebounce } from "../utils/InputDebounce.jsx";

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CachedIcon from '@mui/icons-material/Cached';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/joy/IconButton';
import { ListItem } from '@mui/joy';
import { Divider, ListItemButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


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
        widthMenuSearch = 75;
        nameItemSelected = "Bandeja actual"
    }
    if(filters.filterSearch === 2){
        widthMenuSearch = 96;
        nameItemSelected = "Todos las bandejas"
    }

    const HandleFilterSearch = (id) => {
        setFilters(prevState => ({
            ...prevState,                     
            filterSearch: id            
        }))
    }
    const referenceWidth = (widthMenuSearch + 12 + 42) 
    const searchAnimation = useSpring({
        transform: `translateX(-${referenceWidth}px)`,
        from: { transform: "translateX(0px)" },
        config: { duration: 0 },
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
                            <MenuButton endDecorator={<KeyboardArrowDownIcon className='!w-4 !h-4 !mt-1 !ml-1'/>} className={`dark:!bg-[#323130] !bg-[#ffffff] hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !border-0 dark:!text-stone-100 !text-stone-500 !rounded-none !min-h-min !m-0 !ps-2.5 !pe-2.5 !pl-3 !py-[1.5px] text-xs !w-[${widthMenuSearch}px] !font-light`}>{nameItemSelected}</MenuButton>
                            <Menu placement="bottom-start" className="dark:!bg-[#323130] !bg-[#ffffff] border dark:border-[#8a8886] border-[#e1dfdd] !rounded-none !text-xs !leading-6 !font-normal dark:!text-stone-100 !text-stone-500 !py-0 !m-h-min">
                                <MenuItem  onClick={() => HandleFilterSearch(2)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] dark:!text-stone-100 !text-stone-500 !pr-12 mnuFlow !text-xs !leading-0`}>
                                    <ListItemDecorator className={`text-green-500`}>{filters.filterSearch === 2 ? <Check /> : null}</ListItemDecorator>Todas las bandejas
                                </MenuItem>
                                <MenuItem  onClick={() => HandleFilterSearch(1)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] dark:!text-stone-100 !text-stone-500 !pr-12 mnuFlow !text-xs !leading-0`}>
                                    <ListItemDecorator className={`text-green-500`}>{filters.filterSearch === 1 ? <Check /> : null}</ListItemDecorator>Bandeja actual
                                </MenuItem>                                                               
                            </Menu>
                        </Dropdown>
                    </animated.div>
                }                
                <form className="flex relative" onSubmit={HandleSubmit}>
                    <span className="absolute top-1 left-4 dark:text-[#ababab] text-sky-600">
                        <SearchIcon className="!w-5 !h-5 !-mt-1"/>
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

function UserBar({open, setOpen, filters}) {
    const ButtonUsrProfile = () => {
        return (
            <>
                <span><img src={user.USR_Photo} className={`rounded-full w-[25px] h-[25px] hover:cursor-pointer`}/></span>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
            </>
        )
    }

    const UserDetail = () => {
        return (
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
        )
    }   
    
    return(
        <Dropdown>
            <MenuButton 
                className={`${open ? 'dark:!bg-[#737373] dark:hover:!bg-[#737373] !bg-[#004578] hover:!bg-[#004578]' : 'dark:hover:!bg-[#363636] hover:!bg-[#005a9e]'} p-3 !h-full !absolute right-5 flex items-center z-20 !border-0 !min-h-fit !rounded-none !border-none`} 
                title="Datos del perfil"
                slots={{ root: IconButton }}
                onClick={()=>setOpen(!open)}>
                    <ButtonUsrProfile/>
            </MenuButton>
            <Menu className='dark:!bg-[#262626] !bg-[#ffffff] dark:!border-[#737373] !border-[#949494] !border !rounded-none !h-auto !py-0' open={open}>                
                <ListItem 
                    endAction={
                        <ListItemButton sx={{'border':'2px solid','paddingRight': '0px','marginRight':'-5px','marginTop':'10px'}} className="!border-[2px] !border-t-2 dark:!border-white !border-black !w-fit dark:!text-white !text-black !text-xs dark:hover:!bg-[#363636] hover:!bg-[#d2d2d2] !py-[13px] !px-6" onClick={()=>console.log("cerrar sesión")}>
                            Cerrar Sesión
                        </ListItemButton>}>                    
                </ListItem>
                <UserDetail />
                <Divider orientation="horizontal" />
                <ListItem 
                    className="!px-16 !py-6 dark:!bg-[#363636] dark:!border-[#737373] !bg-[#f3f3f3] !border-t !border-[#d9d9d9] dark:!text-white !text-black" 
                    startAction={
                        <ListItemButton className="!w-fit dark:!text-white !text-black !text-xs !pl-3 !pr-0 !px-0 !font-thin" 
                            onClick={()=>console.log("ver mensajes")}>
                                <MailOutlineIcon className="!w-10 !h-10" />
                                <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full top-0 -right-2">{user.USR_MsgSinLeer}</span>
                        </ListItemButton>}
                    endAction={
                        <IconButton sx={{ ml: 1 }} onClick={()=>console.log('darkmode')} color="inherit">
                            {filters.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    }>
                    Ver mis mensajes privados
                </ListItem>
            </Menu>
        </Dropdown>        
    )
}

export default function HeaderBar() {
    const [openSearch, setOpenSearch] = useState(false);
    const { filters, setFilters } = useFilters(); 
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
            <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} filters={filters} setFilters={setFilters}/>
            <ClickAwayListener onClickAway={HandleOpenUser}>
                <div className='absolute h-full right-0'>
                    <UserBar open={open} setOpen={setOpen} filters={filters}/>
                </div>
            </ClickAwayListener>
        </div>
    )
}