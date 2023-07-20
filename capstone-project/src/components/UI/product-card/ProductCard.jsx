import { Button } from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

export const ProductCard = ({ product, className }) => {
  const { name, id, imageUrl, price } = product;


  const {addItemToCart} = useContext(CartContext);

  const addProduct = () => addItemToCart(product);

  return (
    <div className={`flex flex-col relative w-full overflow-hidden rounded-sm items-center group [&>div]:hover:bg-indigo-950 [&>div]:transition ${className}`}>

        <span onClick={addProduct} className="hidden absolute z-10 top-1/2 transform -translate-y-1/2 group-hover:block group-active:block group-focus:block uppercase font-body font-bold tracking-wider text-neutral-50 border border-white py-2 mx-auto px-4 max-w-fit text-sm md:text-md lg:text-lg hover:bg-indigo-900 focus-within:bg-indigo-900 focus:bg-indigo-900 active:bg-indigo-900 hover:cursor-pointer hover:text-neutral-50 transition-colors">ADD TO CART</span>
 
      <img
        src={imageUrl}
        className="w-full h-[100%] hover:brightness-90  object-cover"
        alt={`
        ${name}
      `}
      />

      <div className="flex flex-col gap-1 justify-center items-center text-neutral-50 w-full font-body uppercase font-bold text-sm h-16 bg-indigo-900 md:flex-row md:space-y-0 md:justify-between md:h-auto md:px-2 md:py-4 md:items-center transition">
        <h3 className="text-xs font-bold lg:font-extrabold font-sans sm:text-sm ">{name}</h3>
        <p className="inline-flex text-md items-center justify-around whitespace-pre">
          <span
            className="font-body max-w-fit"
            aria-hidden="true"
          >
            {" "}
            &rarr;
          </span>
          <span className="font-normal font-body"> £{price}</span>
        </p>
      </div>
      {/* <div>
        <Button buttonType='formSubmit' onClick={addProduct}>Add to cart</Button>
      </div> */}
    </div>
  );
};
