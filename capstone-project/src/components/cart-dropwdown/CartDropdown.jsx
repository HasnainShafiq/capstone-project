import { Button } from "../UI/button/Button";

export const CartDropdown = () => {
  return (
    <>
      <div className="absolute flex flex-col justify-between top-full right-2 lg:right-4 z-20 bg-neutral-900 p-2 w-52 h-52">
        <p>Products</p>
        <Button
          buttonType="formSubmit"
          className="relative flex justify-center items-center w-full py-1 font-body font-bold text-neutral-50 text-sm"
        >
          Check out
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
        </Button>
      </div>
    </>
  );
};
