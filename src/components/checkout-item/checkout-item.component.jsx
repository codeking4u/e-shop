import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { id, name, quantity, price } = item;

  const { addItemtoCart, removeItemfromCart, deleteCartItem } =
    useContext(CartContext);

  const deleteItem = (id) => {
    deleteCartItem(id);
  };
  return (
    <div className="checkout-item-container">
      <span>{name}-</span>
      <span>{quantity}-</span>
      <span>{price}-</span>
      <span>{quantity * price}</span>
      <button onClick={() => removeItemfromCart(item)}>-</button>
      <button onClick={() => addItemtoCart(item)}>+</button>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};

export default CheckoutItem;
