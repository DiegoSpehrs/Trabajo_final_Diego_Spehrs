import { useState, useEffect} from 'react';
import  {ItemList}  from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { getProducts, getProductsByCategory} from "../../utils"

const ItemListContainer = () => {
   const [estado , setEstado] = useState([])
   const params = useParams()

    useEffect(() => {
        getProducts()
          .then((resultado) => {
            setEstado(resultado);
          })
    }, [params.id])

    return (
        <div>
            <ItemList products={estado}/>
        </div>
    )
}    

    export default ItemListContainer