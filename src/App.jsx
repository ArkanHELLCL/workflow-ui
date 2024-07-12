/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, useState } from "react";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import HeaderBar from './components/HeaderBar.jsx'
import SideBar from './components/SideBar.jsx'
import Loading from "./utils/Loading.jsx"; 
import Main from './components/Main.jsx'
import { useForm, FormProvider } from "react-hook-form"

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
  })
  const frmRecord = useForm({
    mode: "onBlur",
  })

  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "option" : false})

  return (    
    <div className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative pb-[30px] flex flex-col">
      <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full h-[30px] z-[60] transition-color delay-75" onDragOver={handleNotDragOver}>
        <HeaderBar />          
      </section>
      <nav className="h-full w-14 absolute left-0 dark:bg-[#363636] bg-[#ffffff] border-r-[1px] border-[#d4d4d4] dark:border-[#484644] transition-color delay-75 z-20 pt-[30px]" 
        onDragOver={handleNotDragOver}>
        <Suspense fallback={<Loading />}>
          <SideBar />
        </Suspense>
      </nav>        
      <Suspense fallback={<Loading />}>
        <FormProvider {...frmRequest}>          
          <Header openDialog={openDialog} setOpenDialog={setOpenDialog} frmRecord={frmRecord}/>
          <Main handleNotDragOver={handleNotDragOver} frmRequest={frmRequest} openDialog={openDialog} setOpenDialog={setOpenDialog} frmRecord={frmRecord}/>
        </FormProvider>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>      
    </div>
  )
}

export default App;