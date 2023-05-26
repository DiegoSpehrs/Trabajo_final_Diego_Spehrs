import { useContext } from "react";
import {Context} from '../CartContext/CartContext'



const CartWidget = () => {
    const {totalQuantity} = useContext(Context)
    
  return (
      <p><span className="material-icons">shopping_cart</span>{totalQuantity}</p>
    );
  };
  
  export default CartWidget;