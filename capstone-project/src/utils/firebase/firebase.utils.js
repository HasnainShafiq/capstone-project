// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, WriteBatch, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJFeeotxyyzt1qbpOE9aiEDGBpNVaoqKk",
  authDomain: "bjj-db.firebaseapp.com",
  projectId: "bjj-db",
  storageBucket: "bjj-db.appspot.com",
  messagingSenderId: "559667910838",
  appId: "1:559667910838:web:b2d154c3f6948b02f42e17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize googleAuthProvider
const googleProvider = new GoogleAuthProvider();

// NOTE: different services (e.g. Facebook, GitHub, Outlook) have their own auth providers.

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// initialize authentication for the app. This tracks authentication for the entire app.
export const auth = getAuth();

export const signOutUser = async () => await signOut(auth);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// access our database.
export const db = getFirestore();

// create a user in the db after authentication.
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  // identify user from the db, from the users collection, with the user's unique identifier
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  // return the user object
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);

  // check if the user exists in the db
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    // from the returned user object destructure the firstName, surname, and email => we will use these to  set a new user in the db.
    const { email, displayName } = userAuth;

    const createdAt = new Date();

    try {
      // using the values we deconstructed from the user object, we add a new user to the db
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("there was an error creating the user", error.message);
    }
  }
  // if user already exists in the db, return the user.
  return userDocRef;
};

// create and upload a collection
export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {

  // create variable to store ref of desired collection
  const collectionRef = collection(db, collectionKey);
  // write batch => set of write operations on one or more docs
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
}

export const getCategoriesandDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc; 
  }, {});

  return categoryMap;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) => {

  // if(!callback) {
  //   return
  // }

  onAuthStateChanged(auth, callback);
};
