/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../../../hooks/useFilters.jsx";
import { useRecords } from "../../../../hooks/useRecords.jsx";
import Departamento from "../../../../mocks/departamentos.json";

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import { useState, useEffect } from "react";

function LstDepartamentos(){
    const { filters, setFilters } = useFilters()
    //const { scrollPos, setScrollPos } = useState()

    const { setRecord } = useRecords()
    //let listElement

    /*function centerElement(selector) {
        const element = document.getElementById(selector);
        const parentOfElement = element.parentElement;
        const { width, height } = parentOfElement.getBoundingClientRect();
        console.log(width, height, selector)
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        //element.style = `top: ${height / 2}px; left: ${width / 2}px`;
        element.style = `top: ${height / 2}px`;
      }
*/
    const handleSetDeptos = (id) => {         
        setFilters(prevState => ({
            ...prevState, 
            departamento: id,
        }))
        setRecord(null)
        //centerElement('lstDep-'+ id)
        //listElement = document.getElementById('lstDepMen');
        //console.log(listElement)
        //const { width, height } = listElement.getBoundingClientRect();
        //console.log(width, height)
    }
    /*

    useEffect(() => {
        listElement = document.getElementById('lstDepMen');
        console.log(listElement)
        const { width, height } = listElement.getBoundingClientRect();
        console.log(width, height)
    },[Departamento])*/
    

    return (
        <div className="relative">
            <div className="w-full flex z-50 items-start max-w-48">
                <span className="pt-[2px] min-w-[50px]">Depto : </span>
                <Dropdown>
                    <MenuButton endDecorator={<KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />} className={`hover:!border-sky-600 !text-sky-600 !border-0 !border-transparent !border-b-2 !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 overflow-hidden`}>
                        <div className="w-auto truncate">
                            {filters.departamento ? Departamento.records.filter(item => item.id === filters.departamento)[0].shortname : 'Todos'}
                        </div>
                    </MenuButton>
                    <Menu placement="bottom-start" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min max-h-60 overflow-y-auto" id="lstDepMen">{
                        Departamento.records.map((item) =>
                            <MenuItem  
                                className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} 
                                key={item.id} 
                                onClick={() => handleSetDeptos(item.id)} 
                                id={'lstDep-'+ item.id} >
                                <ListItemDecorator className={`${filters.departamento===item.id ? 'selected' : null}`}>{filters.departamento===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.shortname}                    
                            </MenuItem> 
                        )
                    }
                    </Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default function Departamentos(){
    return (        
        <LstDepartamentos />        
    )     
}