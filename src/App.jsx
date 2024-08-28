/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRecords } from "./hooks/useRecords.jsx"
import { useRequest } from "./hooks/useRequest.jsx"
import { useFilters } from "./hooks/useFilters.jsx"
import { Suspense, useState } from "react";
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import SideBar from './components/SideBar.jsx'
import Loading from "./utils/Loading.jsx"; 
import MenuFilters from "./components/main//menuFilters.jsx";
import Flujos from "./components/main/flujos.jsx";
import treeMmenu  from "./mocks/treeMenu.json";
import Menu from './components/main/Menu.jsx'
import Departamentos from "./components/main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./components/main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./components/main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./components/main/maintainer/comunamant/menuFiltersCom.jsx";
import Regiones from "./components/main/maintainer/comunamant/filtroRegion.jsx";
import DetalleRequerimiento from "./components/main/DetalleRequerimiento.jsx";
import FormRecord from "./components/main/FormRecord.jsx";
import ListaRequerimientos from "./components/main/ListaRequerimientos.jsx"
import ListaRegMantenedores from "./components/main/ListaRegMantenedores.jsx"
import Formcomponent from "./components/main/Formcomponent.jsx";
import { useForm, FormProvider } from "react-hook-form"
import HeaderBarLeft from "./components/headerbar/HeaderBarLeft.jsx";
import SearchBar from "./components/headerbar/searchBar.jsx";
import HeaderBarRight from "./components/headerbar/HeaderBarRight.jsx";

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
  const { record } = useRecords()
  const { request } = useRequest()
  const { filters } = useFilters()
  const frmRequest = useForm({
    mode: "onBlur",
    //mode: "all"
  })
  const frmRecord = useForm({
    //mode: "all"
    mode : "onBlur"
  })

  const [openDialog, setOpenDialog] = useState({"open":false,"titulo":"","mensaje":"","id":"", "option" : false})
  const [openSearch, setOpenSearch] = useState(false);    

  return (    
    <div className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative" id="container">
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
        <Suspense fallback={<Loading />}>
          <SideBar />
        </Suspense>
      </section>
      <FormProvider {...frmRequest}>
        <section id="header">
          <Header openDialog={openDialog} setOpenDialog={setOpenDialog} frmRecord={frmRecord} />
        </section>
        <section id="menu" className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] border-r overflow-auto transition-color delay-75 z-0'>                        
          <Menu menu={treeMmenu} frmRecord={frmRecord} />              
        </section>
        <section className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4]h-full border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1' id="list">
              {
              filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' && 
                <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">                    
                    <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                      <Flujos />                
                    </div>
                    <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                      <MenuFilters />
                    </div>
                </div>
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' && filters.itemIdSelected.length > 1 &&
                  <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40 dark:border-[#353535] border-[#d4d4d4] border-b">{
                    filters.itemIdSelected?.toUpperCase() === 'MU' ? (     
                      <>                
                        <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                              <Departamentos />                            
                        </div>
                        <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                              <MenuFiltersUsr />                            
                        </div>
                      </> 
                      ) : filters.itemIdSelected?.toUpperCase() === 'MC' ? (  
                        <>                
                          <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                <Regiones />                            
                          </div>
                          <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                                <MenuFiltersCom />                            
                          </div>
                        </> 
                      ) : (
                        <>
                          <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                          </div>
                          <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                              <MenuFiltersMan />                            
                          </div>
                        </>                        
                      )
                    }
                  </div>
              }
              <div className="overflow-auto h-full relative pr-2 w-full flex flex-col columns-1" id="containerRef">              
                <Suspense fallback={<Loading />}>{
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' ? ( 
                      <>
                        <DetalleRequerimiento />
                        <ListaRequerimientos/>
                      </>
                    ) : (                      
                      <ListaRegMantenedores frmRecord={frmRecord}/>                      
                    )
                }
                </Suspense>                  
              </div>
        </section>
        <section id="formwf" className="bg-[#ffffff] dark:bg-transparent">
          <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-full border-r h-full overflow-auto relative'>{
            filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' ? 
              request ? ( 
                <Formcomponent frmRequest={frmRequest} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
              ) : ( 
                <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                    <div className='w-full h-full flex justify-center align-middle items-center'>
                        <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un requerimiento para ver<br/> los datos del formulario</span>
                    </div>
                </div>
              ) :
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' ? 
                  record ? (
                    <>
                      <FormRecord frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog}/>                      
                    </>
                  ) : (                
                    <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                        <div className='w-full h-full flex justify-center align-middle items-center'>
                            <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un registro para ver<br/> los datos en el mantenedor</span>
                        </div>
                    </div>
                  ) :
                    filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' ? (                      
                        <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                            <div className='w-full h-full flex justify-center align-middle items-center'>
                                <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un requerimiento para ver<br/> los datos del reporte</span>
                            </div>
                        </div>
                        ) : 
                        filters.itemIdSelected?.charAt(0).toUpperCase() === 'J' ? (                      
                          <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                              <div className='w-full h-full flex justify-center align-middle items-center'>
                                  <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un mensaje para ver<br/> el contenido y sus acciones</span>
                              </div>
                          </div>
                          ) : (
                          <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                              <div className='w-full h-full flex justify-center align-middle items-center'>
                                  <span className='text-[#2c87d2] text-2xl text-balance text-center'>Menú no especificado</span>
                              </div>
                          </div>
                        )
          }
          </div>
        </section>
      </FormProvider>      
      <section id="footer">
        <Footer />
      </section>      
    </div>
  )
}

export default App;