import React  from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>

    <BrowserRouter>
      <div className="menu">
          <ul>
          <li><NavLink to="/"> Inicio </NavLink></li>
          <li><NavLink to="/Contacto"> Contacto </NavLink></li>
          <li><NavLink activeclassname="" to="/"> Categorías <li><NavBar /></li> </NavLink></li>
        </ul>
        <CartWidget/>
      </div>
      <Routes>
        <Route
          
          path="/"
          element={
            <ItemListContainer
             />}
          />
        <Route
          path="/category/:catId" //Dos puntos implica que es un parámetro
          element={<ItemListContainer/>}
        />
        <Route path="/item/:productosStock.id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
