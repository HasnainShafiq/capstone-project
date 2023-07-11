import { Button } from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

export const ProductCard = ({ product, className }) => {
  const { name, id, imageUrl, price } = product;


  const {addItemToCart} = useContext(CartContext);

  const addProduct = () => addItemToCart(product);

  return (
    <div className={`flex flex-col w-full overflow-hidden rounded-sm items-center hover:cursor-pointer [&>div]:hover:bg-indigo-950 [&>div]:transition ${className}`}>
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
