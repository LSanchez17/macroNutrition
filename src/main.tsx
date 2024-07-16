import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LocalStorageContextProvider } from './context/LocalStorageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalStorageContextProvider>
      <App />
    </LocalStorageContextProvider>
  </React.StrictMode>,
)
