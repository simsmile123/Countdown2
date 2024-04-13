import React from 'react';

function Basket({ basket }) {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> by {item.author} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
