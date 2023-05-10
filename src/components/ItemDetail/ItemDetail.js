import React from 'react'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id , title, img , category, description, price, stock}) => {

  
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        </footer>
      </article>        
  )
}

export default ItemDetail
