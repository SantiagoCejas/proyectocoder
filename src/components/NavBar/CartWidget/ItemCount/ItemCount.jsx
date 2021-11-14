import React, {useState} from "react";

const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)


    const handleStock ={
        sumaStock:()=>{
          if (stock===0){
            alert('No hay más stock')}
            else{
              setUnidades(unidades + 1)
              setStock (stock - 1)
            }
          },
        
        restaStock:()=>{
            if (unidades===0){
              alert('No podes comprar menos de cero')}
              else{
                setUnidades(unidades - 1)
                setStock (stock + 1)
              }
            }
        }

    return(
        <div>
            <h3>Cantidades a comprar</h3>
            <div className='btn-group' role="group">
                <button onClick={handleStock.restaStock} className='btn btn-light'>-</button>
                <p  >{unidades}</p>
                <button onClick={handleStock.sumaStock} className='btn btn-light'>+</button>
            </div>
            <div className='stockDetail'>
                <p >Stock disponible {stock}</p>
            </div>
            <div>
                <button className='btn btn-light' onClick={()=>props.onAdd({unidades})}>Agregar al carrito</button>
            </div>
        </div>
    )

    }
export default ItemCount