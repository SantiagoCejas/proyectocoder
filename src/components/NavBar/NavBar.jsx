import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import categories from './../../db/categories'


export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.flaticon.com/512/683/683981.png" alt="WineClub" width="90" height="65"/></Link>

      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              style={({ isActive }) => {
                return {
                  color: isActive && 'white',
                  fontSize: isActive && '25px',
                  flexDirection: isActive && 'column',
                };
              }}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
      </div>
    </nav>
  );
};



