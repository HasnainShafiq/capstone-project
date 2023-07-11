import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { Link, useNavigate } from "react-router-dom";

import { FormInput } from "../../components/UI/form-input/FormInput";
import { Button } from "../../components/UI/button/Button";

import { useState } from "react";


import { FcGoogle } from "react-icons/fc";

export const Register = () => {
  const navigate = useNavigate();


  const logGoogleUser = async () => {
    try {
      // return the user object from the data returned after authentication with Google.
      const { user } = await signInWithGooglePopup();

      //using the 'user' object, call the function to add the user to the db.
      await createUserDocumentFromAuth(user);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const defaultFormFields = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, surname, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const validationFields = {
    emailValidation: "",
    passwordValidation: "",
  };

  const [validation, setValidation] = useState(validationFields);

  const { emailValidation } = validation;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { firstName, surname });

      resetFormFields();
      console.log(user);

      navigate("/", { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setValidation({
          ...validation,
          emailValidation: "email already in use",
        });
      } else {
        console.log("error creating user", error);
      }
    }
  };

  // create handler to update form fields with latest values
  const handleChange = (event) => {
    // take name and value from event object
    const { name, value } = event.target;

    // update formFields object with previous values, and update the relevant form field being typed in with its up to date value.
    setFormFields({ ...formFields, [name]: value });
  };

  // [name]: value is same as prevState[name]: value

  return (
    <div className="font-Nofex text-neutral-50 h-screen flex flex-col px-4 mx-auto place-content-center place-items-center sm:w-3/4">
      <div className="mb-8">
        <h1 className="text-3xl">Hameem BJJ</h1>
      </div>
      <div className="w-full flex flex-col place-items-center py-8 bg-neutral-900 rounded-sm sm:px-2 sm:w-5/6 md:w-9/12 max-w-md">
        <h2 className="text-md tracking-widest">register with email</h2>

        <form
          action=""
          className="flex flex-col justify-center content-center w-3/4 rounded-sm space-y-5 mt-4 md:w-5/6"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-2 justify-between">
            <div className="flex flex-col w-[48%] text-left space-y-2">
              <label
                className="font-sans text-neutral-100 uppercase font-bold text-sm"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <FormInput
                label="firstName"
                type="text"
                name="firstName"
                id="firstName"
                required
                onChange={handleChange}
                value={firstName}
              />
            </div>

            <div className="flex flex-col w-[48%] text-left space-y-2">
              <label
                className="font-sans text-neutral-100 uppercase font-bold text-sm"
                htmlFor="surname"
              >
                surname:
              </label>
              <FormInput
                label="surname"
                type="text"
                name="surname"
                id="surname"
                required
                onChange={handleChange}
                value={surname}
              />
            </div>
          </div>

          <div className="flex flex-col text-left space-y-2">
            <label
              className="font-sans text-neutral-100 uppercase font-bold text-sm"
              htmlFor="email"
            >
              Email:
            </label>
            <FormInput
              label="email"
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              value={email}
            />
            <span className="font-body text-red-600 text-sm">
              {emailValidation}
            </span>
          </div>

          <div className="flex flex-col text-left space-y-2">
            <label
              className="font-sans text-neutral-100 uppercase font-bold text-sm"
              htmlFor="password"
            >
              Password:
            </label>
            <FormInput
              label="password"
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
              value={password}
            />
          </div>

          <div className="flex flex-col text-left space-y-2">
            <label
              className="font-sans text-neutral-100 uppercase font-bold text-sm"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <FormInput
              label="confirmPassword"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              onChange={handleChange}
              value={confirmPassword}
            />
          </div>

          <Button
            type="submit"
            buttonType="formSubmit"
            className="bg-indigo-800 hover:bg-indigo-900 rounded-sm font-sans uppercase font-bold text-md"
          >
            Sign up
          </Button>
        </form>

        <h2 className="text-md mt-8 tracking-widest">Or Sign up with...</h2>

        {/* sign in with Google popup */}
        <Button
          buttonType="google"
          // trigger the sign in with google popup
          onClick={logGoogleUser}
        >
          <FcGoogle />{" "}
          <span className="font-sans uppercase font-bold text-md text-neutral-50 tracking-wide">
            GOOGLE
          </span>
        </Button>

        <p className="font-body mt-4 text-sm">
          If you have an account,{" "}
          <span className="underline hover:decoration-indigo-500">
            <Link to={"/identity/sign-in"}>sign in here.</Link>
          </span>
        </p>

        {/* <span className="text-7xl -rotate-90 text-neutral-800 absolute right-0 bottom-1/3">Hameem BJJ</span> */}
      </div>
    </div>
  );
};
