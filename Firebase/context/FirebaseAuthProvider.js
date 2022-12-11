import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import { auth } from "../FirebaseConfig";

export const FirebaseAuth = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  //this is going to make user login persistant
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setIsLoading(false);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      setIsLoading(false);
      // ...
    }
  });

  //this function signs the user up
  const signUp = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Password Mismatch, Try Again....");
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        setError(errorMessage);
        // ..
      });
  };

  //this function signs the user up
  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <FirebaseAuth.Provider
      value={{
        isLoading,
        user,
        error,
        logout,
        signUp,
        signIn,
      }}
    >
      {children}
    </FirebaseAuth.Provider>
  );
};
