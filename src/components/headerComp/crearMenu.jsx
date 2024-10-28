/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentMenu from "./contentMenu"
import { flujos } from "../../mocks/flujos.json";
import { FlowIcon, FlowPlusIcon } from "../../utils/icons.jsx";
import { useState } from 'react';

export default function CrearMenu ({styles, delay, setAnimationEnd}) {    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    function  hanldeOnClick(flujo){
        console.log('Click on ' + flujo.description)
        handleClose();
    }

    return (        
      <Slide in={true} direction='left' timeout={delay} mountOnEnter unmountOnExit addEndListener={(node, done) =>
          node.addEventListener(
          'transitionend',
          (e) => {                
              setAnimationEnd(true);
              done(e);
          },
          false
          )
      }
      onEnter={() =>  setAnimationEnd(false)}>   
          <div className="h-full relative">
              <ContentMenu title={'Crear'} styles={styles} className="flex-col h-full">
                <Button
                    id="create-menu"
                    aria-controls={open ? 'create-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} title="Crear un nuevo requerimiento"
                >
                    <div className="flex flex-col items-center relative">
                        <FlowPlusIcon styles='w-10 h-10' strokeWidth='2' />                         
                        <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>Crear nuevo</span>
                        <span className='!leading-tight !text-xs !text-nowrap !font-thin !capitalize'>requerimiento</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'create-button',
                    }}                        
                >{
                    flujos.filter(fls => fls.id>0).map((item) =>
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !py-0`}  key={item.id} onClick={() => hanldeOnClick(item)}>
                            <ListItemIcon><FlowIcon id={item.id} /></ListItemIcon>
                            <ListItemText>{item.description}</ListItemText>
                        </MenuItem>
                    )}
                </Menu>
              </ContentMenu>
          </div>
      </Slide>
    )    
}