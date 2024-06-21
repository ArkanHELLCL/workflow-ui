/* eslint-disable react/prop-types */
import { Suspense, lazy } from "react";
import MenuFilters from "./main//menuFilters.jsx";
import Flujos from "./main/flujos.jsx";
import ListaRequerimientos from "./main/ListaRequerimientos.jsx"
import Menu from './main//Menu.jsx'
import { flujos } from "../mocks/treeMenu.json";
import Formcomponent from "./main/Formcomponent.jsx";
import Loading from "../utils/Loading.jsx";

const LazyDetalleRequerimiento = lazy(() => import("./main/DetalleRequerimiento.jsx"))

export default function Main ({handleNotDragOver, request}) {
    /*const [sizes, setSizes] = useState([
        100,
        '30%',
        'auto',
    ]);*/
    
    return(
      <main className='w-full flex overflow-hidden pl-14 bg-[#faf9f8] dark:bg-transparent h-full'>
        <section className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[700px] h-full flex flex-columns z-0' id="Resizable" onDragOver={handleNotDragOver}>
          <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[250px] border-r overflow-auto transition-color delay-75 mt-[10px] z-0'>              
            <Suspense fallback={<Loading />}>
              <Menu flujos={flujos} />
            </Suspense>
          </aside>
          <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[450px] h-full border-r flex flex-column flex-wrap mt-[10px] z-50 bg-[#ffffff] dark:bg-transparent pr-1 pb-10'>
              <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
                <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                  <Flujos />                          
                </div>
                <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                  <MenuFilters />                  
                </div>
              </div>
              <div className="overflow-auto h-full relative pr-2 w-full flex flex-col columns-1" id="containerRef">              
                <Suspense fallback={<Loading />}>
                  <LazyDetalleRequerimiento />
                  <ListaRequerimientos/>
                </Suspense>                  
              </div>
          </aside>
        </section>          
        <section id="Resizable2" className="flex-1 bg-[#ffffff] dark:bg-transparent mt-[10px]">
          <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-full border-r h-full overflow-auto relative'>{
            request ? (
              <Formcomponent request={request} />
            ): (
              <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                  <div className='w-full h-full flex justify-center align-middle items-center'>
                      <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un requerimiento para ver<br/> los datos del formulario</span>
                  </div>
              </div>
            )}
          </div>          
        </section>
      </main>
    )
  }