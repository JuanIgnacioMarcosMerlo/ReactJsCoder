import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {
  return (
    <nav className="nav__links">
        <NavLink to="../../">Home</NavLink>
        <NavLink to="/Productos">Productos</NavLink>
        <NavLink to="/QuienesSomos">Quienes somos</NavLink>
    </nav>
    )
}

export default NavLinks