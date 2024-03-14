import '@fontsource-variable/lora';
import '@fontsource/roboto/700.css';
import '@fontsource/adamina';
import '@fontsource/lobster';

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
