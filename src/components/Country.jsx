import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

const Country = () => {
  const [country, setCountry] = useState(null)
  const [error, setError] = useState("")
  const countryName = useParams().name

  const fetchCountry = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      if (!response.ok) throw Error("Country Not Found!")
      const json = await response.json()

      setCountry(json[0])
    }
    catch (err) { setError(err.message) }

  }

  useEffect(() => {
    document.title = `Country - ${countryName}`
    fetchCountry()
  }, [])

  return (
    <div className="container">
      <Link to="/" className="btn back-btn"><HiOutlineArrowNarrowLeft /> Back</Link>
      {
        error && <h1>{error}</h1>
      }
      {
        country && !error &&
        <div className="country-detail-card">
          <div className="flag">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="details">
            <h1 className="country-title">{country.name.common}</h1>
            <div className="list">
              <div className="left-list">
                <p><strong>Native Name: </strong>{country.name.common}</p>
                <p><strong>Popuation: </strong>{parseFloat(country.population).toLocaleString("en-us")}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Sub Region: </strong>{country.subregion}</p>
                <p><strong>Capital: </strong>{country.capital[0]}</p>
              </div>
              <div className="right-list">
                <p><strong>Top level Domain: </strong>{country.tld[0]}</p>
                <p><strong>Currencies: </strong>Test</p>
                <p><strong>Languages: </strong>test, test, test</p>
              </div>
            </div>
            {
              country.borders &&
              <div className="border-countries">
                <span><strong>Border Countries: </strong></span>
                {
                  country.borders.map(border => (
                    <Link to="/" className="btn">{border}</Link>
                  ))
                }
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Country