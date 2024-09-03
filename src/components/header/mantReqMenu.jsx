/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import ListItemButton from '@mui/joy/ListItemButton';
import { TableIconSave } from "../../utils/icons.jsx";

export default function MantReqMenu ({styles, delay, setAnimationEnd}) {                
    return (
        <>
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
                <div className={styles + ' flex-col h-full relative'}>
                    <ContentMenu title={'Registro'}>                
                        <button form='frmWFRecords' type='submit' className='flex' id='btn_modificar' title='Guardar modificaciones'>
                            <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} title="Guardar modificaciones realizadas">
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <TableIconSave styles='w-10 h-10' />
                                    <span className="!pt-2">Guardar</span>
                                    <span>cambios</span>
                                </div>
                            </ListItemButton>
                        </button>                        
                    </ContentMenu>
                </div>
            </Slide>            
        </> 
    )    
}