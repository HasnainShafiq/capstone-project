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
    <div className="font-Nofex h-screen bg-neutral-950 text-neutral-50 flex flex-col px-4 items-center justify-items-center">
      {cartItems.length === 0 && (
        <div className="flex flex-col h-full justify-center">
          <h1>Cart is empty. Add some products.</h1>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <h1 className="font-Nofex text-xl tracking-wide py-4">Checkout</h1>
          <div className="flex mx-auto pt-4 max-w-screen-2xl">
            {/* <div className=" col-start-1">

      <Register />
        </div> */}
            <ul className="col-start-2 py-4 max-w-md pr-4 space-y-3">
              <h3 className="font-sans uppercase font-extrabold text-md text-left tracking-wide pb-2">Items</h3>
              {cartItems.map((item) => (
                <li className="flex items-center content-center" key={item.id}>
                  <CartItem className="lg:text-base" product={item} />

                  <div className="mr-auto w-full ml-auto">
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
