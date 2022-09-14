import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Back to Main</Link>
    </div>
  )
}

export default Nav