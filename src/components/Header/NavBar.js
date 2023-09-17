import React from 'react';
import CartWidget from './CartWidget' 
import NavLinks from './NavLinks';


const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLinks />
      <span className="logo">Mi logo</span>
      <CartWidget />
    </div>
  );
};

export default Navbar;
