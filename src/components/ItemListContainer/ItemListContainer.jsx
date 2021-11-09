import React, {useState, useEffect,} from 'react'
import Item from './ItemList/Item/Item'
import ItemList from './ItemList/ItemList'
import productosStock from '../../db/ProductosStock'
import { useParams } from 'react-router'
import Categories from '../../db/Categories'


    const ItemListContainer = ({category}) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          resolve(productosStock);
        }, 1000);
      });
  
      getItems.then((res) => {
        categoryId ? setItems(res.filter((i) => i.category === categoryId)) : setItems(res);
      });
    }, [categoryId]);
  
    return (
      <>
        <ItemList items={items} />
      </>
    );
  };
  
export default ItemListContainer
