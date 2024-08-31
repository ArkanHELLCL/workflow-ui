/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { usePreview } from "./hooks/usePreview.jsx";
import { useAttach } from "./hooks/useAttach.jsx";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'
import treeMmenu  from "./mocks/treeMenu.json";
import Menu from './components/main/Menu.jsx'
import { useForm } from "react-hook-form"
import HeaderBarLeft from "./components/headerbar/HeaderBarLeft.jsx";
import SearchBar from "./components/headerbar/searchBar.jsx";
import HeaderBarRight from "./components/headerbar/HeaderBarRight.jsx";
import List from "./components/main/list.jsx";
import DataForm from "./components/main/dataform.jsx";
import { useSnackbar } from 'notistack';

//import EncontrarIdPorUrl from './components/EncontrarIdPorUrl.jsx'
//import { useFilters } from "./hooks/useFilters.jsx";
//import SplitPane, { Pane } from 'split-pane-react';
//const currentPath = window.location.pathname
//const LazyFormulario = lazy(() => import("./components/Formulario.jsx"))

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
  const { enqueueSnackbar } = useSnackbar();
  const [filesList, setFilesList] = useState([]);

  !frmRequest.formState.isValid && frmRequest.formState.submitCount >= 0 && frmRequest.formState.isSubmitted ?  
    enqueueSnackbar('Debes corregir los errores antes de grabar! ' + frmRequest.formState.submitCount, { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} }) 
    : null 

  const onSubmitRequest = (data) => {
    console.log('formcomponent',data);
    enqueueSnackbar('Los datos han sifo grabados exitosamente! ' + frmRequest.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
    frmRequest.clearErrors()
    frmRequest.reset()
    console.log(frmRequest.formState.isSubmitted)
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
      <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="headerbarleft">
        <HeaderBarLeft />          
      </section>
      <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="searchbar">
        <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} />
      </section>
      <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full z-[60] transition-color delay-75" onDragOver={handleNotDragOver} id="headerbarright">
        <HeaderBarRight />
      </section>
      <section className="h-full dark:bg-[#363636] bg-[#ffffff] border-r-[1px] border-[#d4d4d4] dark:border-[#484644] transition-color delay-75 z-20" onDragOver={handleNotDragOver} id="sidebar">
        <SideBar />
      </section>
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
    </main>
  )
}

export default App;