import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const toCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          console.log(cartItem);

          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <Button onClick={toCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
