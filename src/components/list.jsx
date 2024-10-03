/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import MenuFilters from "./main/menuFilters.jsx";
import Flujos from "./main/flujos.jsx";
import Departamentos from "./main/maintainer/usuariomant/filtroDepartamento.jsx";
import MenuFiltersUsr from "./main/maintainer/usuariomant/menuFiltersUsr.jsx";
import MenuFiltersMan from "./main/maintainer/menuFiltersMan.jsx";
import MenuFiltersCom from "./main/maintainer/comunamant/menuFiltersCom.jsx";
import MenuFiltersListaDes from "./main/maintainer/itemslistaMant/menuFiltersListaDes.jsx";
import Regiones from "./main/maintainer/comunamant/filtroRegion.jsx";
import ListaDesplegable from "./main/maintainer/itemslistaMant/filtroListaDesplegable.jsx";
import DetalleRequerimiento from "./main/DetalleRequerimiento.jsx";
import ListaRequerimientos from "./main/ListaRequerimientos.jsx";
import ListaRegMantenedores from "./main/ListaRegMantenedores.jsx";
import ListaRegReportes from "./main/ListaRegReportes.jsx";
import { fetchData } from "../utils/fectData.js";
import Loading from "../utils/Loading.jsx";
import { Suspense } from "react";

const apiData = fetchData('http://localhost:3100/api/bandeja-de-entrada?PageNumber=1&RowsOfPage=1000', {
  method: 'GET', 
  headers: {Accept: 'application/json','Content-Type': 'application/json'},
  credentials: 'include'
})

export default function List({frmRequest, frmRecord, frmReport}) {    
    const { filters } = useFilters()
    const data = apiData.read()
    console.log('list',data)

    return (
      <section id="list">
        <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] h-full grid border-r z-50 bg-[#ffffff] dark:bg-transparent pr-1 content-baseline'>
              {
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' && filters.itemIdSelected.length > 1 &&
                  <>
                    <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
                        <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                          <Flujos />                
                        </div>
                        <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                          <MenuFilters />
                        </div>
                    </div>
                    <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">                      
                        {                    
                          parseInt(data.error) !== 200 ?
                            <Suspense fallback={<Loading />}>
                              <DetalleRequerimiento />
                              <ListaRequerimientos frmRequest={frmRequest} data={data}/>
                            </Suspense>
                          :
                          <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-[70vh] w-full !overflow-hidden">
                              <span className='text-[#2c87d2] text-xl w-full'>{data.message}</span>
                          </div>
                        }
                    </div>
                  </>
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' && filters.itemIdSelected.length > 1 &&
                  <>
                    <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40 dark:border-[#353535] border-[#d4d4d4] border-b">{
                      filters.itemIdSelected?.toUpperCase() === 'MU' ? (     
                        <>                
                          <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                <Departamentos />                            
                          </div>
                          <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                <MenuFiltersUsr />                            
                          </div>
                        </> 
                        ) : filters.itemIdSelected?.toUpperCase() === 'MC' ? (  
                          <>                
                            <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                  <Regiones />                            
                            </div>
                            <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                  <MenuFiltersCom />                            
                            </div>
                          </> 
                        ) : filters.itemIdSelected?.toUpperCase() === 'MI' ? (  
                          <>                
                            <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                                  <ListaDesplegable />                            
                            </div>
                            <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                  <MenuFiltersListaDes />                            
                            </div>
                          </> 
                        ) : (
                          <>
                            <div className="flex gap-2 font-semibold z-50 transition-color delay-75 h-full items-center">
                            </div>
                            <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75 h-full !pb-[2px]">
                                <MenuFiltersMan />
                            </div>
                          </>                        
                        )
                      }
                    </div>
                    <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">                      
                        <ListaRegMantenedores frmRecord={frmRecord}/>                      
                    </div>
                  </>
              }{
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' && filters.itemIdSelected.length > 1 &&
                  <ListaRegReportes frmReport={frmReport} />
              }
        </div>
      </section>
    )
}