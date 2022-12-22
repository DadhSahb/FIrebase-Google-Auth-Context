import React, { createContext } from "react";
import { auth } from "../config";
import { firebase } from "firebase";
export const ContextProvider = createContext();

const ContextFunc = (props) => {
  const register = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <ContextProvider.Provider value={{ register }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextFunc;
