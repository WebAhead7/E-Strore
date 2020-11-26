import React from 'react';
import Rainbow from '../hoc/Rainbow';
const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About Us</h4>
      <h6 className='center'>SHOP {'&'} SHIP ALL OVER THE WORLD!</h6>
      <br />
      <p>
        We ship to over 200 locations worldwide! Thanks to our partnership with
        Borderfree Ecommerce, a trusted third-party service, you can send your
        estore.com purchases around the globe with ease and confidence. When you
        place an international order, your transaction will be with Borderfree,
        but if you have questions, concerns or customer service needs, our
        macys.com associates will be happy to help you!
      </p>
      <br />
      <p>
        You can shop estore.com in your preferred currency–even if it doesn't
        match the currency of the shipping destination. Your order total is
        guaranteed at the exchange rate set when your order is placed. Orders
        shipped to the United States must have a U.S. credit card billing
        address to be placed online.
      </p>
    </div>
  );
};

export default Rainbow(About);
