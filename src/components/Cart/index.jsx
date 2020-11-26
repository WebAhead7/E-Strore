import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function check(arr, el) {
  let check = false;
  for (var i = 0; i < arr.length; i++) {
    check = arr[i] === el ? true : check;
  }
  return check;
}

const Cart = ({ cart, setCart }) => {
  let total = 0;
  let quantity = 1;
  const items = [];
  return (
    <div className='card'>
      {cart.map((item) => (
        <div>
          <span style={{ display: 'none' }}>
            {(total = total + item.price)}
          </span>
          {items.indexOf(item.id) === -1 ? (
            <div>
              <h3>{item.title}</h3>
              <img src={item.image} alt='' className='center'></img>
              <div>${item.price.toFixed(2)}</div>
              <p>{item.description}</p>
              <div>
                Quantity:{' '}
                {cart.reduce(
                  (acc, element) => (element.id === item.id ? acc + 1 : acc),
                  0
                )}
              </div>
              <button
                onClick={(event) => {
                  let wasFound = false;
                  setCart((prevCart) =>
                    prevCart.filter(({ id }) => {
                      if (wasFound) {
                        return true;
                      }

                      if (item.id === id) wasFound = true;

                      return item.id !== id;
                    })
                  );
                }}
              >
                Delete
              </button>
            </div>
          ) : null}
          <span style={{ display: 'none' }}>{items.push(item.id)}</span>

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
