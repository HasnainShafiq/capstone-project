import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/UI/product-card/ProductCard";

export const Category = () => {

    const {category} = useParams();

    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
      
        setProducts(categoriesMap[category])

    }, [categoriesMap, category])
    

    return (

        <div className="w-full bg-neutral-950 flex justify-center">
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
          <h1 className="text-left uppercase pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
            {category}
          </h1>

        <>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {
            products && products.map((product) => 
                <ProductCard key={product.id} product={product} />
            )
        }
            </div>;
        </>

       
      </div>

    </div>

    )
}