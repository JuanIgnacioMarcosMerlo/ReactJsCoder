import React from 'react';
import CartWidget from './CartWidget' 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/acerca">Acerca</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
      <div className="logo">MiLogo</div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
