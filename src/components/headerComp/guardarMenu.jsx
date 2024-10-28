/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import ContentMenu from "./contentMenu.jsx"
import { usePreview } from "../../hooks/usePreview.jsx";
import { SaveAsIconBig, SaveAllIconBig } from "../../utils/icons.jsx"

export default function GuardarMenu ({styles, delay, setAnimationEnd}) {
    const { preview } = usePreview()

    return (        
      preview?.selected && 
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
          <div className={styles + 'flex-col h-full relative'}>
              <ContentMenu title={'Guardar en el equipo'}>
                  <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar adj')}>
                          <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                              <SaveAsIconBig styles='h-9 w-9 !mt-2'/>
                              <span className="!pt-2">Guardar</span>
                              <span>como</span>
                          </div>
                  </Button>
                  <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={()=> console.log('guardar todos')}>
                          <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                              <SaveAllIconBig styles='h-10 w-10 !mt-2'/>
                              <span className="!pt-2">Guardar todos</span>
                              <span>los adjuntos</span>
                          </div>
                  </Button>
              </ContentMenu>
          </div>
      </Slide>        
    )
}