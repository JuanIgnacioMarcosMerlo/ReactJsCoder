import React from 'react';
import './style.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />   
      <ItemListContainer greeting={'Hola a todos'} />   
      <Main />
      <Footer />
    </div>
  );
}

export default App;

