import { createContext, useState  } from "react";

export const Context = createContext();

const {Provider} = Context

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    console.log(cart)
    
    const addToCart = (product, quantity) => {
       if(!isInCart(product.id)) {
         setCart(prev => [...prev, {product, quantity}])
       } else {
        console.log("ya esta en el carrito")
       }
       
    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    } 

    const ValorDelContexto = {
        Cart : [],
        addToCart : addToCart,
        removeItem : removeItem,
        clearCart : clearCart,
    }

    return (
    <Provider value={ValorDelContexto}>
        {children}
    </Provider>    
    )
}

export default CartProvider; 