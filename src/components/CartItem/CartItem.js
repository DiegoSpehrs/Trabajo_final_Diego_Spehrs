import React from 'react'
import { Context } from '../CartContext/CartContext'
import { useContext } from 'react'

const CartItem = (p) => {
  const {img, title, quantity, price} = useContext(Context)
  
    return (
        <article>
            <header>
                <h2>
                 {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Cantidad: {quantity}
                </p>
            </section>
        </article>

  )
}

export default CartItem
