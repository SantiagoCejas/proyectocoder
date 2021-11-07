import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={'HOLA A TODOS'} />}
          />
        </Routes>
      </BrowserRouter>
    
    
    
    
    
    
    
    </>


  );
}

export default App;
