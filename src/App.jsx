import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'

import Cart from './Component/Cart/Cart'
import Title from './Component/Title/Title'
import Product from './Component/Product/Product'
import Reference from './Component/Reference/Reference'
import Contact from './Component/Contact/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
  import Heart from './Component/Heart/Heart'
  import Person from './Component/Person/Person'


 function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  

  const [heartItems, setHeartItems] = useState([]);

 const handleAddToHeart = (item) => {
  const updatedHeart = [...heartItems, item];
  setHeartItems(updatedHeart);
  localStorage.setItem('heartItems', JSON.stringify(updatedHeart));
};


  return (
    <>
     <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={
      <>
        <Home />
        <div className='container'>
          <Title titlenew='About' />
          <About />
          <Title titlenew='Product' />
      <Product onAddToCart={handleAddToCart} onAddToHeart={handleAddToHeart} />

          <Title titlenew='Reference' />
          <Reference />
        </div>
        <Title titlenew='Contact' />
        <Contact />
      </>
    } />
    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
    <Route path="/heart" element={<Heart heartItems={heartItems} />} />
    <Route path="/person" element={<Person heartItems={heartItems} />} />
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App




