import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
