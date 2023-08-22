import React from 'react';
import { Routes , Route } from 'react-router-dom';
import ItemListContainer from './Main/ItemListContainer';
import ItemDetailContainer from './Main/ItemDetailContainer';

const Main = () => {
    return (
      <Routes>
        <Route path="/" element={ItemListContainer} />
      <Route path="/category/:id" element={ItemListContainer} />
      <Route path="/item/:id" element={ItemDetailContainer} />
      <Route path="*" element={<h1>Error 404</h1>}/>
      </Routes>
    );
  };
  
  export default Main;
  