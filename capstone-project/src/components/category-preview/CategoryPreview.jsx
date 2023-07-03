import { ProductCard } from "../UI/product-card/ProductCard";


export const CategoryPreview = ({title, products, className}) => {

    return (
        <>
        <div className="flex items-center justify-between">
          <h2 className="text-left pb-4 text-neutral-50 text-sm md:text-base font-heading tracking-wide">
            {title}
          </h2>
          <a
            href="#"
            className="hidden text-sm font-body uppercase font-semibold text-neutral-50 hover:text-neutral-400 sm:block"
          >
            See everything <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
       
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ${className}`}>
                {
                    products
                    .filter((_, index) => index < 4)
                    .map((product) => <ProductCard
                    className="md:max-h-96 lg:max-h-none"
                    key={product.id} product={product} />)
                }
            </div>
            </>
    )

}
