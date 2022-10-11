import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import {
  CartDropDownConatiner,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const toCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownConatiner>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <EmptyMessage as="span">Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={toCheckout}>Go to checkout</Button>
    </CartDropDownConatiner>
  );
};

export default CartDropdown;
