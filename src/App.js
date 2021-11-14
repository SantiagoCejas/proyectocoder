import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import style from './style.css';
import { CartFuncion } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={'Todos los productos'} />}
          />
          <Route
            path="/category/:catId"
            element={<ItemListContainer greeting={'Encontrá el vino que estas buscando'} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </CartFuncion>
      </BrowserRouter>
    </>
  );
}
