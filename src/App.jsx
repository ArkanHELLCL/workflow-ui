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
    //if(frmRequest.formState.isSubmitting && !frmRequest.formState.isValid && !frmRequest.isSubmitSuccessful){
    if(!frmRequest.isSubmitSuccessful && frmRequest.formState.submitCount > 0){
      enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    }
  },[frmRequest.formState.submitCount])

  const onSubmitRequest = (data) => {
    console.log('formcomponent',data);
    enqueueSnackbar('Los datos han sifo grabados exitosamente! ' + frmRequest.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
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

  const onSubmitRecord = (data) => {
    console.log('formcomponent',data);
    enqueueSnackbar('Los datos han sifo grabados exitosamente! ' + frmRequest.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
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

  return (    
    <main className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
      <HeaderBar openSearch={openSearch} setOpenSearch={setOpenSearch} onDragOver={handleNotDragOver}/>      
      <SideBar />      
      <section id="header">
        <Header openDialog={openDialog} setOpenDialog={setOpenDialog} frmRecord={frmRecord} />
      </section>
      <section id="menu" className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] border-r overflow-auto transition-color delay-75 z-0'>                        
        <Menu menu={treeMmenu} frmRecord={frmRecord} />              
      </section>
      <section id="list">
        <List frmRecord={frmRecord}/>
      </section>
      <section id="formwf" className="bg-[#ffffff] dark:bg-transparent">
        <DataForm frmRequest={frmRequest} frmRecord={frmRecord} filesList={filesList} setFilesList={setFilesList} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </section>
      <section id="footer">
        <Footer />
      </section>
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