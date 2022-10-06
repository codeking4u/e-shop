import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map(({ id, name }) => {
        return <ProductCard key={id} name={name}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
