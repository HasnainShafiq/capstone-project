import { Button } from "../UI/button/Button";
import { CartItem } from "../cart-item/CartItem";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "./cart-dropdown.scss";

export const CartDropdown = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <>
      <div className="cart-dropdown absolute flex flex-col justify-between items-center top-full right-2 z-20 bg-neutral-900 pt-2 px-2 w-52 lg:w-60 lg:px-3 lg:pb-1 max-h-[400px] overflow-y-scroll">
        {cartItems.length === 0 && (
          <div className="font-body font-bold text-neutral-300 text-xs pb-2 lg:pt-1">
            <h3>Cart empty. Shop to add items.</h3>
          </div>
        )}
        {cartItems.length > 0 && (
          <>
            <ul className="relative">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CartItem product={item} />
                </li>
              ))}
              <li className="text-sm font-body text-neutral-300 font-bold py-1">Total: £{total}</li>
            </ul>
            <Link
              to={"/checkout"}
              className="relative mt-auto justify-self-end mb-2 flex justify-center items-center w-full py-1 font-body text-neutral-50 text-sm bg-indigo-800 hover:bg-indigo-900 hover:text-neutral-100 rounded-sm uppercase font-bold text-md"
            >
              Check out
              {/* check mark svg */}
              <span className="ml-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
