/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"
import { useRequest } from "../../hooks/useRequest.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";
import { user } from "../../mocks/usuario.json";
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { 
    ButtonIcon,
    } from "../../utils/icons.jsx";

import { useFormContext } from 'react-hook-form';
import { useSnackbar } from 'notistack';    

const BtsFormulario = ({styles, keygrp, delay, grp, openDialog, setOpenDialog}) => {
    //const { trigger, formState: { errors } } = useFormContext()
    const { trigger } = useFormContext();    

    async function hanldeOnClick(event,btns){
        event.preventDefault()
        const isValid = await trigger()
        if(isValid){
            if(btns?.dialogo==='confirm'){
                setOpenDialog({
                    ...openDialog,
                    titulo:btns?.titulo,
                    mensaje:btns?.mensaje,
                    id:btns.id,
                    open:true,
                    frmname:btns.frmname,
                    action:btns.action,
                    type:btns.type
                })
            }
        }else{
            enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error" })
        }
    }

    const { enqueueSnackbar } = useSnackbar();

    const menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: delay
    });
    return (
        <animated.div key={keygrp} style={menuAppear} styles={styles} className="flex-col h-full" id={keygrp}>
            <ContentMenu title={grp[0].descripcion}>{
                grp[0].botones.map(btns =>
                    <Dropdown key={btns.id}>
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={() => hanldeOnClick(event, btns)} key={btns.id} title={btns.tooltiptext}>
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                                <span className="!pt-2">{btns.descripcion[0]}</span>
                                <span>{btns.descripcion[1]}</span>
                            </div>
                        </MenuButton>                
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