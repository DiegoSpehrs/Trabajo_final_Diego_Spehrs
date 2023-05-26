import { createContext, useState  } from "react";

export const Context = createContext();

const {Provider} = Context

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
   
    
    const addToCart = (product, quantity) => {
       if(!isInCart(product.id)) {
          console.log(product)
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

    const calcularTotal  = (cart) => {
        const resultadoReduce = cart.reduce((total, item) => total + item.quantity, 0);
        return resultadoReduce;
    }

    function getTotalPrice(cart) {
        let total = 0;
        for (let item of cart) {
          if (item.product && typeof item.product.price === 'number' && typeof item.quantity === 'number') {
            total += item.product.price * item.quantity;
          }
        }
        return total;
      }

    const ValorDelContexto = {
        cart : cart,
        addToCart : addToCart,
        removeItem : removeItem,
        clearCart : clearCart,
        totalQuantity : calcularTotal(cart),
        total: getTotalPrice(cart)
    }

   

    return (
    <Provider value={ValorDelContexto}>
        {children}
    </Provider>    
    )
}

export default CartProvider; 