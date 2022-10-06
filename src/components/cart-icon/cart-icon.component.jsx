import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">20</span>
    </div>
  );
};

export default CartIcon;
