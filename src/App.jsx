import { Header } from "./components/Header.jsx"
import { DarkModeToggle } from "./components/darkMode.jsx"
import { DetalleRequerimiento } from "./components/DetalleRequerimiento.jsx";
import { ListaRequerimientos } from "./components/ListaRequerimientos.jsx";
import { MenuFilters } from "./components/menuFilters.jsx";
import { Flujos } from "./components/flujos.jsx";
import { Footer } from "./components/footer.jsx";
import { Menu } from "./components/Menu.jsx";
import { useState } from "react";

function App() {    
  const defaultTheme = {
    bgcp : "dark:bg-stone-800 bg-stone-100",
    txtc : "dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4]",
    bgct : "dark:bg-stone-600 bg-stone-300"
  }

  const [initialPos,   setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(null);
  
  const initial = (e) => {        
        let resizable = document.getElementById('Resizable');
        
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
  }
    
  const resize = (e) => {
        let resizable = document.getElementById('Resizable');
        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
  }

  return (    
      <div className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden">
        <DarkModeToggle />
        <Header />            
        <main className='w-full flex overflow-hidden'>
          <section className={`${defaultTheme.txtc} ' w-[650px] min-w-[400px] h-full flex flex-columns z-0`} id="Resizable">
            <aside className={`${defaultTheme.txtc} ' w-[250px] min-w-[150px] border-r overflow-auto bg-[#faf9f8] z-0 dark:bg-transparent mt-3`}>              
                <Menu />  
            </aside>
            <aside className={`${defaultTheme.txtc} ' w-[400px] min-w-[250px] max-w-[600px] lstreq border-r pb-6 flex flex-column flex-wrap mt-[10px] transition-all z-50`}>
                <div className="pl-7 h-[30px] flex items-end justify-between leading-8 w-full z-40">
                  <div className="flex gap-2 font-semibold z-50">
                    <Flujos />                          
                  </div>
                  <div className="flex justify-end align-bottom pr-6 z-50">
                    <MenuFilters defaultTheme={defaultTheme} />                  
                  </div>
                </div>
                <div className="overflow-auto lstscroll">              
                  <DetalleRequerimiento defaultTheme={defaultTheme} />
                  <ListaRequerimientos defaultTheme={defaultTheme} />
                </div>                
            </aside>                      
          </section>
          <div className="w-2 h-screen hover:cursor-col-resize" 
                  draggable   = 'true'
                  onDragStart = {initial} 
                  onDrag      = {resize}
                ></div> 
          <section>
            <aside className={`${defaultTheme.txtc} ' w-full border-r min-w-[300px] h-full flex flex-columns overflow-auto pr-10 mt-[10px] transition-all`}>
                {'No hay requerimiento seleccionado'}            
            </aside>          
          </section>
        </main>
        <Footer />
      </div>    
  )
}

export default App
