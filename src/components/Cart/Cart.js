import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import {Link} from "react-router-dom";
import {enviarVentaAFirebase} from '../../utils';
import {useState} from 'react';


const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem,} = useContext(Context);
    const [idVenta, setIdVenta] = useState(null);
    
    const handleRemoveItem = (id) => {
        removeItem(id);
    }

    const handleClickEnviarVenta = () => {
        

        const venta = {cart};
  
        enviarVentaAFirebase(venta)
            .then((id) => {
            setIdVenta(id);
        })
        .catch((error) => {
        console.error('Error al enviar la venta a Firebase:', error);
        });

        return idVenta
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
           <>
           <div>
                <ul>
                    {cart.map((items, index) => (
                        <li key={index}> 
                            <div>
                                <h2>{items.product.title}</h2>
                                {console.log(items)}
                                <p>Cantidad: {items.quantity}</p>
                                <p>Precio: ${items.product.price}</p>
                            </div>
                            <button onClick={() => handleRemoveItem(items.product.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>,
             
            <div>
                <h1>Total: ${total}</h1>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button onClick={handleClickEnviarVenta}>Comprar</button>
            </div>
            </>
        )
        
    }  
}

export default Cart;