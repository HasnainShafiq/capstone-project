import { Outlet, Link } from "react-router-dom";
import { auth } from "../../utils/firebase/firebase.utils";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { RiAccountBoxLine } from "react-icons/ri";
import { AccountIcon } from "../../components/UI/icons/AccountIcon";
import ShoppingBag from "../../components/UI/icons/ShoppingBag";

const NavigationBar = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        if (signOut) {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const linkStyles =
    "text-neutral-50 hover:underline hover:text-neutral-50 decoration-2 transition-all";

  return (
    <>
      <div className="bg-indigo-950 py-4 h-16">
        <div className="relative flex h-full w-full justify-end items-center lg:justify-center">
          <div className="logo mr-auto ml-2 flex flex-1 md:ml-6 lg:ml-8">
            <Link to="/">
              <h1 className="font-heading text-neutral-50 text-xl tracking-tighter">
                Logo
              </h1>
            </Link>
          </div>
          <ul className="font-body uppercase w-full max-w-xs flex justify-evenly items-center font-extrabold text-neutral-200 text-xs lg:mr-auto lg:max-w-lg">
            <li>
              <Link to="/" className={linkStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" href="" className={linkStyles}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" href="" className={linkStyles}>
                About
              </Link>
            </li>
            {!authUser ? (
              <>
                <li>
                  <Link to="/identity/sign-in" href="" className={linkStyles}>
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/identity/register" href="" className={linkStyles}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <span
                className={`hover:cursor-pointer ${linkStyles}`}
                onClick={userSignOut}
              >
                Log out
              </span>
            )}
          </ul>
          <div className="flex flex-1 ml-auto justify-end mr-2 md:mr-4 lg:mr-8 text-neutral-50 text-xl text-thin">
            <div className="flex flex-row items-center space-x-2">
              <AccountIcon />
              <ShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
