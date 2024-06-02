/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Suspense, lazy } from "react";
import Header from './components/Header.jsx'
import MenuFilters from "./components/menuFilters.jsx";
import Flujos from "./components/flujos.jsx";
import Footer from './components/footer.jsx'
import ListaRequerimientos from "./components/ListaRequerimientos.jsx"
import Menu from './components/Menu.jsx'
import HeaderBar from './components/HeaderBar.jsx'
import SideBar from './components/SideBar.jsx'
import Loading from "./components/Loading.jsx";
//import { useFilters } from "./hooks/useFilters.jsx";
import { useRequest } from "./hooks/useRequest.jsx"
//import EncontrarIdPorUrl from './components/EncontrarIdPorUrl.jsx'
import { flujos } from "./mocks/treeMenu.json";
//import SplitPane, { Pane } from 'split-pane-react';

//const currentPath = window.location.pathname
const LazyFormulario = lazy(() => import("./components/Formulario.jsx"))
const LazyDetalleRequerimiento = lazy(() => import("./components/DetalleRequerimiento.jsx"))

const Main = ({handleNotDragOver, request}) =>{
  /*const [sizes, setSizes] = useState([
      100,
      '30%',
      'auto',
  ]);*/
  
  return(
    <main className='w-full flex overflow-hidden pl-14 h-full bg-[#faf9f8] dark:bg-transparent'>
      <section className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[700px] min-w-[400px] h-full flex flex-columns z-0' id="Resizable" onDragOver={handleNotDragOver}>
        <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[250px] min-w-[150px] border-r overflow-auto transition-color delay-75 mt-[10px] z-0'>              
          <Suspense fallback={<Loading />}>
            <Menu flujos={flujos} />
          </Suspense>
        </aside>
        <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-[450px] min-w-[250px] max-w-[600px] h-full border-r flex flex-column flex-wrap mt-[10px] z-50 bg-[#ffffff] dark:bg-transparent pr-1 pb-10'>
            <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
              <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                <Flujos />                          
              </div>
              <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                <MenuFilters />                  
              </div>
            </div>
            <div className="overflow-auto h-full relative pr-2 w-full" id="containerRef">              
              <Suspense fallback={<Loading />}>
                <LazyDetalleRequerimiento />
                <ListaRequerimientos/>
              </Suspense>                  
            </div>
        </aside>                      
      </section>          
      <section id="Resizable2" className="flex-1 bg-[#ffffff] dark:bg-transparent mt-[10px]">
        <aside className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-full border-r min-w-[300px] h-full overflow-x-hidden relative'>{
          request && (
          <Suspense fallback={<Loading />}>  
            <LazyFormulario />
          </Suspense>
          )}
        </aside>          
      </section>
    </main>
  )
}

function App() { 
  //const { filters, setFilters } = useFilters()
  const { request } = useRequest()

  /*
  let idCurrentPath=''
  useEffect(() => {
    !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas[0])?.id :
    !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].mantenedores[0])?.id :
    !idCurrentPath ? idCurrentPath = EncontrarIdPorUrl(currentPath, flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes[0])?.id : idCurrentPath = filters.itemIdSelected

    if(idCurrentPath){            
        setFilters((prevState) => ({
            ...prevState,
            itemIdSelected:idCurrentPath
        }))
    }
  },[])
  */

  const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
  }
  console.log('entre app', request)

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
        <Header />
      </Suspense>
      <Main handleNotDragOver={handleNotDragOver} request={request}/>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>      
    </div>    
  )
}

export default App;