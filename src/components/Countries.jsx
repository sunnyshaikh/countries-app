import React, { useEffect, useState } from 'react'
import SearchCountry from './SearchCountry'
import CountryCard from './CountryCard';

const Countries = () => {
  // store countries from api
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const json = await response.json();

    setCountries(json)
  }
  useEffect(() => {
    document.title = "All countries"
    fetchCountries()
  }, [])
  return (
    <div className="container">
      <SearchCountry setCountries={setCountries} countries={countries} />
      <div className="cards">
        {
          countries.map((country, id) => (
            <CountryCard country={country} key={id} />
          ))
        }
      </div>
    </div>
  )
}

export default Countries