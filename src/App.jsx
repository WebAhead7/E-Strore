import './App.css';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import React from 'react';

function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <BrowserRouter>
      <Navbar countItems={cart.length} />
      <Route exact path='/' component={() => <ItemsList setCart={setCart} />} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route
        path='/product/:id'
        component={() => <Details setCart={setCart} />}
      />
      <Route
        path='/cart'
        component={() => <Cart cart={cart} setCart={setCart} />}
      />

      <div>
        <Details />
      </div>
    </BrowserRouter>
  );
}

export default App;
