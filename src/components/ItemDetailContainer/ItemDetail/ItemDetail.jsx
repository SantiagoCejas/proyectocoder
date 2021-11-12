import React from 'react';

export const ItemDetail = ({ id, name, image, price, grape }) => {
  return !id ? (
    <h1>Ups, este item no existe!</h1>
  ) : (
    <>
      <div>
        <div className="contenedorProducto">
          <div>{name}</div>
          <div>
            <h3>Cepa: {`${grape}`}</h3>
          </div>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>$ {price}</div>
        </div>
      </div>
    </>
  );
};
