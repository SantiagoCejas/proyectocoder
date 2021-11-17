import React, {useContext} from "react";
import { Context } from "../Context/CartContext";

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return(
        <>
        {cart.map((item)=>
            <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img className="rounded mx-auto d-block img-cart" alt={item.nombre} src={item.image}/></td>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>${item.precio}</td>
                    <td>{item.subtotal}</td>
                    <th> <button className="btn btn-light" id={item.id}> X </button> </th>
                </tr>
                </tbody>
                </table>
                    </>
            )}
            <div className="total-cart">
                <p>El total del carrito es {total} y tenes {unidades} productos distintos</p>
            </div>
        </>
    )
}

export default Cart