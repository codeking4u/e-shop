import { useContext } from "react";

import {
  CartIconContainer,
  ShoppingBagIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingBagIcon />
      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
