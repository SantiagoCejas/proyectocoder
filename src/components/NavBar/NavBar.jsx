import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Categories from '../../db/Categories'



const NavBar = () => {
    return (
        <>
        <header className="header">
          <nav className ="navbar">
            <div>
              <img className="logo" src="https://image.flaticon.com/icons/png/128/1200/1200967.png"/>
            </div>
            <div>
          {Categories.map((cat) => {
            return (
              <div className="itemNav" key={cat.grape}>
    
              <NavLink to={cat.url} exact activeClassName="activeClass">
                  {cat.grape}
                </NavLink>
              </div>
            );
          })}
        </div>
       </nav>
        </header>
      </>
      
      );
    };
    export default NavBar