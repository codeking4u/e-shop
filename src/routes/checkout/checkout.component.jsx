import { useContext, useEffect } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  useEffect(() => setIsCartOpen(false), []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-clock">
          <span>prduct</span>
        </div>
        <div className="header-clock">
          <span>Description</span>
        </div>
        <div className="header-clock">
          <span>Quantity</span>
        </div>
        <div className="header-clock">
          <span>Price</span>
        </div>
        <div className="header-clock">
          <span>Sub-Total</span>
        </div>
        <div className="header-clock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <span className="total">Total 0</span>
    </div>
  );
};

export default Checkout;
