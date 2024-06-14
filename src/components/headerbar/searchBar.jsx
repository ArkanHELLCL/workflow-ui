/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { InputDebounce } from "../../utils/InputDebounce.jsx";

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check'
import SearchIcon from '@mui/icons-material/Search';



export default function SearchBar({openSearch, setOpenSearch, setFilters, filters}) {    
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