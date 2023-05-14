import { useState } from "react";

const ItemCount = () => {
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1)
    }
    
    const handleDecrement = () => {
      setQuantity(quantity - 1)
    
  }

  const elRetorno = {
    value : quantity,
    increment: handleIncrement,
    decrement: handleDecrement,
  }

  return elRetorno
}

export default  ItemCount;
