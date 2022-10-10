import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { id, name, quantity, price, imageUrl } = item;

  const { addItemtoCart, removeItemfromCart, deleteCartItem } =
    useContext(CartContext);

  const deleteItem = (id) => {
    deleteCartItem(id);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemfromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemtoCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="sub-total">{quantity * price}</span>
      <div className="remove-button" onClick={() => deleteItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
