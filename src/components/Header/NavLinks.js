import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {
  return (
    <nav className="nav__link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Categoria/1">Categoria 1</NavLink>
        <NavLink to="/Categoria/2">Categoria 2</NavLink>
    </nav>
    )
}

export default NavLinks