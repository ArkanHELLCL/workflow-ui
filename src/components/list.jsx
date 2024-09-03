/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import MenuFilters from "./main/menuFilters.jsx";
import Flujos from "./main/flujos.jsx";
import Departamentos from "./main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./main/maintainer/comunamant/menuFiltersCom.jsx";
import Regiones from "./main/maintainer/comunamant/filtroRegion.jsx";
import ListaDesplegable from "./main/maintainer/itemslistaMant/filtroListaDesplegable.jsx";
import DetalleRequerimiento from "./main/DetalleRequerimiento.jsx";
import ListaRequerimientos from "./main/ListaRequerimientos.jsx";
import ListaRegMantenedores from "./main/ListaRegMantenedores.jsx";
import Loading from "../utils/Loading.jsx"; 
import { Suspense } from "react";

export default function List({frmRequest, frmRecord}) {    
    const { filters } = useFilters()

    return (
      <section id="list">
        <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-baseline'>
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
                      ) : filters.itemIdSelected?.toUpperCase() === 'MI' ? (  
                        <>                
                          <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                <ListaDesplegable />                            
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
              <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">              
                <Suspense fallback={<Loading />}>{
                  filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' ? ( 
                      <>
                        <DetalleRequerimiento />
                        <ListaRequerimientos frmRequest={frmRequest}/>
                      </>
                    ) : (                      
                      <ListaRegMantenedores frmRecord={frmRecord}/>                      
                    )
                }
                </Suspense>                  
              </div>
        </div>
      </section>
    )
}