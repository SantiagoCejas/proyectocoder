import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Categories from '../../db/Categories'



const NavBar = () => {
    return (
        <>
        <header>
          <nav className ="navbar navbar-expand-lg navbar-light-disabled-color">
            <div class="container-fluid">
                <Link path to="/">
                  <div className="navbar-brand">
                    <img src="https://image.flaticon.com/icons/png/128/1200/1200967.png"/>
                  </div>
                </Link>
             <div>
              {Categories.map((cat) => {
                return (
                  <>
                    <div className="nav-item" key={cat.grape}>
                      <NavLink to={cat.url} activeClassName="activeClass"> {cat.grape}</NavLink>
                    </div>
                  </>
            );
          })}
            </div>
        </div>
        <div>
          <CartWidget/>
        </div>
       </nav>
        </header>
      </>
      
      );
    };
    export default NavBar