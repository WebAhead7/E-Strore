import React from "react";

function PriceFilter({ priceFilter, setPriceFilter }) {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="min">
        Min Price
        <input
          type="range"
          id="min"
          value={priceFilter[0]}
          min="0"
          max="1000"
          step="50"
          onChange={(event) =>
            setPriceFilter([event.target.value, priceFilter[1]])
          }
        />
      </label>
      <label htmlFor="max">
        Max Price
        <input
          type="range"
          id="max"
          value={priceFilter[1]}
          min="0"
          max="1000"
          step="50"
          onChange={(event) =>
            setPriceFilter([priceFilter[0], event.target.value])
          }
        />
      </label>
    </fieldset>
  );
}

export default PriceFilter;
