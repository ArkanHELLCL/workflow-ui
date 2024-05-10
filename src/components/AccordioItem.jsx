/* eslint-disable react/prop-types */
import { memo, useMemo, useState, Suspense } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Icon } from "./icons.jsx";
import Requerimiento from './Requerimiento.jsx'
import Loading from './Loading.jsx';

export const AccordionItem = memo(function AccordionItem({ item, showDia, defaultTheme, reqResult }) {
    const req = useMemo(() => reqResult(item), [item, reqResult])
    const [open, setOpen] = useState(true)

    const handleToggleAccordion = () => {
        setOpen(!open)
    }
    
    if (req.length === 0) {
      return null
    }    
    return (        
        <Accordion open={open} icon={<Icon open={open} pos="absolute top-[8px] left-2" />} className="z-0">
            <AccordionHeader 
                onClick={handleToggleAccordion} 
                className={`${defaultTheme.txtc + ' ' + defaultTheme.bgct} ' text-[.7rem] font-bold px-7 truncate dark:bg-[#444444] bg-[#f0f0f0] py-1 hover:dark:bg-[#666666] hover:bg-[#e6f2fa] overflow-hidden`}>
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + req.length + ')'}
            </AccordionHeader>
            <AccordionBody className="py-0">
                {
                    <Suspense fallback={<Loading />}>
                        <Requerimiento item={req} showDia={showDia} />
                    </Suspense>
                }
            </AccordionBody>
        </Accordion>         
    )
})