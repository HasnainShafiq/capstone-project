import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";
import { ProductCard } from "../../components/UI/product-card/ProductCard";

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="w-full bg-neutral-950 flex justify-center">
      <div className="relative rounded-sm flex justify-center items-center">
        <div className="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 w-full max-w-screen-2xl md:p-4 lg:p-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
