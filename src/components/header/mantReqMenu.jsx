/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { useFilters } from '../../hooks/useFilters.jsx';
import { esES } from '@mui/x-data-grid/locales';
import ContentMenu from "./contentMenu.jsx"
import { TableIconSave } from "../../utils/icons.jsx";

export default function MantReqMenu ({styles, delay, setAnimationEnd}) {   
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
        <ThemeProvider theme={theme}>
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
                    <ContentMenu title={'Registro'}>                
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} form='frmWFRecords' type='submit' id='btn_modificar' title='Guardar modificaciones'>
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                <TableIconSave styles='w-10 h-10' />
                                <span className="!pt-2">Guardar</span>
                                <span>cambios</span>
                            </div>
                        </Button>                        
                    </ContentMenu>
                </div>
            </Slide>            
        </ThemeProvider>
    )    
}