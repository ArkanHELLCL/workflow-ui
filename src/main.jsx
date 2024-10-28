import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import './index.css'
import { FiltersProvider, UserDataProvider, InboxsProvider, InboxStateProvider, AuthProvider } from './context'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>    
    <UserDataProvider>
      <InboxsProvider>
        <InboxStateProvider>          
            <AuthProvider>              
                <Login />              
            </AuthProvider>          
        </InboxStateProvider>
      </InboxsProvider>
    </UserDataProvider>                
  </FiltersProvider>
)
