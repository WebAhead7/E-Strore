import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const Cart = ({ cart, setCart }) => {
  let total = 0;

  return (
    <div className='card'>
      {cart.map((item) => (
        <div>
          <span style={{ display: 'none' }}>
            {(total = total + item.price)}
          </span>

          <h3>{item.title}</h3>
          <img src={item.image} alt='' className='center'></img>
          <div>${item.price.toFixed(2)}</div>
          <p>{item.description}</p>
          <button
            onClick={(event) => {
              setCart((prevCart) =>
                prevCart.filter(({ id }) => item.id !== id)
              );
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
      <div>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
