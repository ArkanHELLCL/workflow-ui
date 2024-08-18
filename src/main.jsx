import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { AttachProvider } from './context/attach.jsx'
import { PreviewProvider } from './context/preview.jsx'
import { ActiveformProvider } from './context/activeform.jsx'
import { SnackbarProvider } from 'notistack';
import StyledMaterialDesignContent from './utils/styledSnackbar.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <SnackbarProvider maxSnack={3} Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
            warning: StyledMaterialDesignContent,
          }}>
            <AttachProvider>
                <PreviewProvider>
                    <ActiveformProvider>
                        <App />
                    </ActiveformProvider>
                </PreviewProvider>              
            </AttachProvider>
        </SnackbarProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
