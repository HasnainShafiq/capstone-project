import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {

    // return the user object from the data returned after authentication with Google.
    const { user } = await signInWithGooglePopup();
    
    //using the 'user' object, call the function to add the user to the db.
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="font-heading text-neutral-50 h-screen w-screen flex flex-col mx-auto place-content-center place-items-center space-y-4">
      <h1>Sign In Page</h1>
      <button
        className="flex justify-center items-center font-['Brown_Regular'] text-neutral-50 w-22"
        // trigger the sign in with google popup
        onClick={logGoogleUser}
      >
        Sign in
      </button>
    </div>
  );
};
