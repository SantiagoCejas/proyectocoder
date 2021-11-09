import React, {useState, useEffect,} from 'react'
import Item from './ItemList/Item/Item'
import ItemList from './ItemList/ItemList'
import productosStock from '../../db/ProductosStock'
import { useParams } from 'react-router'
import Categories from '../../db/Categories'


const ItemListContainer = ({ }) => {
    const [items, setItems] = useState([]);
    const { catId } = useParams();
  
    useEffect(() => {
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          resolve(productosStock);
        }, 1000);
      });
  
      getItems.then((res) => {
        catId ? setItems(res.filter((i) => i.category === catId)) : setItems(res);
      });
    }, [catId]);
  
    return (
      <>
        <ItemList items={items} />
      </>
    );
  };
  
export default ItemListContainer
