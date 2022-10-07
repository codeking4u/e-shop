import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  let existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, nextItem) => total + nextItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
