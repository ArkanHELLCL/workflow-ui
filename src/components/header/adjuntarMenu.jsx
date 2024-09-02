/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { useRequest } from "../../hooks/useRequest.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";
import ContentMenu from "./contentMenu"
import { AttachIcon } from "../../utils/icons.jsx";
import { user } from "../../mocks/usuario.json";

export default function Adjuntar ({styles, delay, setAnimationEnd}) {
    const { request } = useRequest()
    const { filters } = useFilters()
    
    return (
        request && parseInt(request?.request?.IdEditor) === parseInt(user.USR_Id) && filters.itemIdSelected === 'be' &&
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
                <ContentMenu title={'Adjuntar'} styles={styles}>
                    <Dropdown>
                        <label htmlFor="frmWFInputFile" className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe]  !py-0 !my-0 !items-start !pt-1`}>
                            <ListItemButton className='!bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none' title='Adjuntar nuevo archivo o documento al requerimiento'>
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                                    <AttachIcon styles='w-10 h-10'/>                       
                                    <span>Adjuntar</span>
                                    <span>documento</span>
                                </div>
                            </ListItemButton>
                        </label>
                    </Dropdown>
                </ContentMenu>
            </div> 
        </Slide>
    )
}