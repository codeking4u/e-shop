import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

import { ProductsContainer } from "./shop.styles.jsx";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <ProductsContainer>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </ProductsContainer>
  );
};

export default Shop;
