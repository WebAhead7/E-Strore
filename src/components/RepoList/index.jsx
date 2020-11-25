// does nothing, to create folder
import React from 'react';
import data from '../../data';

const RepoList = (props) => {
  const storeItems = data.map((item) => (
    <li key={item.id} className='card'>
      <h3>{item.title}</h3>
      <img src={item.image} alt='' className='center'></img>
      <div>₪{item.price.toFixed(2)}</div>
      <button>Add to Cart</button>
    </li>
  ));
  return (
    <ul className='grid'>
      {storeItems.length ? (
        storeItems
      ) : (
        <li className='card'>No results found</li>
      )}
    </ul>
  );
};

export default RepoList;
