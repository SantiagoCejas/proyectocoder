import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, category, image, price,grape }) => {
  return (<Link to={`/item/${id}`}>
    <div className="card" >
        <div className={`item_card ${category}-category`}>
            <div className="card-header">Uva {grape}</div>
              <div className="card-body">
                <span><h3 className="card-title" >{name}</h3></span>
          </div>
          <div>
              <img src={image} alt={name} className="img-fluid card-img-top" />
          </div>
        <span>$ {price}</span>
      </div>
    </div>
</Link>
);
};
