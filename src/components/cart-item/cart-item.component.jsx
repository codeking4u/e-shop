import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  console.log("asd" + item);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
