import React from 'react';
import Navbar from './Header/NavBar';

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h1>Hola, soy un Header</h1>
        </div>
        <Navbar />
    </div>
  );
};

export default Header;
