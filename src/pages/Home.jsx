import { useState, useEffect, useContext } from 'react'
import React from 'react'
import SearchFilter from "../components/searchFilter/SearchFilter"
import Countries from "../components/Countries"
import "./Home.css"
import { ContadorContexto } from '../components/ContadorContexto';


const Home = () => {
  
  const [region, setRegion] = useState(null)
  const [search, setSearch] = useState(null)
  const body = document.getElementsByTagName("body")
  const [mode, setMode] = useContext(ContadorContexto)

  const filterRegion = (region) => {    
    setRegion(region)    
  }
  const searchCountry = (country)=> {
    setSearch(country)
    
  }

  useEffect(()=>{
    if(mode){
      body[0].style.backgroundColor = "hsl(207, 26%, 17%)"
    }else{
      body[0].style.backgroundColor = "hsl(0, 0%, 98%)"
    }
  },[mode])
  
  return (      
      <main className= {mode ? "darkMode" : ""}>
        <div className='containerHome'>
          <SearchFilter  filterRegion={filterRegion} searchCountry={searchCountry}/>                    
          <Countries region={region} search={search}/>
        </div>          
      </main>       
  )
}

export default Home