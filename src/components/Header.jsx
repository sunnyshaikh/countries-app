import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const Header = () => {
  // theme toggle state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      document.body.classList.remove("dark")
    }
    else {
      setTheme("dark")
      document.body.classList.remove("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.classList.add(theme)
  }, [theme])

  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Where in the world?</h1>
        <div className="theme-toggler">
          {
            theme === "dark" ?
              <button className="btn" id="toggle-theme-btn" onClick={toggleTheme}>
                <BsFillMoonFill color="white" /> Dark Theme
              </button>
              :
              <button className="btn" id="toggle-theme-btn" onClick={toggleTheme}>
                <BsFillSunFill color="black" /> Light Theme
              </button>
          }
        </div>
      </div>
    </header>
  )
}

export default Header