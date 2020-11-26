import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import { useHistory } from 'react-router-dom';

const Details = (props) => {
  const { setCart } = props;
  const history = useHistory();

  const params = useParams();
  const id = params.id;
  return data.map((item) => {
    if (item.id == id) {
      return (
        <div className='card center'>
          <h3>{item.title}</h3>
          <img src={item.image} alt='' className='center'></img>
          <div>${item.price.toFixed(2)}</div>
          <p>{item.description}</p>
          <button
            onClick={(event) => {
              event.stopPropagation();
              setCart((cart) => [...cart, item]);
              history.push(`/`);
            }}
          >
            Add to Cart
          </button>
        </div>
      );
    }
  });
};

export default Details;
