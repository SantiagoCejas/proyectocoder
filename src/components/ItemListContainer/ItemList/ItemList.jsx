import React from 'react';
import productosStock from '../../../db/ProductosStock';
import Item from './Item/Item'


const ItemList=({productos}) => {
    return (
        <>
            <div>
                <div>
                    <div className="card-body">
                {productosStock.map((producto) =>
                    <Item key={producto.id} name={producto.name} grape={producto.category} price={producto.price} image={producto.image}/>
                                )
                } 
                </div>
              </div>
            </div>
        </>)
}

export default ItemList
