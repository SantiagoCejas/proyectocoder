import React from 'react';

export const ItemDetail = ({ id, name, image, price, grape, desc }) => {
  return !id ? (
    <h1>Ups, este item no existe!</h1>

  ) : (
    <>
    <div className="container px-4">
      <div>
        <div className="col">
          <div className="row">
            <img className="img-fluid img-detail" src={image} alt={name} />
          </div>
        </div>
      </div>
      <div>
        <div className="col">
          <div className="row">
            <h3> {grape}</h3>
          </div>
          <div className="row">
            <h1>{name}</h1>
          </div>
          <div className="row">
            <h3>${price}</h3>
          </div>
          <div className="row">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};
