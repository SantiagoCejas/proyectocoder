import React from 'react'

const ItemDetail = ({name, image, price}) => {
    return (
        <>
        <div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>$ {price}</p>
        </div>
      </>
    )
}

export default ItemDetail
