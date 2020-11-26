// does nothing, to create folder
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
const Details = (props) => {
  const params = useParams();
  console.log(params);
  const id = params.id;
  return data.map((item) => {
    if (item.id == id) {
      return (
        <div className='myItem'>
          <h3>{item.title}</h3>
          <img src={item.image} alt='' className='center'></img>
          <div>₪{item.price.toFixed(2)}</div>
          <p>{item.description}</p>
        </div>
      );
    }
  });
};

export default Details;
