import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav  from './cpmponants/nav.js';
import Home from './cpmponants/home.js'
import Fotter from './cpmponants/fotter.js'
import Products from './cpmponants/products.js';

export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/products' Component={Products}></Route>
      </Routes>
      <Fotter/>
    </BrowserRouter>
  );
}


