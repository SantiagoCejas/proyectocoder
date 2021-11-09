import React  from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="menu">
          <NavBar/>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
             />}
          />
        <Route
          path="/category/:categoryId" //Dos puntos implica que es un parámetro
          element={<ItemListContainer/>}
        />
        <Route path="/item/:productosStock.id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
