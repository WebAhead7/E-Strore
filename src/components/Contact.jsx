import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Contact = (props) => {
  console.log(props);

  return (
    <div className='container'>
      <h4 className='center'>Contact Us</h4>
      <h6 className='center'>How Can We Help?</h6>
      <p>We can't help you {':('}</p>
    </div>
  );
};

export default Rainbow(Contact);
