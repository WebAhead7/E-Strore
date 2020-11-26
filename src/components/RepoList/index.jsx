// does nothing, to create folder
import React from 'react';
import data from '../../data/data';
import { useHistory } from 'react-router-dom';

const RepoList = ({ priceFilter, catFilter }) => {
  const [minPrice, maxPrice] = priceFilter;
  const history = useHistory();
  const storeItems = data
    .filter((item) => item.price >= minPrice && item.price <= maxPrice)
    .filter((item) => catFilter === 'all' || catFilter === item.category)
    .map((item) => (
      <li
        key={item.id}
        className='card'
        onClick={() => {
          history.push(`/product/${item.id}`);
        }}
      >
        <h3>{item.title}</h3>
        <img src={item.image} alt='' className='center'></img>
        <div>${item.price.toFixed(2)}</div>
        <button>Add to Cart</button>
      </li>
    ));
  return (
    <div>
      <h4>Our items</h4>
      <ul className='grid'>
        {storeItems.length ? (
          storeItems
        ) : (
          <li className='card'>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default RepoList;
