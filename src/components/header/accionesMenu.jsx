/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { useFilters } from '../../hooks/useFilters.jsx';
import { esES } from '@mui/x-data-grid/locales';
import { usePreview } from "../../hooks/usePreview.jsx";
import ContentMenu from "./contentMenu"
import { OpenFolderIcon, PrinterIcon, DeleteFileIcon } from "../../utils/icons.jsx";

export default function Acciones ({styles, delay, setAnimationEnd}) {
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
                <div className={styles + ' flex-col h-full relative'}>
                    <ContentMenu title={'Acciones'}>
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={()=> console.log('abrir doc')} title='Abrir documento adjunto'>
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <OpenFolderIcon styles='h-11 w-11'/>
                                    <span>Abrir</span>
                                </div>
                                            
                        </Button>
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={()=> console.log('imprimir doc')} title='Enviar adjunto a la impresora'>
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <PrinterIcon styles='h-12 w-12' strokeWidth="2"/>
                                    <span>Impresión</span>
                                    <span>rápida</span>
                                </div>
                        </Button>
                        <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-1`} onClick={()=> console.log('eliminar adj')} title='Eliminar adjunto del listado'>
                                <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap h-full">
                                    <DeleteFileIcon styles='text-red-500 h-10 w-10' strokeWidth={1} />
                                    <span>Quitar archivo</span>
                                    <span>adjunto</span>
                                </div>
                        </Button>
                    </ContentMenu>
                </div>
            </Slide>
        }</ThemeProvider>
    )    
}