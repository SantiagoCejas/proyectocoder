import React from 'react';

export const ItemDetail = ({ id, name, image, price, grape, desc }) => {
  return !id ? (
    <h1>Ups, este item no existe!</h1>

  ) : (
    <>
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
        <button className="btn btn-light">
          Comprar
        </button>
      </div>

    </div>
    </>
  );
};
