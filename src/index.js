import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StateProvider } from './utils/StateProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App />
  </StateProvider>
)
