/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRequest } from "../../hooks/useRequest.jsx";
import { useUserData } from '../../hooks/useUserData.jsx';
import ContentMenu from "./contentMenu"
import { AttachIcon } from "../../utils/icons.jsx";

export default function Adjuntar ({styles, delay, setAnimationEnd}) {
    const { request } = useRequest();
    const { filters } = useFilters();
    const { userdata : user } = useUserData();
    
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
                  <label htmlFor="frmWFInputFile" className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start cursor-pointer`} title='Adjuntar nuevo archivo o documento al requerimiento'>
                      <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap">
                          <AttachIcon styles='w-10 h-10'/>                       
                          <span>Adjuntar</span>
                          <span>documento</span>
                      </div>
                  </label>
                </ContentMenu>
            </div> 
        </Slide>
    )
}