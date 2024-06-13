/* eslint-disable react/prop-types */
import { useId } from 'react';
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';

import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu"
import {     
    AttachIcon
    } from "../../utils/icons.jsx";

export default function Adjuntar ({styles}){
    //const { register } = useFormContext()
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 250
    });

    /*const handleAdjunto = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const input = document.getElementById('adjuntos-input')
        input.click()
        //console.log('adjuntar')
    }*/

    const idInput = useId()
    const handleClickAdjunto = () =>{
        const  elemento = document.getElementById(idInput);
        elemento.click()
    }

    return (
        <>
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Adjuntar'} styles={styles}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={handleClickAdjunto}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                            <AttachIcon styles='w-10 h-10'/>                       
                            <span>Adjuntar</span>
                            <span>documento</span>
                        </div>
                    </ListItemButton>
                </Dropdown>
            </ContentMenu>
        </animated.div>
        <input  id={idInput} 
            type="file"
            multiple                        
            className='hidden'
            accept="image/png,image/x-png,image/jpg,image/jpeg,image/gif,application/x-msmediaview,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.ms-powerpoint"  />
        </>
    )
}