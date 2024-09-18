/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { useFilters } from '../../hooks/useFilters.jsx';
import { esES } from '@mui/x-data-grid/locales';
import ContentMenu from "./contentMenu.jsx"
import { usePreview } from "../../hooks/usePreview.jsx";
import { SaveAsIconBig, SaveAllIconBig } from "../../utils/icons.jsx"

export default function GuardarMenu ({styles, delay, setAnimationEnd}) {
    const { preview } = usePreview()
    const { filters } = useFilters(); 
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
          typography: {
            allVariants: {
              fontFamily: "Segoe UI Web (West European) ,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
              textTransform: 'none',
              lineHeight: "1.5rem",
              fontWeight: 400,
              fontSize: '0.75rem'
            },
          },
          components: {            
            MuiMenu: {
              styleOverrides: {
                paper: {
                  //backgroundColor: prefersDarkMode ? '#333333' : '#ffffff',
                  color: prefersDarkMode ? '#c5c5c5' : '#333333',
                  //boxShadow: prefersDarkMode ? '0 0 10px 0px #000000' : '0 0 10px 0px #000000',
                  borderRadius: '0px',
                  border: prefersDarkMode ? '1px solid #8a8886' : '1px solid #e1dfdd',
                },
              },
            },
          }
        },
      esES),
      [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>{
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
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={()=> console.log('guardar adj')}>
                                <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                                    <SaveAsIconBig styles='h-9 w-9 !mt-2'/>
                                    <span className="!pt-2">Guardar</span>
                                    <span>como</span>
                                </div>
                        </Button>
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={()=> console.log('guardar todos')}>
                                <div className="flex flex-col leading-tight text-xs items-center text-nowrap h-full">
                                    <SaveAllIconBig styles='h-10 w-10 !mt-2'/>
                                    <span className="!pt-2">Guardar todos</span>
                                    <span>los adjuntos</span>
                                </div>
                        </Button>
                    </ContentMenu>
                </div>
            </Slide>
        }</ThemeProvider>
    )    
}