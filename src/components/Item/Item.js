import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, img, price, stock}) => {

  return(
    <article className="card">
      <header className='Header'>
        <h2 className="Itemheader">
          {title}
        </h2>
      </header>
      <picture>
          <img src={img} alt={title} className="card__img"/>
      </picture>
      <section>
          <p className="info">
             Precio: ${price}
          </p>
          <p className="info">
            Stock Disponible : {stock}
          </p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>  
  )
}


export default Item