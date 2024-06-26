import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppContextProvider from './context/AppContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
