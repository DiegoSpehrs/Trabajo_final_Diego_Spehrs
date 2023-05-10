import { useState, useEffect} from 'react';
import {getProducts, getProductListByCategoryId} from "../../asyncMock";
import  {ItemList}  from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const asyncFunc = id ?  getProductListByCategoryId : getProducts;
        
        asyncFunc(id)
             .then(Response => setProducts(Response))
             .catch(error => console.log(error))
    }, [id])

    console.log(products)
    
    

    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}    

    export default ItemListContainer