import React from 'react';
import { Route, Routes } from "react-router-dom";
import ItemListContainer from './Main/ItemListContainer';
import ItemDetailContainer from './Main/ItemDetailContainer';
import Carrito from './Main/Carrito';



const Main = () => {
    return (
      <Routes>
        <Route path="/" element={< ItemListContainer />} />
        <Route path="/Categoria/:id" element={< ItemListContainer />} />
        <Route path="/item/:id" element={< ItemDetailContainer />} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="*" element={<h1>Error 404</h1>}/>
      </Routes>
    );
  };
  
  export default Main;
  