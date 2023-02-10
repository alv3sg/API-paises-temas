import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App'
import Home from './pages/Home'
import Country from './pages/Country'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />           
          <Route path="country/:id" element={<Country />} />                   
        </Route>
      </Routes>
    </BrowserRouter>
  ,
)