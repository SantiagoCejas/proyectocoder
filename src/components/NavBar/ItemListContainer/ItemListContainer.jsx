import React, {useState, useEffect,} from 'react'
import productosStock from '../../../db/ProductosStock'
import Item from './ItemList/Item/Item'
import ItemList from './ItemList/ItemList'


const ItemListContainer = (props) => {
const [productos, setProductos] = useState()
const [cargando, setCargando] = useState (true)

useEffect (()=>{
    const listaProductos = new Promise ((res, rej) => {
        setTimeout (()=>{
            res(productosStock)
        },1000)
    })
    listaProductos.then((productosStock) =>{
        setProductos(productosStock)
        setCargando(false)
    })
    
    },[productos])

    return (
        <div>
            {cargando ? <p>Cargando Productos</p>:  <ItemList productos{...productos} />}
        </div>
    )
}

export default ItemListContainer
