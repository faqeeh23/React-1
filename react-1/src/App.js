import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav  from './cpmponants/nav.js';
import Home from './cpmponants/home.js'
import Fotter from './cpmponants/fotter.js'
import Products from './cpmponants/products.js';
import SubProducts from './cpmponants/subProducts.js';

export default function App() {
  return (
    <BrowserRouter cassName="App ${theme}"> 
      <Nav/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/products' Component={Products}></Route>
        <Route path='/subproducts' Component={SubProducts}></Route>
        <Route path='/about' Component={Home}></Route>
        <Route path='/contact' Component={Home}></Route>
      </Routes>
      <Fotter/>
    </BrowserRouter>
  );
}


