import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { AccountIcon } from "../../components/UI/icons/AccountIcon";
import ShoppingBag from "../../components/UI/icons/ShoppingBag";
import { CartDropdown } from "../../components/cart-dropwdown/CartDropdown";
import { UserContext } from "../../contexts/user.context";
import { useState, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

const NavigationBar = () => {
  // get currentUser from UserContext. Retrieves latest value because when setCurrentUser is called upon sign-in, it causes any component listening for changes in currentUser to re-run.
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);

  const [accountIsOpen, setAccountIsOpen] = useState(false);

  const accountIsOpenHandler = () => {

    if (cartIsOpen) {
      setCartIsOpen(prevState => !prevState)
    }

    setAccountIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (cartIsOpen) {
      if (accountIsOpen) {
        setAccountIsOpen(prevState => !prevState)
      }
    }
  }, [cartIsOpen])

  const signOutHandler = async () => {
    await signOutUser();
  };

  // styling for nav links
  const linkStyles =
    "text-neutral-50 hover:underline hover:text-neutral-50 decoration-2 transition-all";

  // const [cartIsOpen, setCartIsOpen] = useState(false);

  // const cartOpenHandler = () => {
  //   setCartIsOpen((prevState) => !prevState);
  // };

  return (
    <>
      {/* The bg */}
      <nav className="relative bg-indigo-950 py-4 h-16">
        {/* The main container for the nav bar */}
        <div className="relative px-2 flex h-full w-full justify-end items-center lg:justify-center lg:px-0">
          {/* Container for the logo */}
          <div className="logo mr-auto ml-2 flex flex-1 md:ml-6 lg:ml-8">
            <Link to="/">
              <h1 className="font-heading uppercase text-neutral-50 text-md md:text-lg xl:text-xl tracking-wide">
                Hameem
              </h1>
            </Link>
          </div>
          {/* nav links container */}
          <ul className="font-body uppercase w-full max-w-xs flex justify-evenly items-center font-extrabold text-neutral-200 text-xs lg:mr-auto lg:max-w-lg">
            <li>
              <Link to="/" className={linkStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className={linkStyles}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className={linkStyles}>
                About
              </Link>
            </li>
          </ul>
          {/* if a currentUser exists... */}
          {currentUser ? (
            <div>
              <span
                className={`hover:cursor-pointer ${linkStyles}`}
                onClick={signOutHandler}
              >
                Log out
              </span>
            </div>
          ) : (
            // otherwise render this...
            <div className="flex flex-1 justify-end items-center sm:space-x-4 mr-2 md:mr-4 ml-auto text-neutral-50">
              <div onClick={accountIsOpenHandler} className="block min-[660px]:hidden">
                <AccountIcon />
              </div>
              {accountIsOpen && (
                <div className="absolute top-full mt-4 right-1 flex flex-col text-xs bg-neutral-900 text-neutral-300 font-heading uppercase px-6 py-4 gap-y-1 rounded-sm">
                  <Link to={"/identity/sign-in"}>Sign in</Link>
                  <Link to={"/identity/register"}>Register</Link>
                  </div>
              )}
              <span className="hidden min-[660px]:inline-flex font-body uppercase text-neutral-200 text-xs">
                <Link
                  to="/identity/sign-in"
                  className="hover:underline underline-offset-2 decoration-1 hover:text-neutral-50 transition"
                >
                  Sign in
                </Link>
              </span>
              <span className="hidden min-[660px]:inline-flex font-body uppercase text-neutral-200 text-xs">
                <Link
                  to="/identity/register"
                  className="hover:underline underline-offset-2 decoration-1 hover:text-neutral-50 transition"
                >
                  Register
                </Link>
              </span>
            </div>
          )}
          <div className="flex justify-center items-center mr-2 md:mr-4 lg:mr-8">
            <ShoppingBag />
          </div>
        </div>
        {cartIsOpen && <CartDropdown />}
      </nav>
      {/* Render children component here */}
      <Outlet />
    </>
  );
};

export default NavigationBar;
