import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RequestProvider } from './context/request.jsx'
import { RecordsProvider } from './context/records.jsx'
import { AttachProvider } from './context/attach.jsx'
import { PreviewProvider } from './context/preview.jsx'
import { ReportsProvider } from './context/reports.jsx'
import { MantainerProvider } from './context/mantainer.jsx'
import { UserDataProvider } from './context/userdata.jsx'
import { InboxsProvider } from './context/inboxs.jsx'
import { InboxStateProvider } from './context/inboxstate.jsx'
import { ButtonsGroupProvider } from './context/buttonsgroup.jsx'
import { AuthProvider } from './context/auth.jsx'
import { MantainersProvider } from './context/mantainers.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RequestProvider>
      <RecordsProvider>
        <ReportsProvider>
          <AttachProvider>
              <PreviewProvider>
                <MantainerProvider>
                  <UserDataProvider>
                    <InboxsProvider>
                      <InboxStateProvider>
                        <ButtonsGroupProvider>
                          <AuthProvider>
                            <MantainersProvider>
                              <Login />
                            </MantainersProvider>
                          </AuthProvider>
                        </ButtonsGroupProvider>
                      </InboxStateProvider>
                    </InboxsProvider>
                  </UserDataProvider>
                </MantainerProvider>
              </PreviewProvider>              
          </AttachProvider>
        </ReportsProvider>
      </RecordsProvider >
    </RequestProvider>
  </FiltersProvider>
)
