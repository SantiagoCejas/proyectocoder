import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, category, image, price,grape }) => {
  return (<Link to={`/item/${id}`}>
    <div className="card" >
      <div className="card-header">{grape}</div>
        <img src={image} alt={name} className="card-img-top " />
      <div className="card-body">
        <div className={`item_card ${category}-category`}>   
          <span><p className="card-title" >{name}</p></span>
        </div>
        <span> <p className="card-text">$ {price} </p></span>
      </div>
    </div>
</Link>
);
};
