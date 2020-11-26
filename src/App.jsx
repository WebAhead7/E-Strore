<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import RepoList from './components/RepoList';
import Cart from './components/Cart';
import PriceFilter from './components/PriceFilter';
import CategoryFilter from './components/CategoryFilter';
import Details from './components/Details';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import React from 'react';
=======
import logo from "./logo.svg";
import "./App.css";
import RepoList from "./components/RepoList";
import Cart from "./components/Cart";

import Details from "./components/Details";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import React from "react";
>>>>>>> c4d47fb53726603ffc4f583a6d6122c3c7a0b6a1
import ShoppingList from './components/ShoppingList';

function App() {
<<<<<<< HEAD
  const [priceFilter, setPriceFilter] = React.useState([0, 1000]);
  const [catFilter, setCatFilter] = React.useState('all');
=======
>>>>>>> c4d47fb53726603ffc4f583a6d6122c3c7a0b6a1

  const [cart, setCart] = React.useState([]);
  console.log('mahmood ', cart)
  return (
    <BrowserRouter>
      <div>
        <Navbar countItems={cart.length} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={() => <RepoList setCart={setCart} />} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/shoppingList' component={ShoppingList} />
        <Route path='/product/:id' component={Details} />
<<<<<<< HEAD
        <Route path='/items' component={RepoList} />
        <section className='items'></section>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />

        <div>
          <Cart />
        </div>

        <section className='filters'>
          <h2>Filters</h2>
          <form>
            <PriceFilter
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
            <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
          </form>
        </section>

        <section className='items'>
          <h2>Items</h2>
          <RepoList priceFilter={priceFilter} catFilter={catFilter} />
        </section>
=======
        <Route path="/cart" component={() => <Cart cart={cart} setCart={setCart} />} />

>>>>>>> c4d47fb53726603ffc4f583a6d6122c3c7a0b6a1
        <div>
          <Details />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
