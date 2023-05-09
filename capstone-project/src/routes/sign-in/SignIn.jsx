import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../../components/UI/form-input/FormInput";
import { Button } from "../../components/UI/button/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
// import { FaFacebookF } from "react-icons/fa";

export const SignIn = () => {
  const navigate = useNavigate();

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const validationFields = {
    emailValidation: "",
    passwordValidation: "",
  };

  const [validation, setValidation] = useState(validationFields);

  const { emailValidation, passwordValidation } = validation;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);

      resetFormFields();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.code)
      switch(error.code) {
        case 'auth/wrong-password':
          setValidation({
            ...validation,
            passwordValidation: 'Incorrect password'
          });
          break
        case 'auth/user-not-found':
          setValidation({
            ...validation,
            emailValidation: 'No user associated with this email'
          })
          break
        default:
          console.log(error)
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

  const logGoogleUser = async () => {
    // return the user object from the data returned after authentication with Google.
    const { user } = await signInWithGooglePopup();

    //using the 'user' object, call the function to add the user to the db if not already in db.
    await createUserDocumentFromAuth(user);
    navigate("/", { replace: true });
  };

  return (
    <div className="font-heading text-neutral-50 h-screen flex flex-col px-4 mx-auto place-content-center place-items-center sm:w-3/4">
      <div className="mb-8">
        <h1 className="text-3xl">Hameem BJJ</h1>
      </div>
      <div className="w-full flex flex-col place-items-center py-8 bg-neutral-900 rounded-sm sm:px-2 sm:w-5/6 md:w-9/12 max-w-md">
        <h2 className="text-md tracking-widest">sign in with email</h2>

        <form
          action=""
          className="flex flex-col justify-center content-center w-3/4 rounded-sm space-y-5 mt-4 md:w-5/6"
          onSubmit={handleSubmit}
        >
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
              onChange={handleChange}
              value={email}
            />
            <span className="font-body text-red-600 text-sm">{ emailValidation }</span>
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
              onChange={handleChange}
              value={password}
            />
            <span className="font-body text-red-600 text-sm">{ passwordValidation }</span>
          </div>
          <Button type="submit" buttonType="formSubmit">
            Sign in
          </Button>
        </form>

        <h2 className="text-md mt-8 tracking-widest">Or Sign In with...</h2>

        {/* sign in with Google popup */}
        <Button
          type="button"
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
          If you don't have an account,{" "}
          <span className="underline hover:decoration-indigo-500">
            <Link to={"/identity/register"}>register here.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
