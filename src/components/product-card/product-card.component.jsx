import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemtoCart } = useContext(CartContext);

  const addToCart = () => {
    addItemtoCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
