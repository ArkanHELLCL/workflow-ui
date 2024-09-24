/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { usePreview } from "./hooks/usePreview.jsx";
import { useAttach } from "./hooks/useAttach.jsx";
import { useReports } from "./hooks/useReports.jsx";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'
import treeMmenu  from "./mocks/treeMenu.json";
import Menu from './components/Menu.jsx'
import { useForm } from "react-hook-form"
import List from "./components/list.jsx";
import DataForm from "./components/dataform.jsx";
import { useSnackbar } from 'notistack';
import HeaderBar from "./components/headerBar.jsx";
import ConfirmationDialog from './utils/ConfirmationDialog.jsx';
import ConfirmationMessage from './utils/confirmationMessage.jsx';
import { data} from './mocks/datadiasusuario.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES as dataGridEsES } from '@mui/x-data-grid/locales';
import { esES as coreEsES } from '@mui/material/locale';
import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/es';

const handleNotDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "none";
  return false;
}

function App() {  
  const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;  
  const [darkMode, setDarkMode] = useState(darkModeStorage)
  
  const theme = () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
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

  const frmRequest = useForm({
    mode: "onBlur",
    //mode: "all"
  })
  const frmRecord = useForm({
    //mode: "all"
    mode : "onBlur"
  })
  const frmReport = useForm({
    //mode: "all"
    mode : "onBlur"
  })

  const { setPreview } = usePreview()
  const { setAdjuntos } = useAttach()
  const { report, setReport } = useReports()
  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "data":null, "formAction":null, "frmobj":null, "reset":true})
  const [openSearch, setOpenSearch] = useState(false);
  const formReqRef = useRef(null)
  const formRegRef = useRef(null)
  const formRepRef = useRef(null)
  const { enqueueSnackbar } = useSnackbar();
  const [filesList, setFilesList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {    
    if(!frmRequest.formState.isSubmitSuccessful && frmRequest.formState.submitCount > 0 && !frmRequest.formState.isValidating){
      enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmRequest.formState.submitCount])

  useEffect(() => {
    if(!frmRecord.formState.isSubmitSuccessful && frmRecord.formState.submitCount > 0 && !frmRecord.formState.isValidating){
      enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmRecord.formState.submitCount])

  useEffect(() => {
    if(!frmReport.formState.isSubmitSuccessful && frmReport.formState.submitCount > 0 && !frmReport.formState.isValidating){
      enqueueSnackbar('Debes corregir los errores antes de proceder!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmReport.formState.submitCount])

  useEffect(() => {
    window.addEventListener('storage', (event) => {
        if (event.key === 'DarkMode') {            
            event.newValue ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
        }
    })    
    darkModeStorage ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
    //setMode(darkModeStorage ? 'dark' : 'light')
  },[])

  const onSubmitRequest = (data, event) => {
    const id = event.nativeEvent.submitter.id
    const titulo = event.nativeEvent.submitter.title
    const formAction = event.nativeEvent.submitter.formAction
    
    setOpenDialog({
      ...openDialog,
      open:true,
      data,
      formAction,
      frmobj:frmRequest,
      titulo,
      mensaje:ConfirmationMessage(id),
      id
    })
  };

  const onSubmitRecord = (data, event) => {
    const id = event.nativeEvent.submitter.id
    const titulo = event.nativeEvent.submitter.title
    const formAction = event.nativeEvent.submitter.formAction
        
    setOpenDialog({
      ...openDialog,
      open:true,
      data,
      formAction,
      frmobj:frmRecord,
      titulo,
      mensaje:ConfirmationMessage(id),
      id
    })
  };

  const onSubmitReport = (data, event) => {
    const id = event.nativeEvent.submitter.id
    const titulo = event.nativeEvent.submitter.title
    const formAction = event.nativeEvent.submitter.formAction
        
    setOpenDialog({
      ...openDialog,
      open:true,
      data,
      formAction,
      frmobj:frmReport,
      titulo,
      mensaje:ConfirmationMessage(id),
      id,
      reset:false
    })
  };

  useEffect(() => {
    if(openDialog.option){
      console.log('formcomponent',openDialog.data, openDialog.formAction);      
      setLoading(true)      
      setReport(data)
      setLoading(false)
      enqueueSnackbar('Los datos han sido grabados exitosamente!', { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
      openDialog.frmobj.clearErrors()
      if(openDialog.reset)
        openDialog.frmobj.reset()
    
      setAdjuntos([])
      setFilesList([])
      setPreview({
          state:false,
          obj:null,
          selected:null
      })
      setOpenDialog({
        ...openDialog,
        option: false,
      })
    }
  },[openDialog.option])

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
          dateAdapter={AdapterDayjs} 
          localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
          adapterLocale="es"
          >
        <main className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
          <HeaderBar openSearch={openSearch} setOpenSearch={setOpenSearch} onDragOver={handleNotDragOver} darkmode={darkMode} setDarkMode={setDarkMode}/>      
          <SideBar />            
          <Header />      
          <Menu menu={treeMmenu} frmRecord={frmRecord} frmRequest={frmRequest}/>      
          <List frmRequest={frmRequest} frmRecord={frmRecord} frmReport={frmReport}/>      
          <DataForm frmRequest={frmRequest} frmRecord={frmRecord} frmReport={frmReport} filesList={filesList} setFilesList={setFilesList} dataReport={report} loading={loading}/>      
          <Footer />{
          openDialog?.open &&
            <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
          }
          <form 
            id={'frmWorkFlowv4'} 
            noValidate 
            ref={formReqRef}  
            onSubmit={frmRequest.handleSubmit(onSubmitRequest)}>
          </form>
          <form 
            id={'frmWFRecords'} 
            noValidate 
            ref={formRegRef}  
            onSubmit={frmRecord.handleSubmit(onSubmitRecord)}>
          </form>
          <form 
            id={'frmWFReports'} 
            noValidate 
            ref={formRepRef}  
            onSubmit={frmReport.handleSubmit(onSubmitReport)}>
          </form>
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App;