import React, {useState, useContext} from 'react';
import ItemCount from '../../NavBar/CartWidget/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/CartContext';


export const ItemDetail = ({ id, name, image, price, grape, desc, stock }) => {

  const [buy, setBuy] = useState (false)
  const toCart = (props) =>{
    setBuy(true)
    alert(`agregaste ${props.unidades} unidades a tu carrito`)
  }
  return !id ? (
    <h1>Ups, este item no existe!</h1>

  ) : (<>
    <div className="detailContainer">
      <div className="imgDetail">
        <img className="img-fluid img-detail" src={image} alt={name} />
      </div>
      <div className="productInfo">
        <div className="row">
          <h3> {grape}</h3>
        </div>
        <div className="row">
          <h1 className="nameDetail">{name}</h1>
        </div>
        <div className="row">
          <p>{desc}</p>
        </div>
        <div className="row">
          <h3 className="priceDetail">${price}</h3>
        </div>
      </div>
    </div>
    <div>
    {!buy ? <ItemCount stock={stock} onAdd = {toCart}/> : <Link to='/cart'><button>Terminar compra</button></Link>}
    </div>
    </>
  )
  }