import React from 'react';
import { useCart } from '../CartContext';


const Carrito = () => {
  const { cart, totalItems, addToCart, removeFromCart } = useCart();

  const calcularPrecioTotal = (producto) => {
    return producto.price * producto.quantity;
  };

  const agregarAlCarrito = (producto) => {
    addToCart(producto);
  };




  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((producto) => (
            <div key={producto.id} className="producto-en-carrito">
              <p>{producto.title}</p>
              <p>Cantidad: {producto.quantity}</p>
              <p>Precio Unitario: ${producto.price}</p>
              <p>Precio Total: ${calcularPrecioTotal(producto)}</p>
              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al Carrito
              </button>
              <button onClick={() => removeFromCart(producto.id)}>
                Quitar del Carrito
              </button>
            </div>
          ))}
          <p>Total de Elementos en el Carrito: {totalItems}</p>
          <p>Precio Total del Carrito: ${
            cart.reduce((total, producto) => total + calcularPrecioTotal(producto), 0)
          }</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
