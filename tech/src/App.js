// import logo from './logo.svg';
import './App.css';

import { ReactDom } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Phones from './components/Mobiles';
import Laptops from './components/Laptops';
import Login from './components/Login';
import Data from './components/Data';
import Cart from './components/Cart';
import TV from './components/TV';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mobiles" component={Phones} />
      <Route exact path="/laptops" component={Laptops} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
