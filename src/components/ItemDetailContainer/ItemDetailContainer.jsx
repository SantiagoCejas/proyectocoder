import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { data } from '../../db/data';
import { useParams } from 'react-router-dom';
import db from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItem = doc(db, 'products', id);
    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setItem(result);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  return loader ? (
    <img
      src="https://acegif.com/wp-content/uploads/loading-25.gif"
      alt={'loading'}
    />
  ) : (
    <ItemDetail {...item} />
  );
};
