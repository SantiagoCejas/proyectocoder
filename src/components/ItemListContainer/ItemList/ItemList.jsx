import React from 'react';
import { Item } from './Item/Item';

export const ItemList = ({ items }) => {
  return (
    <section className="productsContainer">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>

  );
};

