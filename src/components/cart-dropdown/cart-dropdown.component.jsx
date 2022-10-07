import { useContext } from "react";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          console.log(cartItem);

          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
