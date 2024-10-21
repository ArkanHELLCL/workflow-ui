/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import { GenReportIcon, DownReportIcon } from "../../utils/icons.jsx";

export default function Informes ({styles, delay, setAnimationEnd}) {    
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
          <div className={styles + ' flex-col h-full relative'}>
              <ContentMenu title={'Informe del sistema'}>
                  <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('generar inf')} title="Generar informe seleccionado">
                      <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                          <GenReportIcon styles='w-10 h-10'/>
                          <span className="!pt-2">Generar</span>
                          <span>informe</span>
                      </div>
                  </Button>
                  <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('descargar inf')} title="Decargar informe generado">
                      <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                          <DownReportIcon styles='w-10 h-10' />
                          <span className="!pt-2">Descargar infrome</span>
                          <span>resultado</span>
                      </div>                           
                  </Button>  
              </ContentMenu>
          </div>
      </Slide>        
    )    
}