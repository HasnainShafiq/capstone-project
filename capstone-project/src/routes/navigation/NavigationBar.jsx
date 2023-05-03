import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-indigo-900 py-4 h-16">
        <div className="relative ml-auto flex h-full w-full justify-end items-center">
        <div className="logo mr-auto ml-10">
          <Link to='/'>
          <h1 className="font-heading text-neutral-50 text-xl tracking-tighter">Logo</h1>
          </Link>
        </div>
          <ul className="font-heading w-full max-w-xs flex justify-evenly font-semibold text-neutral-200 text-xs">
            <li>
              <Link to='/'
                className="text-neutral-50 hover:underline hover:text-neutral-50 decoration-2  transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to='/'
                href=""
                className="text-neutral-50 hover:underline hover:text-neutral-50 decoration-2  transition-all"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link to='/'
                href=""
                className="text-neutral-50 hover:underline hover:text-neutral-50 decoration-2  transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link to='/sign-in'
                href=""
                className="text-neutral-50 hover:underline hover:text-neutral-50 decoration-2  transition-all"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
