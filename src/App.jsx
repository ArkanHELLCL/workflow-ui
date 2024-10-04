/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import io from 'socket.io-client';
import { fetchData } from "./utils/fectData.js";
import { Suspense, useEffect, useRef, useState } from "react";
import { usePreview } from "./hooks/usePreview.jsx";
import { useAttach } from "./hooks/useAttach.jsx";
import { useReports } from "./hooks/useReports.jsx";
import { useMantainer } from "./hooks/useMantainer.jsx";
import { useUserData } from "./hooks/useUserData.jsx";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'
import treeMmenu  from "./mocks/treeMenu.json";
import Menu from './components/Menu.jsx'
import { useForm } from "react-hook-form"
import List from "./components/list.jsx";
import DataForm from "./components/dataform.jsx";
import HeaderBar from "./components/headerBar.jsx";
import ConfirmationDialog from './utils/ConfirmationDialog.jsx';
import ConfirmationMessage from './utils/confirmationMessage.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { theme } from './utils/CustomTheme.jsx';
import { esES } from '@mui/x-date-pickers/locales';
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'
import { ToastMessages } from "./utils/toastMessages.jsx";
import { data } from './mocks/datadiasusuario.json'
import Loading from "./utils/Loading.jsx";

//socket.io
const socket = io('http://localhost:3100');
const param = {usrCod:'lcastillo', usrClave:'123456'}
const apiData = fetchData('http://localhost:3100/api/login', {
    method: 'POST', 
    headers: {Accept: 'application/json','Content-Type': 'application/json'}, 
    body: JSON.stringify(param),
    credentials: 'include'
})

const handleNotDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "none";
  return false;
}

function App() {  
  const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;  
  const [darkMode, setDarkMode] = useState(darkModeStorage)
  const { setMantainer } = useMantainer()
  const { setPreview } = usePreview()
  const { setAdjuntos } = useAttach()
  const { report, setReport } = useReports()
  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "data":null, "formAction":null, "frmobj":null, "reset":true, "formid":null})
  const [openSearch, setOpenSearch] = useState(false);
  const formReqRef = useRef(null)
  const formRegRef = useRef(null)
  const formRepRef = useRef(null)  
  const [filesList, setFilesList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)  
  const {setUserdata} = useUserData({})

  const userdata = apiData.read()
  
  useEffect(() => {    
    setUserdata(userdata)    
  },[userdata])  

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

  useEffect(() => {    
    if(!frmRequest.formState.isSubmitSuccessful && frmRequest.formState.submitCount > 0 && !frmRequest.formState.isValidating){      
      setError({variant: "error", message: 'Debes corregir los errores antes de grabar!'})
    }
  },[frmRequest.formState.submitCount])

  useEffect(() => {
    if(!frmRecord.formState.isSubmitSuccessful && frmRecord.formState.submitCount > 0 && !frmRecord.formState.isValidating){
      setError({variant: "error", message: 'Debes corregir los errores antes de grabar!'})      
    }
  },[frmRecord.formState.submitCount])

  useEffect(() => {
    if(!frmReport.formState.isSubmitSuccessful && frmReport.formState.submitCount > 0 && !frmReport.formState.isValidating){
      setError({variant: "error", message: 'Debes corregir los errores antes de enviar los datos!'})
    }
  },[frmReport.formState.submitCount])

  useEffect(() => {
    window.addEventListener('storage', (event) => {
        if (event.key === 'DarkMode') {            
            event.newValue ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
        }
    })    
    darkModeStorage ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')    
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
      id,
      formid:'frmWorkFlowv4'
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
      id,
      formid:'frmWFRecords'
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
      reset:false,
      formid:'frmWFReports'
    })
  };

  useEffect(() => {
    let mensaje = ''
    if(openDialog.option){   
      if(openDialog.formid === 'frmWFReports'){
          mensaje = 'Los datos han sido enviados exitosamente!'
          setLoading(true)      
          setReport(data)
          setLoading(false)     
      }
      else
          mensaje = 'Los datos han sido grabados exitosamente!'

      socket.emit('mensaje', openDialog.data)
      //fecth a la base de datos, recupera el id y lo setea en el formulario
      const newRecorId = 99999      
      if(openDialog.formid === 'frmWFRecords' && openDialog.formAction.split('/')[3] === 'mpmant'){
        console.log('openDialog.data',openDialog.data)
        setMantainer({id:'mpmant',record:{id:newRecorId, label:openDialog.data.PRO_RazonSocial},fieldid:'PagIdProveedor'})
      }

      setError({variant: "success", message: mensaje})
      console.log('formcomponent',openDialog.data, openDialog.formAction);       
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

  useEffect(() => {
    socket.on('mensaje', (data) => {
      console.log('mensaje recibido', data)
    })

    return () => {
      socket.off('mensaje')
    }
  },[])

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <LocalizationProvider
          dateAdapter={AdapterDayjs} 
          localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
          adapterLocale="es"
      >
        <SnackbarProvider maxSnack={5} Components={{
            warning: StyledMaterialDesignContent, 
            error: StyledMaterialDesignContent, 
            info: StyledMaterialDesignContent, 
            success: StyledMaterialDesignContent
          }
        }>
          <main className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
            <Suspense fallback={<Loading />}>
              <HeaderBar openSearch={openSearch} setOpenSearch={setOpenSearch} onDragOver={handleNotDragOver} darkmode={darkMode} setDarkMode={setDarkMode}/>
            </Suspense>
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
            <ToastMessages error={error} setError={setError}/>
          </main>
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App;