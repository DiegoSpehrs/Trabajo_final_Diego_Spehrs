import ItemCount from "../../hooks/ItemCount";
import { crearVenta } from "../../utils";

const Cart = () => {
    const {value,decrement} = ItemCount()

    return (
        <div>
            <h2>Carrito</h2>
            {value}
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Cart;