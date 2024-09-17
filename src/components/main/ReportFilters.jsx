/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { esES } from '@mui/x-date-pickers/locales';
import Slide from '@mui/material/Slide';
import { useFilters } from '../../hooks/useFilters';
import { useMemo } from 'react';
import dayjs from 'dayjs'; 


export default function ReportFilters({frmRecord, name, isRequired, label, errorMessage, className}) {
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
    const nameDesde = name + 'Desde'
    const nameHasta = name + 'Hasta'
    const errorMessageDesde = errorMessage + 'desde'
    const errorMessageHasta = errorMessage + 'hasta'
    const hoy = dayjs(new Date())
    
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs} 
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
                adapterLocale="es"
                >
                <div className='flex gap-0 dark:border-[#353535] border border-t-0 border-l-0 border-r-0'>
                    <div className='grid'>
                      <Controller
                        control={frmRecord.control}
                        name={nameDesde}
                        rules={isRequired ? {required : errorMessageDesde} : {required : false}}
                        //value={dayjs(new Date())}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <FormControl                  
                                size='sm'
                                className={className}>                                
                                <Slide in={true} timeout={500}>
                                  <StaticDatePicker                                      
                                      localeText={{ toolbarTitle: label + "Desde:" }}
                                      slotProps={{
                                          actionBar: {
                                              actions: ['today'],
                                          },
                                      }}                                      
                                      onBlur={onBlur}                                      
                                      /*onChange={(date) =>{
                                        onChange(date?.$d.toLocaleDateString("es-CL"));
                                      }}
                                      value={value?.$d.toLocaleDateString("es-CL") || ''}*/
                                      onChange={onChange}
                                      value={value || hoy}
                                  />
                                </Slide>
                                <FormHelperText className="!text-red-600">
                                  {frmRecord.formState.errors[nameDesde]?.message}
                              </FormHelperText>   
                            </FormControl>
                        )}
                      />
                    </div>
                    <div className='grid'>
                    <Controller
                        control={frmRecord.control}
                        name={nameHasta}
                        rules={isRequired ? {required : errorMessageHasta} : {required : false}}                        
                        render={({ field: { onBlur, onChange, value } }) => (
                            <FormControl                  
                                size='sm'
                                className={className}>                                
                                <Slide in={true} timeout={700}>
                                  <StaticDatePicker                                      
                                      localeText={{ toolbarTitle: label + "Hasta:" }}
                                      slotProps={{
                                          actionBar: {
                                              actions: ['today'],
                                          },
                                      }}                                      
                                      onBlur={onBlur}                                      
                                      /*onChange={(date) => {                                        
                                        onChange(date?.$d.toLocaleDateString("es-CL"));
                                      }}*/
                                      onChange={onChange}
                                      value={value || hoy}
                                  />
                                </Slide>
                                <FormHelperText className="!text-red-600">
                                  {frmRecord.formState.errors[nameHasta]?.message}
                              </FormHelperText>   
                            </FormControl>
                        )}
                      />
                    </div>
                </div>                              
            </LocalizationProvider>
        </ThemeProvider>
    )
}