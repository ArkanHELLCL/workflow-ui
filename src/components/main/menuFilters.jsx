/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import { useRequest } from "../../hooks/useRequest.jsx";
import { flujos } from "../../mocks/flujos.json";
import { flujosv0 } from "../../mocks/flujos.json";
import { flujosv1 } from "../../mocks/flujos.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check'
import StraightIcon from '@mui/icons-material/Straight';
import { useState } from "react";

export default function MenuFilters() {
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()    
    
    const handleSetFlujos = (flujo) => {
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
    const handleSetFiltros = (filtro) => {
        setFilters(prevState => ({
            ...prevState, 
            filter: filtro,
        }))
    }
    const handleSetOrder = (orderDes) => {
        setFilters(prevState => ({
            ...prevState, 
            orderDes: orderDes,
        }))
    }    
    function desOrder(orderDes){
        if(filters.filter===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filter===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        if(filters.filter===2 && orderDes){
            return 'Número mayor en la parte superior'
        }
        if(filters.filter===2 && !orderDes){
            return 'Número mayor en la parte inferior'
        }

        if(filters.filter===3 && orderDes){
            return 'Más atrasado en la parte superior'
        }
        if(filters.filter===3 && !orderDes){
            return 'Más atrasado en la parte inferior'
        }

        if(filters.filter===4 && orderDes){
            return 'Paso más alto en la parte superior'
        }
        if(filters.filter===4 && !orderDes){
            return 'Paso más alto en la parte inferior'
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
                    id="mnufil-button"
                    aria-controls={open ? "mnufil" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Filtros para lista de requerimientos">{
                        filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                            flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                        :
                            filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name 
                            :
                                    flujos.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                    }
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1"/>
                </Button>
                <Menu
                    id="mnufil"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'mnufil-button',
                    }}>{
                    filters.itemIdSelected.slice(0,2).toUpperCase() !== 'BN' ?
                        <div>
                            <p className="px-6 pt-1 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujos.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemIcon className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <Divider/>
                        </div>
                    : filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                        <div>
                            <p className="px-6 pt-1 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujosv1.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemIcon className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <Divider/>
                        </div>
                    : null
                }
                <p className="px-6 pt-1 text-xs font-semibold truncate">Organizar por</p>{
                        filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                            flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                    <ListItemIcon>
                                        {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                    </ListItemIcon>
                                    {item.description}                    
                                </MenuItem> 
                            )
                        :
                            filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemIcon>
                                            {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                        </ListItemIcon>
                                        {item.description}                    
                                    </MenuItem> 
                                )
                            :
                                flujos.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemIcon>
                                            {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                        </ListItemIcon>
                                        {item.description}
                                    </MenuItem> 
                                )
                    }
                    <Divider/>
                    <p className="px-6 pt-1 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemIcon className={``}>{filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemIcon className={``}>{!filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(false)}                   
                    </MenuItem>
                </Menu>
                <Button variant="text"                     
                    onClick={() => handleSetOrder(!filters.orderDes)} 
                    className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500 !min-h-full !w-7 !p-0 !m-0 flex justify-center !min-w-7">
                        {filters.orderDes ? <StraightIcon className="!w-auto !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-auto !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}
                </Button>
            </>
        )
    }
    
    return (        
        <MenuFilter />        
    )
}