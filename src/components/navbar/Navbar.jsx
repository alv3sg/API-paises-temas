import React, { useContext } from 'react'
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { ContadorContexto } from '../ContadorContexto';
import "./Navbar.css"
const Navbar = () => {    
  const [mode, setMode] = useContext(ContadorContexto)
  
  return (    
    <nav className= {mode ? "darkModeNav" : ""}>
        <div className='navbar' >
          <h1>Where in the World?</h1>
          <button onClick={()=>setMode(!mode)} className= {mode ? "darkModeNav" : ""}>
              <span> {(mode) ? <IoMoon/> : <IoMoonOutline/>}</span> 
              <p>Dark Mode</p>
          </button>
        </div>
    </nav>
  )
}

export default Navbar