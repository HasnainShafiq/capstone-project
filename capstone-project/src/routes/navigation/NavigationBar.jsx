import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { AccountIcon } from "../../components/UI/icons/AccountIcon";
import ShoppingBag from "../../components/UI/icons/ShoppingBag";
import { UserContext } from "../../contexts/user.context";

const NavigationBar = () => {

  // get currentUser from UserContext. Retrieves latest value because when setCurrentUser is called upon sign-in, it causes any component listening for changes in currentUser to re-run.
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

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
            {/* if a currentUser exists... */}
            {currentUser ? (
              <span
                className={`hover:cursor-pointer ${linkStyles}`}
                onClick={signOutHandler}
              >
                Log out
              </span>
            ) : (
              // otherwise render this...
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
