import React from 'react';
import { useState, useEffect} from 'react';
import  {ItemList}  from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { getProducts, getProductsByCategory} from "../../utils"

const ItemListContainer = () => {
   const [estado , setEstado] = useState([])
   const params = useParams()

   useEffect(() => {
    if(params === estado.category){
        getProductsByCategory(params)
          .then((resultado) => {
            setEstado(resultado)
        })
    }
    else{
        getProducts()
          .then((resultado) => {
            setEstado(resultado);
          })
    }
}, [params.id])

    return (
        <div>
            <ItemList products={estado}/>
        </div>
    )
}    

    export default ItemListContainer