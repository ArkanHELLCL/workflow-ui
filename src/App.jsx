import { Header } from "./components/Header.jsx"
import { DetalleRequerimiento } from "./components/DetalleRequerimiento.jsx";
import { ListaRequerimientos } from "./components/ListaRequerimientos.jsx";
import { MenuFilters } from "./components/menuFilters.jsx";
import { Flujos } from "./components/flujos.jsx";
import { Footer } from "./components/footer.jsx";
import { Menu } from "./components/Menu.jsx";
import { HeaderBar } from "./components/HeaderBar.jsx";
import { SideBar } from "./components/SideBar.jsx";

function App() {    
  const defaultTheme = {
    bgcp : "dark:bg-stone-800 bg-stone-100",
    txtc : "dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4]",
    bgct : "dark:bg-stone-600 bg-stone-300"
  }  

  return (    
      <div className="dark:bg-[#262626] bg-[#ffffff] z-0 min-h-screen text-sm h-screen w-screen overflow-hidden relative pt-[30px]">
        <section className="lstlat w-14 absolute left-0 dark:bg-[#363636] bg-[#ffffff] border-r-[1px] border-[#d4d4d4] dark:border-[#484644]">
          <SideBar />
        </section>
        <section className="dark:bg-[#0a0a0a] bg-sky-600 w-full h-[30px] absolute top-0">
          <HeaderBar />
        </section>        
        <Header />            
        <main className='w-full flex overflow-hidden ml-14'>
          <section className={`${defaultTheme.txtc} ' w-[650px] min-w-[400px] h-full flex flex-columns z-0 bg-[#faf9f8] dark:bg-transparent`} id="Resizable">
            <aside className={`${defaultTheme.txtc} ' w-[250px] min-w-[150px] border-r overflow-auto  mt-3 z-0`}>              
                <Menu />  
            </aside>
            <aside className={`${defaultTheme.txtc} ' w-[400px] min-w-[250px] max-w-[600px] lstreq border-r pb-6 flex flex-column flex-wrap mt-[10px] transition-all z-50 bg-[#ffffff] dark:bg-transparent`}>
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
          <section id="Resizable2">
            <aside className={`${defaultTheme.txtc} ' w-full border-r min-w-[300px] h-full flex flex-columns overflow-auto pr-10 mt-[10px] transition-all`}>
                {'No hay requerimiento seleccionado'}            
            </aside>          
          </section>
        </main>
        <Footer />
      </div>    
  )
}

export default App;