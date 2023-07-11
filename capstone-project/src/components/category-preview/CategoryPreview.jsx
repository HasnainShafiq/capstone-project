import { Link } from "react-router-dom";
import { ProductCard } from "../UI/product-card/ProductCard";


export const CategoryPreview = ({title, products, className}) => {

    return (
        <>
        <div className="flex items-baseline justify-between">
          <h2 className="text-left pb-4 text-neutral-50 text-sm md:text-base font-Nofex tracking-wide">
            {title}
          </h2>
          <Link
            to={`shop/${title}`}
            className="inline-flex items-baseline gap-x-1 text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400"
          >
            <span>See everything</span> <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
       
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ${className}`}>
                {
                    products
                    .filter((_, index) => index < 4)
                    .map((product) => <Link key={product.id} to={`/shop/${title}/${product.id}`}>
                    <ProductCard className="md:max-h-96 lg:max-h-none" product={product} />
                  </Link> )
                }
            </div>
            </>
    )

}
