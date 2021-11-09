import React from 'react';
import productosStock from '../../../db/ProductosStock';
import Item from './Item/Item'


const ItemList=({productos}) => {
    return (
        <>
            <div>
                {productosStock.map((producto) =>
                    <Item key={producto.id} name={producto.name} grape={producto.grape} price={producto.price} image={producto.image}/>
                                )
                } 
            </div>
        </>)
}

export default ItemList
