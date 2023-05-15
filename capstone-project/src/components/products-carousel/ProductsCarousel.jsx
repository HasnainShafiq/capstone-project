import { ProductCard } from "../UI/product-card/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import './products-carousel.scss'

export const ProductsCarousel = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="bg-neutral-950 pb-4">
      <div className="py-8 px-4 sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-left pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
            Trending products
          </h2>
            <a
              href="#"
              className="hidden text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400 sm:block"
            >
              See everything <span aria-hidden="true"> &rarr;</span>
            </a>
        </div>

        <div className="relative">
          <div className="products-container relative -mb-6 w-full overflow-x-auto pb-6">
            <ul role="list" className="inline-flex space-x-6">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="inline-flex w-60 md:w-72 h-auto flex-col text-center lg:w-80"
                >
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center sm:hidden">
          <a
            href="#"
            className="text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};