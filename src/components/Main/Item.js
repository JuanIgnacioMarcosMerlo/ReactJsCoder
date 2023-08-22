import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id }) => {
  return (
    <div>
      <h3>Item Title</h3>
      <Link to={`/item/${id}`}>View Details</Link>
    </div>
  );
};

export default Item;
