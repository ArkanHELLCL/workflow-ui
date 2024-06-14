/* eslint-disable react/prop-types */
import { user } from '../../mocks/usuario.json'
import { DarkModeToggle } from '../../utils/DarkMode.jsx';

import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import { ListItem } from '@mui/joy';
import { Divider, ListItemButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/joy/IconButton';

export default function UserBar({open, setOpen}) {
    const ButtonUsrProfile = () => {
        return (
            <>
                <span><img src={user.USR_Photo} className={`rounded-full w-[25px] h-[25px] hover:cursor-pointer`}/></span>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold !text-white dark:bg-red-600 bg-red-500 rounded-full top-[1px] right-1"></span>
            </>
        )
    }

    const UserDetail = () => {
        return (
            <div className="flex justify-center items-center gap-5 h-fit p-4">
                    <div className={`rounded-full w-[100px] h-[100px]`}>
                        <img src={user.USR_Photo} className={`rounded-full h-full w-full`} />
                    </div>
                    <div className="flex flex-col h-fit max-w-[260px]">
                        <span className="text-xl font-semibold truncate dark:!text-white !text-[#262626]">{user.USR_Nombre}</span>
                        <span className="text-xs truncate pb-2 dark:!text-white !text-[#262626]">{user.USR_Mail}</span>
                        <span className="text-xs truncate !text-sky-600">{user.PER_Nombre}</span>
                        <span className="text-xs truncate !text-sky-600">{user.DEP_Descripcion}</span>
                    </div>
                </div>
        )
    }   
    
    return(
        <Dropdown>
            <MenuButton 
                className={`${open ? 'dark:!bg-[#737373] dark:hover:!bg-[#737373] !bg-[#004578] hover:!bg-[#004578]' : 'dark:hover:!bg-[#363636] hover:!bg-[#005a9e]'} p-3 !h-full !absolute right-5 flex items-center z-20 !border-0 !min-h-fit !rounded-none !border-none`} 
                title="Datos del perfil"
                slots={{ root: IconButton }}
                onClick={()=>setOpen(!open)}>
                    <ButtonUsrProfile/>
            </MenuButton>
            <Menu className='dark:!bg-[#262626] !bg-[#ffffff] dark:!border-[#737373] !border-[#949494] !border !rounded-none !h-auto !py-0' open={open}>                
                <ListItem 
                    endAction={
                        <ListItemButton sx={{'border':'2px solid','paddingRight': '0px','marginRight':'-5px','marginTop':'10px'}} className="!border-[2px] !border-t-2 dark:!border-white !border-black !w-fit dark:!text-white !text-black !text-xs dark:hover:!bg-[#363636] hover:!bg-[#d2d2d2] !py-[13px] !px-6" onClick={()=>console.log("cerrar sesión")}>
                            Cerrar Sesión
                        </ListItemButton>}>                    
                </ListItem>
                <UserDetail />
                <Divider orientation="horizontal" />
                <ListItem 
                    className="!px-16 !py-6 dark:!bg-[#363636] dark:!border-[#737373] !bg-[#f3f3f3] !border-t !border-[#d9d9d9] dark:!text-white !text-black" 
                    startAction={
                        <ListItemButton className="!w-fit dark:!text-white !text-black !text-xs !pl-3 !pr-0 !px-0 !font-thin" 
                            onClick={()=>console.log("ver mensajes")}>
                                <MailOutlineIcon className="!w-10 !h-10" />
                                <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full top-0 -right-2">{user.USR_MsgSinLeer}</span>
                        </ListItemButton>}
                    endAction={
                        <DarkModeToggle />
                    }>
                    Ver mis mensajes privados
                </ListItem>
            </Menu>
        </Dropdown>        
    )
}