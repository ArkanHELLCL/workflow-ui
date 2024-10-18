/* eslint-disable react/prop-types */
import { useFilters } from "../../../hooks/useFilters.jsx";
import { orderby } from "../../../mocks/orderbyMen.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check'
import StraightIcon from '@mui/icons-material/Straight';
import { useState } from "react";

export default function MenuFiltersMen() {
    const { filters, setFilters } = useFilters()    

    const handleSetFiltros = (filtro) => {         
        setFilters(prevState => ({
            ...prevState, 
            filterMen: filtro,
        }))
    }
    const handleSetOrder = (orderDes) => {         
        setFilters(prevState => ({
            ...prevState, 
            orderDesMen: orderDes,
        }))
    }
    function desOrder(orderDes){   
        //Fecha de creación     
        if(filters.filterMen===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filterMen===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        //Por id de registro
        if(filters.filterMen===2 && orderDes){
            return 'Id. mayor en la parte superior'
        }
        if(filters.filterMen===2 && !orderDes){
            return 'Id. mayor en la parte inferior'
        }

        //Por nombre de usuario
        if(filters.filterMen===3 && orderDes){
            return 'Remitentes ordenados descendente'
        }
        if(filters.filterMen===3 && !orderDes){
            return 'Remitentes ordenados ascendente'
        }
        return 'Sin orden'
    }    
    const MenuFilter = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        return (      
            <>
                <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !text-sm !min-h-full !px-2`}
                    id="mnumen-button"
                    aria-controls={open ? "mnumen" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Filtros para lista de registros">{
                        orderby.filter((item) => item.id === filters.filterMen)[0].name
                    }
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1"/>
                </Button>
                <Menu
                    id="mnufil"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'mnumen-button',
                    }}>                    
                    <p className="px-6 pt-1 text-xs font-semibold truncate">Organizar por</p>{
                        orderby.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                <ListItemIcon>{filters.filterMen===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}</ListItemIcon>{item.description}                    
                            </MenuItem> 
                        )
                    }
                    <Divider/>
                    <p className="px-6 pt-1 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemIcon className={``}>{filters.orderDesMen ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemIcon className={``}>{!filters.orderDesMen ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(false)}                   
                    </MenuItem>
                </Menu>
                <Button variant="text"                     
                    onClick={() => handleSetOrder(!filters.orderDesMen)}
                    className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500 !min-h-full !w-7 !p-0 !m-0 flex justify-center !min-w-7">
                        {filters.orderDesMen ? <StraightIcon className="!w-auto !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-auto !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}
                </Button>
            </>
        )
    }
    
    return (        
        <MenuFilter />
    )
}