import {React, useContext} from 'react'
import { Link } from "react-router-dom"
import { ContadorContexto } from './ContadorContexto';


const CountryPage = (country) => {
    const [mode, setMode] = useContext(ContadorContexto)
    const currencies = ()=>{
        return Object.keys(country.country.currencies)
    }
    const languages = ()=>{
        return Object.values(country.country.languages)
    }   
    
  return (
    <div className={mode ? "darkMode countryItem" : "countryItem"}>
        <div className='btn'>
            <Link to="/" ><button className={mode ? "darkModeBtn" : "lightModeBtn"}> Back</button> </Link> 
        </div>
        <div className='infoCountry'>
            <div className='flag'>
                <img src={country.country.flags.png}></img>
            </div>      
            <div className='countryInfo'>
                <h1 >{country.country.name.common}</h1>
                <div className='specificInfo'>                    
                    <div>
                        <p><span>Native Name: </span>{country.country.name.official}</p>
                        <p><span>Population: </span>{country.country.population}</p>
                        <p><span>Region: </span>{country.country.region}</p>
                        <p><span>Sub Region: </span>{country.country.subregion}</p>
                        <p><span>Capital: </span>{country.country.capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain: </span>{country.country.tld}</p>
                        <p><span>Currencies: </span>{currencies()[0]}</p>
                        {(languages()) && languages().map((idi)=>{return (<p><span>Languages: </span>{idi}</p>)}) }
                    </div>                    
                </div>
                <div className='border'>
                    <span>Border Countries: </span>
                    <div>
                        {(country.country.borders)  && <p className={mode ? "darkModeBorder" : "lightModeBorder"}>{country.country.borders[0]}</p>}
                        {(country.country.borders)  && <p className={mode ? "darkModeBorder" : "lightModeBorder"}>{country.country.borders[1]}</p>}
                        {(country.country.borders)  && <p className={mode ? "darkModeBorder" : "lightModeBorder"}>{country.country.borders[2]}</p>}
                    </div>                        
                </div>                
            </div>            
        </div>
    </div>
  )
}

export default CountryPage