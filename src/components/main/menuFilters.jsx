/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import { useRequest } from "../../hooks/useRequest.jsx";
import { flujos } from "../../mocks/flujos.json";
import { flujosv0 } from "../../mocks/flujos.json";
import { flujosv1 } from "../../mocks/flujos.json";

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListDivider from '@mui/joy/ListDivider';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import StraightIcon from '@mui/icons-material/Straight';

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
        return (      
            <>             
            <Dropdown>
                <MenuButton endDecorator={<KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />} className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] p-2 pt-[6px] pb-[6px]" !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none`}>{
                                filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                                    flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                                :
                                    filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                        flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name 
                                    :
                                            flujos.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                            }
                </MenuButton>
                <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                    filters.itemIdSelected.slice(0,2).toUpperCase() !== 'BN' ?
                        <>
                            <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujos.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemDecorator className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <ListDivider/>
                        </>
                    : filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                        <>
                            <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujosv1.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemDecorator className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <ListDivider/>
                        </>
                    : null
                }
                    <p className="px-6 py-2 text-xs font-semibold truncate">Organizas por</p>{
                        filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                            flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                    <ListItemDecorator className={`text-green-500`}>{filters.filter===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                                </MenuItem> 
                            )
                        :
                            filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemDecorator className={`text-green-500`}>{filters.filter===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                                    </MenuItem> 
                                )
                            :
                                flujos.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemDecorator className={`text-green-500`}>{filters.filter===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                                    </MenuItem> 
                                )
                    }
                    <ListDivider/>
                    <p className="px-6 py-2 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemDecorator className={``}>{filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemDecorator className={``}>{!filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{desOrder(false)}                   
                    </MenuItem> 
                        
                </Menu>
            </Dropdown>
            <List className="!py-0">
                <ListItemButton onClick={() => handleSetOrder(!filters.orderDes)} className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500">{filters.orderDes ? <StraightIcon className="!w-5 !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-5 !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}</ListItemButton>
            </List>
        </>
        )
    }
    
    return (
        <MenuFilter />
    )
}