import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page Not Found :(</h1>
      <Link to="/" className="btn back-btn"><HiOutlineArrowNarrowLeft /> Back</Link>
    </div>
  )
}

export default NotFound