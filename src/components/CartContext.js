import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }   
            return item;
        });
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalItems(totalItems + 1);
};
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        const newTotalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
        setCart(updatedCart);
        setTotalItems(newTotalItems);
    };
    const contextValue = {
        cart,
        totalItems,
        addToCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
