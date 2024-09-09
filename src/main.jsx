import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { AttachProvider } from './context/attach.jsx'
import { PreviewProvider } from './context/preview.jsx'
import { ReportsProvider } from './context/reports.jsx'
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <ReportsProvider>
          <SnackbarProvider maxSnack={5} Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
              warning: StyledMaterialDesignContent,
            }}>
              <AttachProvider>
                  <PreviewProvider>
                      
                          <App />
                      
                  </PreviewProvider>              
              </AttachProvider>
          </SnackbarProvider>
        </ReportsProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
