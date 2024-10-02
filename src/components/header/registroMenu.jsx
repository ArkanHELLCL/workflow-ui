/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import { ButtonIcon } from "../../utils/icons.jsx";

const BtsFormulario = ({styles, keygrp, delay, grp, setAnimationEnd}) => {        
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
            <div className={styles + ' flex-col h-full relative'} id={keygrp}>
                <ContentMenu title={grp[0].descripcion} >{
                    grp[0].botones.map(btns =>
                        <button 
                            key={btns.id} 
                            className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start cursor-pointer !pt-1`} title={btns.nombre} id={btns.id} 
                            type={btns.type}
                            form={'frmWFRecords'}>
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                                    <span className="!pt-2">{btns.descripcion[0]}</span>
                                    <span>{btns.descripcion[1]}</span>
                                </div>
                        </button>
                    )}
                </ContentMenu>
            </div>
        </Slide>
    )
}

export default function RegistroMenu ({styles, grupos, delay, setAnimationEnd}) {
    return(
        grupos?.map((grp, index) => 
            (
                <BtsFormulario styles={styles} keygrp={'btnGrp-' + index} delay={200 + (delay)} grp={grp} key={index} setAnimationEnd={setAnimationEnd}/>
            )
        )
    )
}