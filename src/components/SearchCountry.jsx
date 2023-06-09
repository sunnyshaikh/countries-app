import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchCountry = ({ setCountries, countries }) => {
  // search state
  const [search, setSearch] = useState("")

  const fetchCountry = async (val) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const json = await response.json()

    const result = json.filter(country => {
      return (
        country && country.name.common && country.name.common.toLowerCase().includes(val.toLowerCase())
      )
    })

    setCountries(result)
  }
  const handleChange = (val) => {
    setSearch(val)
    fetchCountry(val)
  }

  const filterByRegion = async (e) => {
    const region = e.target.value

    if (region === "none") return

    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const json = await response.json();

    setCountries(json)

  }

  return (
    <div className="search-bar">
      <form id="form">
        <AiOutlineSearch />
        <input type="text"
          placeholder="Search for a country"
          className="input"
          name="input"
          aria-label="search"
          value={search}
          onChange={e => handleChange(e.target.value)} />
      </form>
      <select onChange={filterByRegion} aria-label="region">
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default SearchCountry