/* eslint-disable react/prop-types */
import Dropdown from '@mui/joy/Dropdown';
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu"
import {    
    DownReportIcon
    } from "../../utils/icons.jsx";
import { ListItemButton } from '@mui/material';


export default function BandejaMenu ({styles}){
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
        delay: 150
    });

    const ButtonsRequest = () => {
        return(            
            <ContentMenu title={'Bandeja'} styles={styles} className="flex-col h-full">
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')} title='Generar y descargar informe con los registro actuales'>
                        <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                            <DownReportIcon styles='w-10 h-10' />
                            <span className="!pt-2">Descargar reporte</span>
                            <span>de registros</span>
                        </div>
                    </ListItemButton>
                </Dropdown>
            </ContentMenu>
        )
    }

    return (        
        <animated.div style={menuAppear} className={styles}>
            <ButtonsRequest />            
        </animated.div>
    )    
}