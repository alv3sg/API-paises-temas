import { Link } from "react-router-dom"
import { ContadorContexto } from '../ContadorContexto';
import { useContext } from 'react'



function CountryCard({country}) {
  const [mode, setMode] = useContext(ContadorContexto)

  return (
    <div className= {mode ? "country darkModeNav" : "country"}>
      <Link to={`/country/${country.cca2}`}> 
        <img src={country.flags.png}  />
      </Link>
        <div className="info">
          <h3> {country.name.common} </h3>
          <p><span>Population</span>: {country.population.toLocaleString("en-US")}</p>
          <p><span>Region</span>: {country.region}</p>
          <p><span>Capital</span>: {country.capital}</p>
        </div>     
    </div>
  )
}

export default CountryCard