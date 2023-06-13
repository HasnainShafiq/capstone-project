import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";
import { ProductCard } from "../../components/UI/product-card/ProductCard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="w-full bg-neutral-950 flex justify-center">
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
        <div className="md:pl-4 lg:pl-6">
          <h1 className="text-left pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">Products</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-x-4 gap-y-4 w-full md:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl md:p-4 lg:p-6">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
