import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { AttachProvider } from './context/attach.jsx'
import { PreviewProvider } from './context/preview.jsx'
import { ReportsProvider } from './context/reports.jsx'
import { MantainerProvider } from './context/mantainer.jsx'
import { UserDataProvider } from './context/userdata.jsx'
import 'dayjs/locale/es';

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <ReportsProvider>
          <AttachProvider>
              <PreviewProvider>
                <MantainerProvider>
                  <UserDataProvider>
                    <App />
                  </UserDataProvider>
                </MantainerProvider>
              </PreviewProvider>              
          </AttachProvider>
        </ReportsProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
