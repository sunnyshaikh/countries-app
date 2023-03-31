import React from 'react'
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <Link to={`/country/${country.name.common}`} aria-label="image">
        <img src={country.flags.svg} alt={country.name.common} />
      </Link>
      <div className="card-body">
        <h2 className="country-title">{country.name.common}</h2>
        <p><strong>Population: </strong>
          {parseFloat(country.population).toLocaleString("en-US")}
        </p>
        <p><strong>Region: </strong>{country.region}</p>
        <p><strong>Capital: </strong>{country.capital}</p>
      </div>
    </div>
  )
}

export default CountryCard