import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <div>
                <CartWidget/>
            </div>
            <div>
                <p>Home</p>
                <p>Productos</p>
                <p>Nosotros</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}
