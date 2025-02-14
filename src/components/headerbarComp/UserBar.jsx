/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useUserData } from '../../hooks/useUserData.jsx';
import { useAuth } from '../../hooks/useAuth.jsx';
import { DarkModeToggle } from '../../utils/DarkMode.jsx';
import { ListItemButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { IconButton } from "@mui/material";
import { MailIcon } from '../../utils/icons.jsx';
import { useEffect, useState } from 'react';
import { Constants } from "../../utils/const.jsx";
import ConfirmationDialog from '../../utils/ConfirmationDialog.jsx';

export default function UserBar({darkmode, setDarkMode}) {    
    const { userdata : user } = useUserData();
    const { setAuth } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const [userPhoto, setUserPhoto] = useState('/user.png');
    const open = Boolean(anchorEl);
    const { host, fecthParams : params } = Constants()
    const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "data":null, "formAction":null, "frmobj":null, "reset":true, "formid":null})

    useEffect(() => {
        if(user){
            const senderPhoto = window.localStorage.getItem(user?.USR_Usuario)
            if(!senderPhoto){
                fetch(host + '/api/usuario/photo/' + user?.USR_Usuario, params)
                .then(response => {
                    if(response.ok){                
                        return response.blob()
                    }else{
                        return false
                    }
                })
                .then(imgBlob => {                        
                    var reader = new FileReader();            
                    if(imgBlob.size>0){
                        reader.readAsDataURL(imgBlob); 
                        reader.onloadend = function() {                
                            var base64data = reader.result;                    
                            setUserPhoto(base64data)
                        }
                    }else{
                        setUserPhoto('/user.png')
                    }
                })
                .catch((err)=> {
                    console.log(err)
                })
            }else{
                setUserPhoto(senderPhoto)
            }            
        }else
            setUserPhoto('/user.png')
    }, [user])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const ButtonUsrProfile = () => {
        return (
            <>
                <span className={`w-[25px] h-[25px] hover:cursor-pointer imgSender overflow-hidden flex items-center p-0 mx-0 my-1 `}><img src={userPhoto}/></span>
                <span className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold !text-white dark:bg-red-600 bg-red-500 rounded-full top-[2px] right-0"></span>
            </>
        )
    }
    const UserDetail = () => {
        return (
            <div className="flex justify-center items-center gap-5 h-fit p-4">
                    <div className={`w-[100px] h-[100px] imgSender overflow-hidden flex items-center p-0 m-0 `}>
                        <img src={userPhoto} className='w-28 h-auto'/>
                    </div>
                    <div className="flex flex-col h-fit max-w-[260px]">
                        <span className="text-xl font-semibold truncate dark:!text-white !text-[#262626]">{user?.USR_Nombre}</span>
                        <span className="text-xs truncate pb-2 dark:!text-white !text-[#262626]">{user?.USR_Mail}</span>
                        <span className="text-xs truncate !text-sky-600">{user?.PER_Nombre}</span>
                        <span className="text-xs truncate !text-sky-600">{user?.DEP_Descripcion}</span>
                    </div>
                </div>
        )
    }
    const logout = () => {
        fetch(host + '/api/logout', {...params, method: 'POST'})
        .catch(err => console.log(err))
        handleClose();
        setAuth(false)
    }
    const handleCloseSession = () => {
        setOpenDialog({
            ...openDialog,
            open:true,
            /*data,
            formAction,
            frmobj:frmRequest,*/
            titulo:'Cerrar Sesión',
            mensaje:'¿Estas seguro de que deseas cerrar la sesión?',
            /*id,
            formid:'frmWorkFlowv4'*/
          })        
    }
    
    useEffect(() => {
        if(openDialog.option){
            logout()
        }
        handleClose()
    }, [openDialog])
    
    return(
        <>
            <IconButton
                aria-label="more"
                id="profile-button"
                aria-controls={open ? 'profile' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className={`${open ? 'dark:!bg-[#737373] dark:hover:!bg-[#737373] !bg-[#004578] hover:!bg-[#004578]' : 'dark:hover:!bg-[#363636] hover:!bg-[#005a9e]'} !h-full flex items-center z-20 !border-0 !min-h-fit !rounded-none !border-none relative !py-0`} 
                title="Datos del perfil"
            >                
                <ButtonUsrProfile/>                
            </IconButton>            
            <Menu
                id="profile"                    
                MenuListProps={{
                    'aria-labelledby': 'profile-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper:{                        
                        className:'dark:!bg-[#262626] !bg-[#ffffff] dark:!border-[#737373] !border-[#949494] !border !rounded-none !h-auto !py-0 !right-2 !w-[450px] truncate'
                    }
                }}
            >
                <List className='!py-0'>
                    <ListItemButton 
                        sx={{'border':'2px solid','paddingRight': '0px','marginRight':'-5px','marginTop':'10px'}} 
                        className="!border dark:!border-white !border-black !w-fit dark:!text-white !text-black !text-xs dark:hover:!bg-[#363636] hover:!bg-[#d2d2d2] !py-[13px] !px-6 !absolute !-top-[18px] !right-[5px] z-50" 
                        onClick={handleCloseSession}
                    >
                        Cerrar Sesión
                    </ListItemButton>
                    <ListItem>
                        <UserDetail/>
                    </ListItem>                    
                    <ListItem className='dark:!bg-[#363636] dark:!border-[#737373] !bg-[#f3f3f3] !border-t !border-[#d9d9d9] !-mb-2'
                        secondaryAction={
                            <DarkModeToggle darkmode={darkmode} setDarkMode={setDarkMode}/>
                        }
                    >
                        <ListItemIcon className="dark:!text-white !text-black relative cursor-pointer" onClick={()=>console.log("ver mensajes")}>
                            <MailIcon/>
                            <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full top-0 -right-2">{user?.USR_MsgSinLeer ? user.USR_MsgSinLeer : ''}</span>
                        </ListItemIcon>
                        <span className="text-sm dark:!text-white !text-[#262626] pl-2">Ver mensajes</span>
                    </ListItem>
                </List>
            </Menu>{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }
        </>
    )
}