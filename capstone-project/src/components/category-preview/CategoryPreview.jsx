import { Link } from "react-router-dom";
import { ProductCard } from "../UI/product-card/ProductCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export const CategoryPreview = ({title, products, className}) => {

const location = useLocation();

    return (
        <>
        <div className="flex items-baseline justify-between">
          <h2 className="text-left pb-4 uppercase text-neutral-50 text-sm md:text-base font-heading tracking-wide">
            {title}
          </h2>
          {location.pathname === "/shop" ? <Link
            to={`${title}`}
            className="inline-flex items-baseline gap-x-1 text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400"
          >
            <span>See everything</span> <span aria-hidden="true"> &rarr;</span>
          </Link> : <Link
            to={`/shop/${title}`}
            className="inline-flex items-baseline gap-x-1 text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400"
          >
            <span>See everything</span> <span aria-hidden="true"> &rarr;</span>
          </Link>}

        </div>
       
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ${className}`}>
                {
                    products
                    .filter((_, index) => index < 4)
                    .map((product) => 
                    <ProductCard className="md:max-h-96 lg:max-h-none" key={product.id} product={product} />
                  )
                }
            </div>
            </>
    )

}
