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
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <div>
          <RepoList />
        </div>
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
