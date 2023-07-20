import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../components/cart-item/CartItem";
import { Register } from "../register/Register";
import { UpChevron } from "../../components/UI/icons/UpChevron";
import { DownChevron } from "../../components/UI/icons/DownChevron";
import { CloseIcon } from "../../components/UI/icons/CloseIcon";

export const Checkout = () => {
  const {
    cartItems,
    total,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="font-heading h-screen bg-neutral-950 text-neutral-50 flex flex-col py-8 px-4 items-center justify-items-center">
      {cartItems.length === 0 && (
        <div className="flex flex-col h-full justify-center">
          <h1>Cart is empty. Add some products.</h1>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <h1 className="text-3xl font-heading uppercase">Checkout</h1>
          <div className="flex mx-auto pt-4 max-w-screen-2xl">
            {/* <div className=" col-start-1">

      <Register />
        </div> */}
            <ul className="py-4 max-w-md pr-4 space-y-3">
              <h3 className="font-sans uppercase font-extrabold text-md text-left tracking-wide pb-2">Items</h3>
              {cartItems.map((item) => (
                <li className="relative flex items-center space-x-8 bg-neutral-900 px-2 py-2 min-h-[120px]" key={item.id}>
                  <CartItem className="lg:text-base" product={item} />

                  <div className="absolute top-2 right-2">
                    <CloseIcon removeItem={() => removeItemFromCart(item)} />
                  </div>

                  <div className="flex-col">
                    <UpChevron increment={() => addItemToCart(item)} />

                    <DownChevron decrement={() => decreaseItemFromCart(item)} />
                  </div>
                </li>
              ))}
              <div className="flex flex-col text-left">
                <div className="mt-2 w-full flex">
                  <span className="w-full font-sans uppercase font-extrabold text-left tracking-wide pb-2">
                    subtotal:
                  </span>{" "}
                  <span className="font-sans uppercase font-bold text-left tracking-wide pb-2">£{total}</span>
                </div>
              </div>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
