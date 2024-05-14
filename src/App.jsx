import { Suspense, useRef, useState } from "react";
import Header from './components/Header.jsx'
import { DetalleRequerimiento } from "./components/DetalleRequerimiento.jsx";
import ListaRequerimientos  from "./components/ListaRequerimientos.jsx";
import { MenuFilters } from "./components/menuFilters.jsx";
import { Flujos } from "./components/flujos.jsx";
import Footer from './components/footer.jsx'
import Menu from './components/Menu.jsx'
import HeaderBar from './components/HeaderBar.jsx'
import SideBar from './components/SideBar.jsx'
import Loading from "./components/Loading.jsx";
import { Formulario } from "./components/Formulario.jsx";

import useIsScrollComplete from "./hooks/useIsScrollComplete";


function App() {
  const defaultTheme = {
    bgcp : "dark:bg-stone-800 bg-stone-100",
    txtc : "dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4]",
    bgct : "dark:bg-stone-600 bg-stone-300"
  }
  const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}

  const containerRef = useRef(null);
  const [loadReq, setLoadReq] = useState({load:true, pageSize:100, page:1});

  const { isScrollComplete } = useIsScrollComplete({
      ref: containerRef,
      markAsComplete: false,
  });

  const handleLoadMore = () => {
    console.log("Load More");
    setLoadReq({ ...loadReq, page: loadReq.page + 1 });
  }


  //HeaderBar blur 252423 
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
        <main className='w-full flex overflow-hidden pl-14 h-full bg-[#faf9f8] dark:bg-transparent'>
          <section className={`${defaultTheme.txtc} w-[650px] min-w-[400px] h-full flex flex-columns z-0`} id="Resizable" onDragOver={handleNotDragOver}>
            <aside className={`${defaultTheme.txtc} w-[250px] min-w-[150px] border-r overflow-auto transition-color delay-75 mt-[10px] z-0`}> 
              <Suspense fallback={<Loading />}>             
                <Menu />  
              </Suspense>
            </aside>
            <aside className={`${defaultTheme.txtc} w-[400px] min-w-[250px] max-w-[600px] h-full border-r flex flex-column flex-wrap mt-[10px] z-50 bg-[#ffffff] dark:bg-transparent pr-1 pb-10`}>
                <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
                  <div className="flex gap-2 font-semibold z-50 transition-color delay-75">
                    <Flujos />                          
                  </div>
                  <div className="flex justify-end align-bottom pr-6 z-50 transition-color delay-75">
                    <MenuFilters defaultTheme={defaultTheme} />                  
                  </div>
                </div>
                <div className="overflow-auto h-full relative pr-2" ref={containerRef} id="containerRef">
                
                  <DetalleRequerimiento defaultTheme={defaultTheme} />                  
                  <Suspense fallback={<Loading />}>
                    <ListaRequerimientos defaultTheme={defaultTheme} loadReq={loadReq}/>                   
                  </Suspense>
                  {isScrollComplete && (
                            <>
                             <br />
                            <p style={{ textAlign: "center" }} onClick={handleLoadMore}>Scroll is Complete ✅</p>
                            </>
                        )}
                </div>
            </aside>                      
          </section>          
          <section id="Resizable2" className="flex-1 bg-[#ffffff] dark:bg-transparent mt-[10px]">
            <aside className={`${defaultTheme.txtc} w-full border-r min-w-[300px] h-full overflow-x-hidden relative`}>
              <Suspense fallback={<Loading />}>  
                <Formulario />
              </Suspense>
            </aside>          
          </section>
        </main>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </div>    
  )
}

export default App;