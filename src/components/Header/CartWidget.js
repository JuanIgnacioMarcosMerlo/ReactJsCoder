import React from 'react';
import { NavLink } from 'react-router-dom';
const CartWidget = () => { 

  return (
    <div className="cart-widget">
      <NavLink to="/Carrito"><i className='material-icons'>shopping_cart</i></NavLink>
    </div>
  );
};

export default CartWidget;


