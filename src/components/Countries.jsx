import React, { useEffect, useState } from 'react'
import CountryCard from "./countryCard/CountryCard"

const Countries = ({region, search}) => {
    const [countries, setCoutries] = useState([]);
    const url = "https://restcountries.com/v3.1/all"   
      
    const getCountries = async() => {
      const res = await fetch(url)
      const data = await res.json()
      if(region != null){
        const newArray = data.filter((country) => country.region == region)
        setCoutries(newArray)
      }else{
        setCoutries(data) 
      }      
      
    }
    const findCountry = ()=>{      
      fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then((response)=> {
        if(response.ok){
          response.json()
          .then((data)=>{
            setCoutries(data) 
          })
        }else{
          getCountries()
        }         
      })
      .catch((error)=>{
        console.log('There has been a problem with your fetch operation: ' + error.message);
      })           
    }

    useEffect ( ()=>{
      getCountries()
    },[])
    
    useEffect( ()=>{
      getCountries()
    },[region]) 

    useEffect( ()=>{       
      findCountry()
    },[search])
    
    
  return (
    <div className='countries'>       
        {countries.map((country )=>{
             return <CountryCard country={country} key={country.ccn3}/>
            })}
    </div>
  )
}

export default Countries 