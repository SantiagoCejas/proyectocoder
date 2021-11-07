import React from 'react'
import productosStock from '../../../db/ProductosStock'

const ItemDetail = ({name, grape, price, image})=> {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{grape}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ItemDetail
