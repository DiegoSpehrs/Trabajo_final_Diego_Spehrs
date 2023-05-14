import { useContext } from "react";
import { createContext, useState  } from "react";

export const Context = createContext();

const {Provider} = Context

const CartProvider = ({children}) => {
    // aca adentro van los metodos addToCart, removeItem, emptyCart, isInCart
    const [cart, setCart] = useState([]);
    const addToCart = (product, quantity) => {
        console.log("save carrito")
        setCart("aca va la modificacion del carrito")
    }

    const ValorDelContexto = {
        Cart : [],
        addToCart : addToCart
    }

    return (
    <Provider value={ValorDelContexto}>
        {children}
    </Provider>    
    )
}

export default CartProvider; 