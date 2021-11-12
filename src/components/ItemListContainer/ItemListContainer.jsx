import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList/ItemList';
import { data } from '../../db/data';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  console.log(catId);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    getItems.then((res) => {
      catId ? setItems(res.filter((i) => i.category === catId)) : setItems(res);
    });
  }, [catId]);

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
