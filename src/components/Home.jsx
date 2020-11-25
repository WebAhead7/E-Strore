import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='center'>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
      </div>
    </div>
  );
};

export default Home;
