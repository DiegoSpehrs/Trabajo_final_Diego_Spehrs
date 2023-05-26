import React, { useContext, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Context} from "../CartContext/CartContext"
import { Link } from 'react-router-dom'



const ItemDetail = ({id , title, img , category, description, price, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const {addToCart} = useContext(Context) 

  const handelOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {
          id, title, price,
      }

      addToCart(item, quantity)
  } 
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {title}
        </h2>
      </header>
      <img src={img} alt={title} className="ItemImg"/>
      <section>
        <p className="info">
          categoria: {category}
        </p>
        <p className="info">
          Descripcion: {description}
        </p>
        <p className="info">
          Precio: ${price}  
        </p> 
        <p className="info">
          Id: {id}  
        </p> 
        </section>
        <footer className="ItemFooter">
          {
            quantityAdded > 0 ? (
              <Link to="/cart">terminar compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handelOnAdd}/>
            )
          }
        </footer>
      </article>        
  )
}

export default ItemDetail
