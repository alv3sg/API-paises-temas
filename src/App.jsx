import {Outlet } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import {ContadorProvider} from "./components/ContadorContexto"

function App() {  
    return (
    <div className="App">
      <ContadorProvider>
        <Navbar/> 
        <Outlet />
        </ContadorProvider>
    </div>
  )
}

export default App
