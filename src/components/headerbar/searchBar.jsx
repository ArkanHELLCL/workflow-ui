/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from "react";
import { InputDebounce } from "../../utils/InputDebounce.jsx";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check'
import SearchIcon from '@mui/icons-material/Search';
import { useFilters } from "../../hooks/useFilters.jsx";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton } from "@mui/material";
import { style } from "@mui/system";

export default function SearchBar({openSearch, setOpenSearch}) {    
    const menuSearch = useId();
    const [value, setValue] = useState();
    const { filters, setFilters } = useFilters();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;
    
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
        handleClose()
    }    

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
        
    return(
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className="h-full flex z-50 w-full" id={menuSearch} onDragOver={handleNotDragOver}>                    
                    <div className={`absolute transition-all duration-400 ${openSearch && filters.filterSearch === 2 ? ' -translate-x-[158px]' : openSearch && filters.filterSearch === 1 ? ' -translate-x-[134px]' : ' translate-x-0'}`} id="mnuSearchBandejas">
                        <IconButton
                            aria-label="more"
                            id="search-button"
                            aria-controls={open ? 'search' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={`dark:!bg-[#323130] !bg-[#ffffff] hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !border-0 dark:!text-stone-100 !text-stone-500 !rounded-none !min-h-[30px] !m-0 !ps-2.5 !pe-2.5 !pl-3 !py-0 text-xs !w-[${widthMenuSearch}px] !font-light !border-0`}
                            style={{border: '2px solid transparent'}}
                        >
                            <div className="!w-auto !truncate !font-normal !text-sm">
                                {nameItemSelected}
                            </div>
                            <KeyboardArrowDownIcon className="!w-5 !h-5 !mt-1 !ml-1" />
                        </IconButton>                                            
                        <Menu
                            id="search"                    
                            MenuListProps={{
                                'aria-labelledby': 'search-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper:{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 'auto',
                                    },
                                    className: "!border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500"
                                }
                            }}
                        >
                            <MenuItem  onClick={() => HandleFilterSearch(2)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 mnuFlow`}                             >
                                <ListItemIcon>{filters.filterSearch === 2 ? <Check className='text-green-500'/> : null}</ListItemIcon>
                                Todas las bandejas
                            </MenuItem>
                            <MenuItem  onClick={() => HandleFilterSearch(1)} className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 mnuFlow`}>
                                <ListItemIcon>{filters.filterSearch === 1 ? <Check className='text-green-500'/> : null}</ListItemIcon>
                                Bandeja actual
                            </MenuItem>
                        </Menu>
                    </div>
                    
                    <form className="flex relative w-full border border-[#deecf9] dark:border-[#262626]" onSubmit={HandleSubmit}>
                        <span className="absolute top-1 left-4 dark:text-[#ababab] text-sky-600">
                            <SearchIcon className="!w-5 !h-5 !-mt-1"/>
                        </span>                
                        <InputDebounce 
                            type="text" 
                            name="search" 
                            classname="w-full h-full pl-12 dark:bg-[#262626] dark:focus:bg-[#505050] focus:outline-none focus:ring-1 dark:focus:ring-white focus:ring-[#004578] focus:bg-white bg-[#deecf9] text-black dark:text-[#afafaf]" 
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