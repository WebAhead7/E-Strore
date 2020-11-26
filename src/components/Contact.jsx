import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Contact = (props) => {
  console.log(props);

  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        pariatur dignissimos quaerat optio eaque veniam praesentium mollitia
        odio perspiciatis obcaecati rerum accusamus amet, corrupti tenetur
        quidem. Illum est magnam id?
      </p>
    </div>
  );
};

export default Rainbow(Contact);
