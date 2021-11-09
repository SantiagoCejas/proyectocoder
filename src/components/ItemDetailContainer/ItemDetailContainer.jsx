import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import productosStock from '../../db/ProductosStock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoader(true);
        const getItems = new Promise((resolve) => {
          setTimeout(() => {
            resolve(productosStock);
          }, 500);
        });
        /*useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])*/
    
        getItems
          .then((res) => {
            setItem(res.find((i) => i.id === id));
          })
          .finally(() => setLoader(false));
      }, [id]);
    
      return loader ? <h3>Cargando...</h3> : <ItemDetail {...item} />;
    };

export default ItemDetailContainer
