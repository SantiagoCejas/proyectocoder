import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, category, image, price,grape }) => {
  return (<Link to={`/item/${id}`}>
    <div className="card" >
      <div className="card-header">Cepa: {grape}</div>
        <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <div className={`item_card ${category}-category`}>   
          <span><h3 className="card-title" >{name}</h3></span>
        </div>
        <span> <h4 className="card-text">$ {price} </h4></span>
      </div>
    </div>
</Link>
);
};
