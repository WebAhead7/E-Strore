import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
  console.log(props);
  //   setTimeout(() => {
  //     props.history.push('/about');
  //   }, 2000);
  return (
    <nav className='nav-wrapper blue darken-3'>
      <div className='container'>
        <a href='/' className='brand-logo'>
          E-Store
        </a>
        <ul className='right'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
          <NavLink to='/shoppinglist'>ShoppingList</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
