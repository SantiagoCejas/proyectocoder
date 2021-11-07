import React, {useState, useEffect,} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import productosStock from '../../../db/ProductosStock'


const ItemDetailContainer = () => {
    const [productosDetalle, setProductosDetalle] = useState()
    const [cargando, setCargando] = useState (true)
    
    useEffect (()=>{
        const listaProductos = new Promise ((res, rej) => {
            setTimeout (()=>{
                res(productosStock)
            },1000)
        })
        listaProductos.then((productosStock) =>{
            setProductosDetalle(productosStock)
            setCargando(false)
        })
        
        },[productosDetalle])
    
        return (
            <div>
                {cargando ? <p>Cargando Productos</p>:  <ItemDetail productos{...productos} />}
            </div>
        )
    }


    //No mapear, sino crear buscador

export default ItemDetailContainer
