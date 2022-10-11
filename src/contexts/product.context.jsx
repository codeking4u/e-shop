import { useState, createContext, useEffect } from "react";

import SHOP_DATA from "../shop-data";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("here");
    addCollectionAndDocuments("categories", SHOP_DATA);
    console.log("after");
  }, []);

  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
