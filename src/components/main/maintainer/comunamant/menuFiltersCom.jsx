/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../../../hooks/useFilters.jsx";
import { useRecords } from "../../../../hooks/useRecords.jsx";
import Region from "../../../../mocks/regiones.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check'
import StraightIcon from '@mui/icons-material/Straight';
import { useState } from "react";

export default function MenuFiltersCom() {
    const { filters, setFilters } = useFilters()
    const { setRecord } = useRecords()
    const handleSetRegion = (id) => {
        setFilters(prevState => ({
            ...prevState, 
            region: id,
        }))        
        setRecord(null)
    }
    const handleSetFiltros = (filtro) => {
        setFilters(prevState => ({
            ...prevState, 
            filterMant: filtro,
        }))
    }
    const handleSetOrder = (orderDes) => {
        setFilters(prevState => ({
            ...prevState, 
            orderDesMant: orderDes,
        }))        
    }

    function desOrder(orderDes){
        //Fecha de creación     
        if(filters.filterMant===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filterMant===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        //Por id de registro
        if(filters.filterMant===2 && orderDes){
            return 'Id. mayor en la parte superior'
        }
        if(filters.filterMant===2 && !orderDes){
            return 'Id. mayor en la parte inferior'
        }

        //Por nombre de usuario
        if(filters.filterMant===3 && orderDes){
            return 'Comunas ordenados descendente'
        }
        if(filters.filterMant===3 && !orderDes){
            return 'Comunas ordenados ascendente'
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
                    id="mnucom-button"
                    aria-controls={open ? "mnucom" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Filtros para lista de comunas">{
                        Region.orderby.filter((item) => item.id === filters.filterMant)[0].name
                    }
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1"/>
                </Button>
                <Menu
                    id="mnucom"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}                    
                    MenuListProps={{
                        'aria-labelledby': 'mnucom-button',
                }}>
                    <p className="px-6 pt-1 text-xs font-semibold truncate">Filtrar</p>
                    <div className="max-h-48 overflow-y-auto" id="lstRegContainer">{
                        Region.records.map((item) =>
                            <MenuItem 
                                key={item.id}                                
                                onClick={()=>handleSetRegion(item.id)}
                                className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !pb-0`} 
                                id={'lstReg-'+ item.id}
                            >
                            <ListItemIcon className={`${filters.region===item.id ? 'selected' : null} dark:!text-stone-100 !text-stone-500`}>
                                {filters.region===item.id ? <Check className="!w-4 !h-4" /> : null}                                
                            </ListItemIcon>
                            {item.label}
                        </MenuItem>
                        )
                    }
                    </div>
                    <Divider/>
                    <p className="px-6 pt-4 text-xs font-semibold truncate">Organizar por</p>{
                        Region?.orderby.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                <ListItemIcon>{filters.filterMant===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}</ListItemIcon>{item.description}                    
                            </MenuItem> 
                        )
                    }
                    <Divider/>
                    <p className="px-6 pt-1 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemIcon className={``}>{filters.orderDesMant ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemIcon className={``}>{!filters.orderDesMant ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(false)}                   
                    </MenuItem> 
                        
                </Menu>
                <Button variant="text"                     
                    onClick={() => handleSetOrder(!filters.orderDesMant)} 
                    className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500 !min-h-full !w-7 !p-0 !m-0 flex justify-center !min-w-7">
                        {filters.orderDesMant ? <StraightIcon className="!w-auto !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-auto !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}
                </Button>
            </>
        )
    }
    
    return (        
        <MenuFilter />        
    )
}