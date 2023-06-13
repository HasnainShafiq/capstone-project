import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/UI/product-card/ProductCard";
import { Button } from "../../components/UI/button/Button";
import { CartContext } from "../../contexts/cart.context";

const ProductPage = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  
  const params = useParams();
  
  const productId = Number(params.productId);
  
  const product = products.find((product) => product.id === productId);
  
  const {addItemToCart} = useContext(CartContext);
  
  const addProduct = () => addItemToCart(product);
  
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="relative py-8 flex flex-col items-center px-4 w-full sm:py-10 lg:grid lg:grid-cols-2 lg:justify-items-center lg:mx-auto lg:max-w-screen-md lg:px-8">
        <div className="lg:col-start-1">
          <img className="max-w-sm h-auto" src={product.imageUrl} alt="" />
        </div>
        <section className="relative text-left lg:col-start-2 flex flex-col space-y-4">
        <h2 className="font-body uppercase text-xl font-bold text-neutral-50">{product.name}</h2>
        <p className="font-body uppercase text-neutral-50">
          Price: £{product.price}
        </p>
        <Button buttonType='formSubmit' onClick={addProduct}>Add to cart</Button>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
