/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../../../hooks/useFilters.jsx";
import { useRecords } from "../../../../hooks/useRecords.jsx";
import Region from "../../../../mocks/regiones.json";

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
import { useEffect } from "react";

export default function MenuFiltersCom() {
    const { filters, setFilters } = useFilters()
    const { setRecord } = useRecords()    
    
    const handleSetFDepto = (id) => {         
        setFilters(prevState => ({
            ...prevState, 
            region: id,
        }))        
        setRecord(null)
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

    useEffect(() => {
        const el = document.getElementsByClassName('reqselected')[0]
        el?.classList.remove('reqselected')
        setRecord(null)
    },[filters.region])

    function desOrder(orderDes){   
        //Fecha de creación     
        if(filters.filter===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filter===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        //Por id de registro
        if(filters.filter===2 && orderDes){
            return 'Id. mayor en la parte superior'
        }
        if(filters.filter===2 && !orderDes){
            return 'Id. mayor en la parte inferior'
        }

        //Por nombre de usuario
        if(filters.filter===3 && orderDes){
            return 'Comunas ordenados descendente'
        }
        if(filters.filter===3 && !orderDes){
            return 'Comunas ordenados ascendente'
        }
        return 'Sin orden'
    }    
    const MenuFilter = () => {        
        return (      
            <>             
            <Dropdown>
                <MenuButton endDecorator={<KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />} className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] p-2 pt-[6px] pb-[6px]" !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none`}>{
                                Region.orderby.filter((item) => item.id === filters.filter)[0].name
                            }                
                </MenuButton>
                <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">                    
                    <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>
                    <div className=" max-h-48 overflow-y-auto">{
                        Region.records.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFDepto(item.id)}>
                                <ListItemDecorator className={``}>{filters.region===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.label}                    
                            </MenuItem> 
                        )
                    }
                    </div>
                    <ListDivider/>
                    <p className="px-6 py-2 text-xs font-semibold truncate">Organizas por</p>{
                        Region?.orderby.map((item) =>
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