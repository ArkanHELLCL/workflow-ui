import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <SnackbarProvider maxSnack={3} Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}>
          <App />
        </SnackbarProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
