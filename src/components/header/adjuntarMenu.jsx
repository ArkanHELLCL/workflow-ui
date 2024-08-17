/* eslint-disable react/prop-types */
//import { useId } from 'react';
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { useRequest } from "../../hooks/useRequest.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu"
import { AttachIcon } from "../../utils/icons.jsx";
import { user } from "../../mocks/usuario.json";

function AnimatedAttachMenu({styles}) {
    const  menuAppear = useSpring({        
        to:{
            transform:'translateX(0px)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translateX(150px)',
        },
        config: { duration: 150 },
        delay: 250
    });
    return (
        <animated.div style={menuAppear} styles={styles} className="flex-col h-full">
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
        </animated.div> 
    )
}

export default function Adjuntar ({styles}){
    const { request } = useRequest()
    const { filters } = useFilters()
    
    /*const handleAdjunto = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const input = document.getElementById('adjuntos-input')
        input.click()
        //console.log('adjuntar')
    }*/

    //const idInput = useId()
    /*const handleClickAdjunto = () =>{
        const  elemento = document.getElementById('frmWFInputFile');
        elemento.click()
    }*/
    return (
        request && parseInt(request?.request?.IdEditor) === parseInt(user.USR_Id) && filters.itemIdSelected === 'be' &&
            <AnimatedAttachMenu styles={styles}/>
    )
}