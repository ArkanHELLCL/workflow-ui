/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { useRecords } from "../hooks/useRecords.jsx"
import { useRequest } from "../hooks/useRequest.jsx"
import { useFilters } from "../hooks/useFilters.jsx"
import MenuFilters from "./main//menuFilters.jsx";
import Flujos from "./main/flujos.jsx";
import ListaRequerimientos from "./main/ListaRequerimientos.jsx"
import ListaRegMantenedores from "./main/ListaRegMantenedores.jsx"
import Menu from './main//Menu.jsx'
import { flujos } from "../mocks/treeMenu.json";
import Formcomponent from "./main/Formcomponent.jsx";
import Loading from "../utils/Loading.jsx";
import DetalleRequerimiento from "./main/DetalleRequerimiento.jsx";
import FormRecord from "./main/FormRecord.jsx";
import Departamentos from "./main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./main/maintainer/comunamant/menuFiltersCom.jsx";
import Regiones from "./main/maintainer/comunamant/filtroRegion.jsx";

export default function Main ({handleNotDragOver, frmRequest, openDialog, setOpenDialog, frmRecord}) {
    /*const [sizes, setSizes] = useState([
        100,
        '30%',
        'auto',
    ]);*/
    const { record } = useRecords()
    const { request } = useRequest()
    const { filters } = useFilters()

    return(
      <main className='w-full flex overflow-hidden pl-14 bg-[#faf9f8] dark:bg-transparent h-full mt-[10px]'>
        <section className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[700px] h-full flex z-0' id="Resizable" onDragOver={handleNotDragOver}>
          <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[250px] border-r overflow-auto transition-color delay-75 z-0 flex flex-col columns-1'>              
            <Suspense fallback={<Loading />}>
              <Menu flujos={flujos} frmRecord={frmRecord} />
            </Suspense>
          </aside>
          <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[450px] h-full border-r flex flex-col columns-1 z-50 bg-[#ffffff] dark:bg-transparent pr-1'>  
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
          </aside>
        </section>          
        <section id="Resizable2" className="flex-1 bg-[#ffffff] dark:bg-transparent">
          <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-full border-r h-full overflow-auto relative'>{
            filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' ? 
              request ? ( 
                <Formcomponent frmRequest={frmRequest} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
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
                    filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' ? 
                      record ? (
                        <h2>Reporte</h2>
                      ) : (
                        <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                            <div className='w-full h-full flex justify-center align-middle items-center'>
                                <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un requerimiento para ver<br/> los datos del reporte</span>
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
      </main>
    )
  }