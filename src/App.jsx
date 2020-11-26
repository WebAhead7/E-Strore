import logo from './logo.svg';
import './App.css';
import RepoList from './components/RepoList';
import Cart from './components/Cart';

import Details from './components/Details';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import React from 'react';
import ShoppingList from './components/ShoppingList';

function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <BrowserRouter>
      <div>
        <Navbar countItems={cart.length} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route
          exact
          path='/'
          component={() => <RepoList setCart={setCart} />}
        />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/shoppingList' component={ShoppingList} />
        <Route path='/product/:id' component={Details} />
        <Route
          path='/cart'
          component={() => <Cart cart={cart} setCart={setCart} />}
        />

        <div>
          <Details />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
