/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { flujos } from "../mocks/flujos.json";

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function LstFlujos(){
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

    return (
        <div className="relative">
            <div className="w-auto flex z-50 truncate items-center">
                <span>Flujo : </span>
                <Dropdown>
                    <MenuButton endDecorator={<KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1 !ml-1" />} className={`hover:!border-sky-600 !text-sky-600 !border-0 !border-transparent !border-b-2 !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5`}>{
                        flujos.filter(item => item.id === filters.flujo)[0].name}
                    </MenuButton>
                    <Menu placement="bottom-start" className="!py-0 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none !text-inherit !m-h-min">{
                        flujos.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal !text-inherit !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                <ListItemDecorator className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemDecorator>{item.description}                    
                            </MenuItem> 
                        )
                    }
                    </Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default function Flujos(){
    return (        
        <LstFlujos />        
    )     
}