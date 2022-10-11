import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
  CartDropDownConatiner,
  ButtonStyled,
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
        {cartItems.map((cartItem) => {
          console.log(cartItem);

          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </CartItems>
      <ButtonStyled onClick={toCheckout}>Go to checkout</ButtonStyled>
    </CartDropDownConatiner>
  );
};

export default CartDropdown;
