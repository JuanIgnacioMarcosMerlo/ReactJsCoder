import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, image, price }) => {
  return (
    <div className="item">
      <img src={image} alt={title} className="item-image" />
      <h3 className="item-title">{title}</h3>
      <p className="item-price">${price}</p>
      <Link to={`/item/${id}`} className="item-details-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
