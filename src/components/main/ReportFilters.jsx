import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { esES } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/es';
import { useFilters } from '../../hooks/useFilters';
import { useMemo } from 'react';

export default function ReportFilters() {
    const { filters } = useFilters()
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
                components: {
                    MuiPickersLayout: {
                        styleOverrides: {
                          root: {                            
                            minWidth: '220px !important',
                            maxWidth: '220px !important',
                            backgroundColor: 'transparent !important',
                          }
                        }
                    },
                    MuiPickersDay: {
                      styleOverrides: {
                        root: {
                          color: prefersDarkMode ? '#bbdefb' : '#3883c1',
                          borderRadius: '0px',
                          borderWidth: '0px',
                          border: '0px solid',
                          backgroundColor: 'transparent',
                          width: '25px',
                          height: '25px',
                          fontFamily: 'inherit'
                        }
                      }
                    },
                    MuiDayCalendar: {
                        styleOverrides: {
                          root: {
                            color: prefersDarkMode ? '#bbdefb' : 'black',
                            borderRadius: '0px',
                            borderWidth: '0px',
                            borderColor: '#2196f3',
                            border: '0px solid',
                            backgroundColor: 'transparent',
                          }
                        }
                    },
                    MuiDateCalendar: {
                        styleOverrides: {
                          root: {
                            backgroundColor: 'transparent',
                            width: '220px',
                            height: '230px',
                          }
                        }
                    },
                    MuiPickersToolbar: {
                        styleOverrides: {
                          root: {
                            color: prefersDarkMode ? '#bbdefb' : '#80c2f9',
                            borderRadius: '0px',
                            borderWidth: '0px',
                            border: '0px solid',
                            backgroundColor: 'transparent',
                            padding: '5px 0px 10px 20px',
                          }                          
                        }
                    },
                    MuiTypography: {
                        styleOverrides: {
                            overline: {                                
                                lineHeight: '.75rem',
                                fontSize: '.65rem',
                                color: '#bbdefb',
                                fontFamily: 'inherit'
                            },
                            h4: {
                                fontSize: '1.2rem',
                                fontFamily: 'inherit'
                            },
                            caption:{
                                width: '25px !important',
                                height: '25px !important',
                                fontFamily: 'inherit'
                            }
                        }
                    },
                    MuiPickersCalendarHeader: {
                        styleOverrides: {
                          root: {
                            marginTop: '0px',
                            paddingLeft: '20px',
                            paddingRight: '0px',
                          },
                          label: {
                            fontSize: '0.9rem',
                            fontFamily: 'inherit'                            
                          }
                        }
                    },
                    MuiButtonBase: {
                        styleOverrides: {
                          root: {                            
                            fontFamily: 'inherit',
                            fontWeight: 100
                          }
                        }
                    }
                }
            },
            esES),
        [prefersDarkMode],
    );
    
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs} 
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
                adapterLocale="es"
                >
                <div className='flex gap-0 dark:border-[#353535] border border-t-0 border-l-0 border-r-0'>
                    <div className='grid'>
                        
                        <StaticDatePicker
                            localeText={{ toolbarTitle: "Seleccionar Fecha Desde:" }}
                            slotProps={{
                                actionBar: {
                                    actions: ['today'],
                                },
                            }}
                        />
                    </div>
                    <div className='grid'>
                        
                        <StaticDatePicker
                            localeText={{ toolbarTitle: "Seleccionar Fecha Hasta:" }}
                            slotProps={{
                                actionBar: {
                                    actions: ['today'],
                                },
                            }}
                        />
                    </div>
                </div>
                
                
            </LocalizationProvider>
        </ThemeProvider>
    )
}