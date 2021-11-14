import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) =>{
        const itemExiste=cart.find(item=>item.id===producto.id)
        if(!itemExiste){
            setCart([...cart, {id:producto.id, nombre:producto.name, precio:producto.price, cantidad:cantidad, subtotal:(producto.price*cantidad)}])
            setTotal(total+(producto.price*cantidad))
            setUnidades(unidades+1)
        } else {
            const cartAux=cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.price*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.price*cantidad))
        }
    } 
    
    return <Context.Provider value={{cart, unidades, total, onAdd}}>
        {children}
    </Context.Provider>

    }


export {CartFuncion, Context }