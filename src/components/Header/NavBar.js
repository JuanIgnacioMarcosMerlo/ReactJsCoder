import React from 'react';
import CartWidget from './CartWidget' 
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLinks />
      <span className="logo">MiLogo</span>
      <CartWidget />
    </div>
  );
};

export default Navbar;
