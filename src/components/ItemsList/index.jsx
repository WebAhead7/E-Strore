import React from 'react';
import data from '../../data/data';
import { useHistory } from 'react-router-dom';
import PriceFilter from '../PriceFilter';
import CategoryFilter from '../CategoryFilter';

const ItemsList = ({ setCart }) => {
  const [priceFilter, setPriceFilter] = React.useState([0, 1000]);
  const [catFilter, setCatFilter] = React.useState('all');
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

        <button
          onClick={(event) => {
            event.stopPropagation();
            setCart((cart) => [...cart, item]);
            history.push(`/`);
          }}
        >
          Add to Cart
        </button>
      </li>
    ));

  return (
    <div>
      <section className='filters center'>
        <h2>Filters</h2>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>
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

export default ItemsList;
