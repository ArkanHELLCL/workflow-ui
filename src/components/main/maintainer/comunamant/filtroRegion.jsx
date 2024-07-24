/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../../../hooks/useFilters.jsx";
import { useRecords } from "../../../../hooks/useRecords.jsx";
import Region from "../../../../mocks/regiones.json";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { IconButton } from "@mui/material";

function LstRegiones(){
    const { filters, setFilters } = useFilters()
    const { setRecord } = useRecords()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);        
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSetDepto= (id) => {
        setAnchorEl(null);
        setFilters(prevState => ({
            ...prevState, 
            region: id,
        }))
        setRecord(null)
    }
    const ITEM_HEIGHT = 48;

    return (
        <div className="relative">
            <div className="w-full z-50 max-w-48 items-start table-header-group">
                <span className="min-w-[50px]">Región : </span>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'lstDepMen' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={`hover:!border-sky-600 !text-sky-600 !border-0 !border-transparent !border-b-2 !bg-transparent !rounded-none !overflow-hidden !pt-[6px]`}
                    style={{border: '2px solid transparent'}}
                >
                    <div className="!w-auto !truncate !font-normal !text-sm">
                        {filters.region ? Region.records.filter(item => parseInt(item.id) === parseInt(filters.region))[0].shortname : 'Todas'}
                    </div>
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />
                </IconButton>
                <Menu
                    id="lstDepMen"
                    placement="bottom-start"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 'auto',                            
                        },
                        className: "!border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500"
                    }}
                >
                    {Region.records.map((item) => (
                    <MenuItem 
                        key={item.id} 
                        selected={filters.region===item.id } 
                        onClick={()=>handleSetDepto(item.id)}
                        className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow !pl-8 relative`} 
                        id={'lstReg-'+ item.id}
                        >
                            <ListItemIcon className={`${filters.region===item.id ? 'selected' : null} dark:!text-stone-100 !text-stone-500`}>
                                {filters.region===item.id ? <Check className="!w-4 !h-4" /> : null}                                
                            </ListItemIcon>
                            {item.label}
                    </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    );
}

export default function Regiones(){
    return (        
        <LstRegiones />        
    )     
}