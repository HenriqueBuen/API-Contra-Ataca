import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ContextProvider } from './Context'
import Router from './components/Router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
        <Header/>
        <Router/>
        <Footer/>
       
  </ContextProvider>
)
