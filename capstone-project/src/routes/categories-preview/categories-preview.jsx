import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import { ProductCard } from "../../components/UI/product-card/ProductCard";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="w-full bg-neutral-950 flex justify-center">
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
        <div className="md:pl-4 lg:pl-6">
          <h1 className="text-left pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
            Products
          </h1>
        </div>

        <>
        <div className="max-w-screen-2xl text-left md:p-4 lg:p-6">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
              return (
              <CategoryPreview
                key={title}
                title={title}
                products={products}
              />
              )
          })}
            </div>;
        </>

        {/* {categoriesMap[title].map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                ))} */}
      </div>
      <Outlet />
    </div>
  );
};
