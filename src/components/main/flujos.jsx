/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import { useRequest } from "../../hooks/useRequest.jsx";
import { flujos, flujosv1} from "../../mocks/flujos.json";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { IconButton } from "@mui/material";

export default function Flujos(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);        
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;
    const handleSetFlujos = (flujo) => {
        setAnchorEl(null);
        setFilters(prevState => ({
            ...prevState, 
            flujo: flujo,
        }))
        setRequest(null)
        if(flujo === 0 && filters.filter===4)
            setFilters(prevState => ({
                ...prevState, 
                filter: 1,
        }))
    }

    return (
        <div className="relative">
            <div className="w-full z-50 max-w-48 items-start table-header-group">{
                filters.itemIdSelected.slice(0,2).toUpperCase() !== 'BN' ?
                    <>
                        <span className="min-w-[50px]">Flujo : </span>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'lstDepMen' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={`hover:!border-sky-600 !text-sky-600 !border-0 !border-transparent !border-b-2 !bg-transparent !rounded-none !overflow-hidden !py-0 max-w-40 h-7`}
                            style={{border: '2px solid transparent'}}
                        >
                            <div className="!w-auto !truncate !font-normal !text-sm">
                                {flujos.filter(item => item.id === filters.flujo)[0].name}
                            </div>
                            <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />
                        </IconButton>
                        <Menu
                            id="lstDepMen"                    
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
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
                            {flujos.map((item) => (
                            <MenuItem 
                                key={item.id} 
                                selected={filters.flujo===item.id } 
                                onClick={()=>handleSetFlujos(item.id)}
                                className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 mnuFlow`} 
                                id={'lstReg-'+ item.id}
                                >
                                    <ListItemIcon className={`${filters.flujo===item.id ? 'selected' : null} dark:!text-stone-100 !text-stone-500`}>
                                        {filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}                                
                                    </ListItemIcon>
                                    {item.description}
                            </MenuItem>
                            ))}
                        </Menu>
                    </>
                :
                    filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                        <>
                            <span className="min-w-[50px]">Flujo : </span>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'lstDepMen' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                className={`hover:!border-sky-600 !text-sky-600 !border-0 !border-transparent !border-b-2 !bg-transparent !rounded-none !overflow-hidden !py-0 max-w-40 h-7`}
                                style={{border: '2px solid transparent'}}
                            >
                                <div className="!w-auto !truncate !font-normal !text-sm">
                                    {flujosv1.filter(item => item.id === filters.flujo)[0].name}
                                </div>
                                <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />
                            </IconButton>
                            <Menu
                                id="lstDepMen"                    
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
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
                                {flujosv1.map((item) => (
                                <MenuItem 
                                    key={item.id} 
                                    selected={filters.flujo===item.id } 
                                    onClick={()=>handleSetFlujos(item.id)}
                                    className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 mnuFlow`} 
                                    id={'lstReg-'+ item.id}
                                    >
                                        <ListItemIcon className={`${filters.flujo===item.id ? 'selected' : null} dark:!text-stone-100 !text-stone-500`}>
                                            {filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}                                
                                        </ListItemIcon>
                                        {item.description}
                                </MenuItem>
                                ))}
                            </Menu>
                        </>
                    : null
                }
            </div>
        </div>
    );
}