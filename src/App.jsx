import logo from './logo.svg';
import './App.css';
import RepoList from './components/RepoList';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Details from './components/Details';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ShoppingList from './components/ShoppingList';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/shoppingList' component={ShoppingList} />
        <Route path='/product/:id' component={Details} />
        <Route path='/items' component={RepoList} />
        <section className='items'>
        </section>
        <div>
          <Cart />
        </div>
        <div>
          <Filter />
        </div>
        <div>
          <Details />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
