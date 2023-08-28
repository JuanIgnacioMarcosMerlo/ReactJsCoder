import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item.js';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  let filteredProducts = products;

  if (id === "1") {
    filteredProducts = products.filter(product => product.id >= 1 && product.id <= 10);
  } else if (id === "2") {
    filteredProducts = products.filter(product => product.id >= 11 && product.id <= 20);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {filteredProducts.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
          <Item
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
