import React from 'react';
import { useParams } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  console.log(cart)
  return (
    <div className="items">
      {
        cart.map((item) => (
          <div>
            <button onClick={(event) => {
              setCart((prevCart) => prevCart.filter(({ id }) => item.id !== id))
            }}
            >Delete
        </button>
            <h3>{item.title}</h3>
            <img src={item.image} alt='' className='center'></img>
            <div>₪{item.price.toFixed(2)}</div>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  );

};


export default Cart;


{/* const Cart = ({ cart }) => {
  return (<div>
    {
      cart.map((item) =>
        <div className="item">
          <button onClick={(event) => {
            setCart((prevCart) => prevCart.filter(({ id }) => item.id !== id))
          }}
          >Delete
        </button>
          <h3>{item.title}</h3>
          <img src={item.image} alt='' className='center'></img>
          <div>₪{item.price.toFixed(2)}</div>
          <p>{item.description}</p>
        </div>

        </div>
  )
}; */}