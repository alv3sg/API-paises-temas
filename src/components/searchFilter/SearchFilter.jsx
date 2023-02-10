import React from 'react'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { ContadorContexto } from '../ContadorContexto';
import { useContext } from 'react'

import "./SearchFilter.css"

const SearchFilter = ({filterRegion, searchCountry}) => { 
  const [mode, setMode] = useContext(ContadorContexto)

  
  return (
    <div className='search'>
        <form className= {mode ? "darkModeNav" : ""}>          
          <IoIosSearch />
          <input className= {mode ? "darkModeNav" : ""} type="text" placeholder='Search for a country...' onChange={(e)=> searchCountry(e.target.value)} />            
        </form>        
        <div className= {mode ? "dropdown darkModeNav" : "dropdown"}>
            <button className={mode ? "dropbtn darkModeNav" : "dropbtn"}><p>Filter by Region</p> <span className=''><IoIosArrowDown /></span> </button>
            <div className={mode ? "dropdown-content darkModeNav" : "dropdown-content"}>
                <a href="#" onClick={()=>filterRegion("Africa")}>África</a>
                <a href="#"onClick={()=>filterRegion("Americas")}>America</a>
                <a href="#"onClick={()=>filterRegion("Asia")}>Asia</a>
                <a href="#"onClick={()=>filterRegion("Europe")}>Europe</a>
                <a href="#"onClick={()=>filterRegion("Oceania")}>Oceania</a>
            </div>
        </div>
      </div>
  )
}

export default SearchFilter