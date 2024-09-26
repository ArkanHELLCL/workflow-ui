import { createTheme } from '@mui/material/styles';
import { esES as dataGridEsES } from '@mui/x-data-grid/locales';
import { esES as coreEsES } from '@mui/material/locale';
import { esES } from '@mui/x-date-pickers/locales';
export const theme = (darkMode) =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
      /*colorSchemes: {
        dark: true,
      },*/
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
        MuiList: {
          styleOverrides: {
            root: {
              //paddingBottom: '0px',
              //marginBottom: '10px',
              //minHeight: '170px'
            }              
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              //padding: "0px",
              //minWidth: "0px",
              borderRadius: "0px",
            }
          }
        },
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
              color: darkMode ? '#bbdefb' : '#3883c1',
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
                color: darkMode ? '#bbdefb' : '#3883c1',
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
                color: darkMode ? '#bbdefb' : '#3883c1',
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
                    fontSize: '.75rem',
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
        },
        MuiSnackbar: {            
          
            
              variants: [
                {
                  props: { variant: 'error' },
                  style: {
                    '& .MuiSnackbarContent-root': {      
                      backgroundColor: darkMode ? '#262626' : '#ffffff',
                      border: '1px solid rgb(220 38 38)',
                      color: 'inherit'
                    },
                  }
                }
              ]                  
            
          
        }
      }
    },
  dataGridEsES,
  coreEsES,
  esES);