import React from 'react';

const categories = [
  'all',
  'men clothing',
  'jewelery',
  'electronics',
  'women clothing',
];

function CategoryFilter({ catFilter, setCatFilter }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          <input
            type='radio'
            name='categories'
            id={cat}
            className='category-checkbox'
            value={cat}
            checked={cat === catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
          />
          {cat}
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
