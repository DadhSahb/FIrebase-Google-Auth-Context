import { createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  // signOut,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthProvider = createContext();

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <AuthProvider.Provider value={{ googleSignIn }}>
      {children}
    </AuthProvider.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthProvider);
};
