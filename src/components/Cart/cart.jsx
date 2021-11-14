import React, {useContext} from "react";
import { Context } from "../Context/CartContext";

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return(
        <>
        <p>El total del carrito es {total} y tenes {unidades} unidades</p>
        {cart.map((item)=>
            <div>
                <img src={item.image}/>
                <h2>Nombre:{item.nombre}</h2>
                <h2>Precio:$ {item.precio}</h2>
                <h2>Cantidad:{item.cantidad}</h2>
                <h2>Subtotal:{item.subtotal}</h2> 
            </div>
            )}
        </>
    )
}

export default Cart