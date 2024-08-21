/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"
import { useRequest } from "../../hooks/useRequest.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";
import { user } from "../../mocks/usuario.json";
import Dropdown from '@mui/joy/Dropdown';
import { 
    ButtonIcon,
    } from "../../utils/icons.jsx";


const BtsFormulario = ({styles, keygrp, delay, grp}) => {    
    const menuAppear = useSpring({
        to:{
            transform:'translateX(0px)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translateX(150px)',
        },
        config: { duration: 150 },
        delay: delay
    });
    return (
        <animated.div key={keygrp} style={menuAppear} styles={styles} className="flex-col h-full" id={keygrp}>
            <ContentMenu title={grp[0].descripcion}>{
                grp[0].botones.map(btns =>
                    <Dropdown key={btns.id}>
                        <label htmlFor={btns.id}  className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start cursor-pointer`} key={btns.id} title={btns.tooltiptext}>
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                                <span className="!pt-2">{btns.descripcion[0]}</span>
                                <span>{btns.descripcion[1]}</span>
                            </div>
                        </label>                
                    </Dropdown>
                )}
            </ContentMenu>
        </animated.div>
    )
}

export default function FormularioMenu ({styles, grupos, openDialog, setOpenDialog}) {
    const { request } = useRequest()
    const { filters } = useFilters()
    return(
        request && parseInt(request?.request?.IdEditor) === parseInt(user.USR_Id) && filters.itemIdSelected === 'be' && 
            grupos?.map((grp, index) => 
                (
                    <BtsFormulario styles={styles} keygrp={'btnGrp-' + index} delay={200 + (index*30)} grp={grp} key={index} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                )
            )
    )
}