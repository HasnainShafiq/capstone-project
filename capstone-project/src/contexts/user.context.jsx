import { useState } from "react";
import { createContext, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// the values are default but will be overwritten by the provider -> these are the values we 'consume' in our context consumer.
// This is like a schema of what we want our UserContext to look like.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the provider overrides the default value in createContext.
export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  
  // We create an object with the values of currentUser and setCurrentUser taken from our provider state. Calling setCurrentUser from the child component updates the value of currentUser and causes  any component listening for currentUser to re-run.
  const value = { currentUser, setCurrentUser };


    useEffect(() => {
        // first we set up a listener when the app first renders.
        // when onAuthStateChanged resolves the auth, it returns the current user, which is either an object or null. We pass this as an argument to our callback function which we pass as the second argument to onAuthStateChanged
      const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        // we set the value in the useEffect as it centralises the functionality. Otherwise, we would be calling setUser in numerous files. 
        setCurrentUser(user);
      })
    
      // returns a cleanup function which removes the listener -> reason it does this is to prevent multiple unused listeners. 
      return unsubscribe;

    }, [])
    

  // the provider gives access to UserContext to children components. The value we pass to the provider is the value we want UserContext to be. 
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
