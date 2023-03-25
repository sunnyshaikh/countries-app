import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons'

const SearchCountry = ({ setCountries }) => {
  // search state
  const [search, setSearch] = useState("")

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
        <Search />
        <input type="text"
          placeholder="Search for a country"
          className="input"
          name="input"
          value={search}
          onChange={e => setSearch(e.target.value)} />
      </form>
      <select onChange={filterByRegion}>
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