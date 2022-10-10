import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemfromCart: () => {},
  cartCount: 0,
  deleteCartItem: () => {},
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

const deleteItem = (cartItems, productID) => {
  return cartItems.filter((item) => item.id != productID);
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== existingItem.id;
    });
  } else {
    return cartItems.map((item) => {
      if (item.id === productToRemove.id) {
        if (item.quantity !== 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else return;
      } else {
        return item;
      }
    });
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
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

  const deleteCartItem = (productID) => {
    setCartItems(deleteItem(cartItems, productID));
  };

  const removeItemfromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    removeItemfromCart,
    cartCount,
    deleteCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
