import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item.js';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products${id ? `/category/${id}` : ''}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Item id={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
