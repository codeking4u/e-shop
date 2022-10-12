import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  console.log("asd" + item);
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
