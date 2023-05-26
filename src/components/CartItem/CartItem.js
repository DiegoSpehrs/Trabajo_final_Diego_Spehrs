import React from 'react'
import { Context,} from '../CartContext/CartContext'
import { useContext } from 'react'


const CartItem = (p) => {
  const {title, quantity, price} = useContext(Context)
    console.log(title, quantity, price)
    console.log(p)
    return (
        
        <tr>
            <td>{title}</td>
            <td>x{quantity}</td>
            <td>${price}</td>
        </tr>
        
  )
}

export default CartItem
