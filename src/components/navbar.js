import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiLogo</div>
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
    </nav>
  );
};

export default Navbar;
