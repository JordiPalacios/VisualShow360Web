import React from 'react'
import ReactDOM from 'react-dom/client'
import Web from './Web.jsx'
import './styles/index.js'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  </React.StrictMode>,
)
