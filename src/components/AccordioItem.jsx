/* eslint-disable react/prop-types */
import { memo, useState, Suspense } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
import Requerimiento from './Requerimiento.jsx'
import Loading from './Loading.jsx';
import { Constants } from "../constants/const.jsx";      

export const AccordionItem = memo(function AccordionItem({ item, showDia }) {
    const { dias } = Constants()
    const [open, setOpen] = useState(true)
    const handleToggleAccordion = () => {
        setOpen(!open)
    }
    
    if (item.requerimientos?.length === 0) {
      return null
    }    

    const DRE_FechaEdit = new Date(item.requerimientos[0].DRE_FechaEdit)
    const dia = DRE_FechaEdit.getDay() - 1
    return (        
        <Accordion open={open} icon={<Icon open={open} pos="absolute top-[8px] left-2" />} className="z-0">
            <AccordionHeader 
                onClick={handleToggleAccordion} 
                className={`${'dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] dark:bg-stone-600 bg-stone-300'} ' text-[.7rem] font-bold px-7 truncate dark:bg-[#444444] bg-[#f0f0f0] py-1 hover:dark:bg-[#666666] hover:bg-[#e6f2fa] overflow-hidden`}>
                    {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + item.requerimientos?.length + ')' : dias[dia].charAt(0).toUpperCase() + dias[dia].slice(1) + ' (' + item.requerimientos?.length + ')'}
            </AccordionHeader>
            <AccordionBody className="py-0">
                {
                    <Suspense fallback={<Loading />}>
                        <Requerimiento item={item.requerimientos} showDia={showDia} />
                    </Suspense>
                }
            </AccordionBody>
        </Accordion>         
    )
})