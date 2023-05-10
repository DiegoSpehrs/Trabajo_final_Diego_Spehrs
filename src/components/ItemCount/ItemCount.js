import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };
  
  const decrement = () => {
    if (quantity > initial) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="button" onClick={decrement}>
          -
        </button>
        <h4 className="number">{quantity}</h4>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;