import '@fontsource-variable/lora';
import '@fontsource/roboto/700.css';
import '@fontsource/adamina';
import '@fontsource/lobster';
import '@fontsource-variable/nunito-sans';
import '@fontsource/anton';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Web from './Web.jsx'
import './styles/index.js'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom'


const addMetaPixel = () => {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '927043005202427');
      fbq('track', 'PageView');
};
    
addMetaPixel();
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  </React.StrictMode>,
)