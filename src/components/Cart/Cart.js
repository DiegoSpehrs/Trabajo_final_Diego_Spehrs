import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import {Link} from "react-router-dom";
import { crearVenta } from "../../utils";


const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem} = useContext(Context);
    
    console.log(cart)
  
    
    const handleRemoveItem = (id) => {
        removeItem(id);
    }
   
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>no hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }
    else{ 
        return (
           <div>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}> 
                            <div>
                                <h2>{item.title}</h2>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: ${item.price}</p>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>,
             
            <div>
                <h1>Total: ${total}</h1>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button onClick={crearVenta}>Comprar</button>
            </div>
        )
    }  
}

export default Cart;