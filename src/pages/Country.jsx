import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";

import CountryPage from "../components/CountryPage"
import { ContadorContexto } from '../components/ContadorContexto';

import "./Country.css"




const Country = () => {
    const { id } = useParams();
    const url = `https://restcountries.com/v3.1/alpha/${id}`
    const [country, setCoutry] = useState(null);  
    const [mode, setMode] = useContext(ContadorContexto)
    const body = document.getElementsByTagName("body")


        
    const getCountry = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setCoutry(data[0])                          
    }    
    useEffect ( ()=>{
        getCountry(url)
    },[]) 
    useEffect(()=>{
        if(mode){
          body[0].style.backgroundColor = "hsl(207, 26%, 17%)"
        }else{
          body[0].style.backgroundColor = "hsl(0, 0%, 98%)"
        }
      },[mode])
    
    return (
    <div className= "countryPage">        
        {country == null && <p>Carregando...</p>}
        {country !== null && <CountryPage country={country}/>}               
    </div>
  )
}

export default Country