/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { usePreview } from "./hooks/usePreview.jsx";
import { useAttach } from "./hooks/useAttach.jsx";
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

const handleNotDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "none";
  return false;
}

function App() {
  
  const frmRequest = useForm({
    mode: "onBlur",
    //mode: "all"
  })
  const frmRecord = useForm({
    //mode: "all"
    mode : "onBlur"
  })

  const { setPreview } = usePreview()
  const { setAdjuntos } = useAttach()
  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "option" : false})
  const [openSearch, setOpenSearch] = useState(false);
  const formReqRef = useRef(null)
  const formRegRef = useRef(null)
  const { enqueueSnackbar } = useSnackbar();
  const [filesList, setFilesList] = useState([]);

  useEffect(() => {    
    if(!frmRequest.formState.isSubmitSuccessful && frmRequest.formState.submitCount > 0 && !frmRecord.formState.isValidating){
      enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmRequest.formState.submitCount])

  useEffect(() => {
    //if(frmRequest.formState.isSubmitting && !frmRequest.formState.isValid && !frmRequest.isSubmitSuccessful){
    if(!frmRecord.formState.isSubmitSuccessful && frmRecord.formState.submitCount > 0 && !frmRecord.formState.isValidating){
      enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmRecord.formState.submitCount])

  const onSubmitRequest = (data, event) => {
    console.log('formcomponent',data, event.nativeEvent.submitter.formAction);
    enqueueSnackbar('Los datos han sido grabados exitosamente!', { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    frmRequest.clearErrors()
    frmRequest.reset()
    setAdjuntos([])
    setFilesList([])
    setPreview({
        state:false,
        obj:null,
        selected:null
    })
  };

  const onSubmitRecord = (data, event) => {
    console.log('formcomponent',data, event.nativeEvent.submitter.formAction);
    enqueueSnackbar('Los datos han sido grabados exitosamente! ' + frmRecord.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    frmRecord.clearErrors()
    frmRecord.reset()
    setAdjuntos([])
    setFilesList([])
    setPreview({
        state:false,
        obj:null,
        selected:null
    })
  };

  return (    
    <main className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
      <HeaderBar openSearch={openSearch} setOpenSearch={setOpenSearch} onDragOver={handleNotDragOver}/>      
      <SideBar />            
      <Header />      
      <Menu menu={treeMmenu} frmRecord={frmRecord} frmRequest={frmRequest}/>      
      <List frmRequest={frmRequest} frmRecord={frmRecord}/>      
      <DataForm frmRequest={frmRequest} frmRecord={frmRecord} filesList={filesList} setFilesList={setFilesList} />      
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
    </main>
  )
}

export default App;