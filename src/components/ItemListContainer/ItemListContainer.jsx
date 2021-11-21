import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList/ItemList';
import { data } from '../../db/data';
import { useParams } from 'react-router-dom';
import Slider from './Slider/Slider';
import db from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItems = catId
      ? query(collection(db, 'products'), where('category', '==', catId))
      : collection(db, 'products');

  
    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setItems(results);
      })
      .finally(() => setLoader(false));
  },[catId])

  return (
    <>
      <h3 className="title">{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
