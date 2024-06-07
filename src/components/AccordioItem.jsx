/* eslint-disable react/prop-types */
import { memo, Suspense } from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { Icon } from "./icons.jsx";
import Requerimiento from './Requerimiento.jsx'
import Loading from './Loading.jsx';
import { Constants } from "../constants/const.jsx";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    //borderBottom: `1px solid ${theme.palette.divider}`,
    /*borderBottom: `1px solid inherit`,
    '&:not(:last-child)': {
      borderTop: 0,
    },
    '&::before': {
      display: 'none',
    },*/
}));
  
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<Icon />}
      {...props}
    />
  ))(({ theme }) => ({
    borderBottom: `1px solid transparent`,
    '&:not(:last-child)': {
      borderTop: 0,
    },
    '&::before': {
      display: 'none',
    },
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(90deg)',
      color:'inherit'
    },
    '& .MuiAccordionSummary-content': {
        margin:'0px',
        marginLeft: theme.spacing(1),      
    },    
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    backgroundColor:'transparent',
    '& .Mui-expanded' : {
        backgroundColor:'transparent'
    }
}));

export const AccordionItem = memo(function AccordionItem({ item }) {
    const { dias } = Constants()    
    
    if (item.requerimientos?.length === 0) {
      return null
    }    

    const DRE_FechaEdit = new Date(item.requerimientos[0].DRE_FechaEdit)
    const dia = DRE_FechaEdit.getDay() - 1
    return (        
        <Accordion defaultExpanded className="z-0 !bg-transparent" slotProps={{ transition: { timeout: 350 } }}>
            <AccordionSummary                 
                className='dark:!text-stone-100 !text-stone-500 dark:!border-[#353535] !border-[#d4d4d4] !text-[.7rem] !font-bold truncate dark:!bg-[#444444] !bg-[#f0f0f0] !py-1 hover:!dark:bg-[#666666] hover:!bg-[#e6f2fa] dark:hover:!bg-[#505050] overflow-hidden !px-2 !h-7 !min-h-7 !m-0 !border-b'
                aria-controls={item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) + 'Content' : dias[dia].charAt(0).toUpperCase() + 'Content'}
                id={item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) + 'Header' : dias[dia].charAt(0).toUpperCase() + 'Header'}
                >
                    {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) + ' (' + item.requerimientos?.length + ')' : dias[dia].charAt(0).toUpperCase() + dias[dia].slice(1) + ' (' + item.requerimientos?.length + ')'}
            </AccordionSummary>
            <AccordionDetails className="py-0">
                {
                    <Suspense fallback={<Loading />}>
                        <Requerimiento item={item.requerimientos} showDia={item.showdia} />
                    </Suspense>
                }
            </AccordionDetails>
        </Accordion>         
    )
})