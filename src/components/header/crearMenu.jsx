/* eslint-disable react/prop-types */
import MenuButton from '@mui/joy/MenuButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

import ContentMenu from "./contentMenu"
import { flujos } from "../../mocks/flujos.json";
import {     
    FlowIcon, 
    FlowPlusIcon   
    } from "../../utils/icons.jsx";


export default function CrearMenu ({styles, openDialog, setOpenDialog}){
    function  hanldeOnClick(flujo){
        if(flujo?.dialogo==='confirm'){
            setOpenDialog({
                ...openDialog,
                titulo:'Creación de un ' + flujo?.description,
                mensaje:flujo?.mensaje,
                id:'flu-' + flujo.id,                
                frmname:flujo.formname,
                action:flujo.action,
                open:true,
                type:flujo.type
            })
        }
    }

    return (     
        <div className="h-full relative">
            <ContentMenu title={'Crear'} styles={styles} className="flex-col h-full">
                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} title="Crear un nuevo requerimiento">
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                            <FlowPlusIcon styles='w-10 h-10' strokeWidth='2' />                         
                            <span>Crear nuevo</span>
                            <span>requerimiento</span>
                            <KeyboardArrowDownIcon />
                        </div>
                    </MenuButton>
                    <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min">{
                        flujos.filter(fls => fls.id>0).map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`}  key={item.id} onClick={() => hanldeOnClick(item)}>
                                <ListItemDecorator><FlowIcon id={item.id} /></ListItemDecorator>
                                {item.description}                            
                            </MenuItem>
                        )}      
                    </Menu>
                </Dropdown>
            </ContentMenu>
        </div>   
    )    
}