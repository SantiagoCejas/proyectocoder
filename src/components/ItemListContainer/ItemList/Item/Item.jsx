import React from 'react'
import { Link } from 'react-router-dom'

const Item =({id, name, grape, price, image})=> {
    return (
        <>
        <Link to={`/vino/${id}`}>
            <div class="contenedorProducto">
                <div>
                    <img className="img-fluid" src={image} alt={name} />
                </div>
                <div className="detalleHome">
                    <h3>{name}</h3>
                    <p>{grape}</p>
                    <p>${price}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Item