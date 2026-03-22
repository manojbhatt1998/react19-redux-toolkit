import { useState } from 'react';
import './App.css';
import Header from './Header';
import Products from './Products';
import CartList from '../CartList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
