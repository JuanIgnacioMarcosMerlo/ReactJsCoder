import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { CartProvider } from './components/CartContext'; 



function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <Header />   
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

