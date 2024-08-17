/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"
import { useRequest } from "../../hooks/useRequest.jsx";
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { 
    SaveAsIconBig,
    SaveAllIconBig
    } from "../../utils/icons.jsx";

function AnimatedSaveMenu({styles}) {
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

    return(
        <animated.div style={menuAppear} styles={styles} className="flex-col h-full">
            <ContentMenu title={'Guardar en el equipo'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar adj')}>
                        <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                            <SaveAsIconBig styles='h-8 w-8 !mt-2'/>
                            <span className="!pt-2">Guardar</span>
                            <span>como</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar todos')}>
                        <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                            <SaveAllIconBig styles='h-8 w-8 !mt-2'/>
                            <span className="!pt-2">Guardar todos los</span>
                            <span>datos adjuntos</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
            </ContentMenu>
        </animated.div>
    )
}

export default function GuardarMenu ({styles}) {
    const { request } = useRequest()    
    return (
        request?.selected && 
            <AnimatedSaveMenu styles={styles}/>
    )    
}