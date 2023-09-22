import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'

createRoot(document.getElementById('root')).render(  
  <FiltersProvider>    
    <RequestProvider>
      <App />    
    </RequestProvider>
  </FiltersProvider>    
)
