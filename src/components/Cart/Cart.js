import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import {Link} from "react-router-dom";
import { crearVenta } from "../../utils";

const Cart = () => {
    const { Cart, clearCart, totalQuantity, total} = useContext(Context);

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
                <h1>Tu carrito</h1>
                {Cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to='/chekout' onClick={crearVenta}>Finalizar compra</Link>
                
            </div>
        )
    }  
}

export default Cart;