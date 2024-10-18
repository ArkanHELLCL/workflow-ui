/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import io from 'socket.io-client';
import { Suspense, useEffect, useRef, useState } from "react";
import { usePreview } from "./hooks/usePreview.jsx";
import { useAttach } from "./hooks/useAttach.jsx";
import { useReports } from "./hooks/useReports.jsx";
import { useMantainer } from "./hooks/useMantainer.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import { useFilters } from "./hooks/useFilters.jsx";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'
import Menu from './components/Menu.jsx'
import { useForm } from "react-hook-form"
import List from "./components/list.jsx";
import DataForm from "./components/dataform.jsx";
import HeaderBar from "./components/headerBar.jsx";
import ConfirmationDialog from './utils/ConfirmationDialog.jsx';
import ConfirmationMessage from './utils/confirmationMessage.jsx';
import { ToastMessages } from "./utils/toastMessages.jsx";
import Loading from "./utils/Loading.jsx";
import { Constants } from "./utils/const.jsx";
import { useInboxState } from './hooks/useInboxState.jsx';

//socket.io
const socket = io('http://localhost:3100');

const handleNotDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "none";
  return false;
}

function App({darkMode, setDarkMode}) {    
  const { setMantainer } = useMantainer()
  const { setPreview } = usePreview()
  const { setAdjuntos } = useAttach()
  const { setInboxState } = useInboxState()
  const { setAuth } = useAuth()
  const { filters } = useFilters()
  const { auth } = useAuth()
  const { report, setReport } = useReports()
  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "data":null, "formAction":null, "frmobj":null, "reset":true, "formid":null})
  const [openSearch, setOpenSearch] = useState(false);
  const formReqRef = useRef(null)
  const formRegRef = useRef(null)
  const formRepRef = useRef(null)  
  const [filesList, setFilesList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { host, fecthParams : params, dateOptions : options } = Constants()

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
          setLoading(true)
          const date = new Intl.DateTimeFormat(undefined, options).format(new Date())
          let url = ''
          let message = date + ' - Error: Registros solicitado id: ' + filters.itemIdSelected + ' no encontrado'
          let msgfinal = ''
          let name = ''
          let error = true
          
          if(filters.itemIdSelected === 'ru'){
            const fechaDesde = openDialog.data.REP_FechaDesde.$y + '-' + (openDialog.data.REP_FechaDesde.$M + 1) + '-' + openDialog.data.REP_FechaDesde.$D
            const fechaHasta = openDialog.data.REP_FechaHasta.$y + '-' + (openDialog.data.REP_FechaHasta.$M + 1) + '-' + openDialog.data.REP_FechaHasta.$D

            url = host + '/api/reportes/dias-por-usuario?repUsrId=' + openDialog.data.USR_Id.id + '&repFechaDesde=' +fechaDesde + '&repFechaHasta=' + fechaHasta
            message = date + ' - Generando informe de Dias por usuario...'
            msgfinal = date + ' - Informe de Dias por usuarios generado'
            name = 'dias por usuario'
            error = false
          }
          setInboxState(prevState => ({
              ...prevState,            
              messages: [...prevState.messages, message],
              error: error
          }))
          console.log('url',url)
          if(url){
              fetch(url, params)
              .then((response) => response.json())
              .then((data) => {
                  if(data.error){
                      if(parseInt(data.error) === 401){
                          setAuth(false)
                      }
                      message = date + ' - Error: Reporte de ' + name + ' ' +data.message
                      mensaje = 'El reporte no ha podido ser generado'
                      setError({variant: "error", message: mensaje})
                  }
                  else{
                      message = msgfinal;
                      mensaje = 'Reporte generado exitosamente!'
                      setError({variant: "success", message: mensaje})
                      //setReport(prevState => ([...prevState, data]))
                      setReport(data)
                  }
                                    
                  setInboxState(prevState => ({
                      ...prevState,                    
                      messages: [...prevState.messages, message],
                      error: data.error ? true : false
                  }))
              })
              .catch((error) => {                  
                  setInboxState(prevState => ({
                      ...prevState,                    
                      messages: [...prevState.messages, date + ' - Error: ' + error.message],
                      error: true
                  }))
                  setError({variant: "error", message: 'Error al intentar generar el reporte!'})
              })
          }
          setLoading(false)     
      }
      else{
          mensaje = 'Los datos han sido grabados exitosamente!'
          setError({variant: "success", message: mensaje})
      }

      //socket.emit('mensaje', openDialog.data)
      //fecth a la base de datos, recupera el id y lo setea en el formulario
      const newRecorId = 99999      
      if(openDialog.formid === 'frmWFRecords' && openDialog.formAction.split('/')[3] === 'mpmant'){
        console.log('openDialog.data',openDialog.data)
        setMantainer({id:'mpmant',record:{id:newRecorId, label:openDialog.data.PRO_RazonSocial},fieldid:'PagIdProveedor'})
      }
      
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
    auth ?
      <main className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
        <Suspense fallback={<Loading />}>
          <HeaderBar openSearch={openSearch} setOpenSearch={setOpenSearch} onDragOver={handleNotDragOver} darkmode={darkMode} setDarkMode={setDarkMode}/>
        </Suspense>
        <SideBar />            
        <Header />      
        <Menu frmRecord={frmRecord} frmRequest={frmRequest}/>      
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
    :
    <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[100vh] w-full !overflow-hidden">
      <span className='text-[#2c87d2] text-xl w-full'>No autorizado</span>
    </div>
  )
}

export default App;