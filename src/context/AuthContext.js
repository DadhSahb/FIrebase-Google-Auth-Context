import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthProvider = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const userDetails = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User Details", currentUser);
    });
    return userDetails();
  }, []);

  return (
    <AuthProvider.Provider value={{ googleSignIn, user, logout }}>
      {children}
    </AuthProvider.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthProvider);
};
